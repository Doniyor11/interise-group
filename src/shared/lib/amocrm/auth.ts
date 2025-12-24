import axios from "axios"

import {
  getRefreshToken as getRefreshTokenFromDB,
  saveTokens,
} from "@/shared/lib/supabase/oauth-tokens"

import { OAuthTokenResponse, TokenCache } from "./types"

const AMOCRM_SUBDOMAIN = process.env.AMOCRM_SUBDOMAIN || "interise"
const CLIENT_ID = process.env.AMOCRM_CLIENT_ID
const CLIENT_SECRET = process.env.AMOCRM_CLIENT_SECRET
const REDIRECT_URI = process.env.AMOCRM_REDIRECT_URI
const ENV_REFRESH_TOKEN = process.env.AMOCRM_REFRESH_TOKEN

let tokenCache: TokenCache | null = null

/**
 * Get current refresh token from Supabase, fallback to .env.local
 */
async function getCurrentRefreshToken(): Promise<string> {
  // Try Supabase first
  const dbToken = await getRefreshTokenFromDB()
  if (dbToken) {
    console.log("[amoCRM Auth] Using refresh token from Supabase")
    return dbToken
  }

  // Fallback to environment variable (for initial setup)
  if (ENV_REFRESH_TOKEN) {
    console.log("[amoCRM Auth] Using refresh token from .env.local (fallback)")
    console.log(
      "[amoCRM Auth] ⚠️ Consider running the SQL migration to store tokens in Supabase",
    )
    return ENV_REFRESH_TOKEN
  }

  throw new Error(
    "No refresh token found. Please run OAuth flow or check Supabase configuration.",
  )
}

export async function refreshAccessToken(): Promise<string> {
  if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
    throw new Error("amoCRM OAuth credentials are not configured")
  }

  const currentRefreshToken = await getCurrentRefreshToken()

  console.log("[amoCRM Auth] Refreshing access token...")
  console.log("[amoCRM Auth] Using subdomain:", AMOCRM_SUBDOMAIN)

  try {
    const response = await axios.post<OAuthTokenResponse>(
      `https://${AMOCRM_SUBDOMAIN}.amocrm.ru/oauth2/access_token`,
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: currentRefreshToken,
        redirect_uri: REDIRECT_URI,
      },
    )

    const { access_token, expires_in, refresh_token } = response.data

    console.log("[amoCRM Auth] Token refreshed successfully")
    console.log("[amoCRM Auth] Expires in:", expires_in, "seconds")

    // Save tokens to Supabase
    const saved = await saveTokens(access_token, refresh_token, expires_in)
    if (saved) {
      console.log("[amoCRM Auth] ✅ Tokens saved to Supabase")
    } else {
      console.warn(
        "[amoCRM Auth] ⚠️ Failed to save tokens to Supabase, tokens will work but won't persist",
      )
    }

    // Update in-memory cache
    tokenCache = {
      accessToken: access_token,
      expiresAt: Date.now() + expires_in * 1000 - 60000,
    }

    return access_token
  } catch (error: any) {
    console.error("[amoCRM Auth] Failed to refresh token:", error.message)
    console.error(
      "[amoCRM Auth] Response:",
      error.response?.data || "No response data",
    )
    throw error
  }
}

export async function getAccessToken(): Promise<string> {
  if (tokenCache && tokenCache.expiresAt > Date.now()) {
    console.log("[amoCRM Auth] Using cached token")
    return tokenCache.accessToken
  }

  console.log("[amoCRM Auth] Token expired or not cached, refreshing...")
  return await refreshAccessToken()
}

export async function exchangeCodeForToken(
  code: string,
): Promise<OAuthTokenResponse> {
  if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
    throw new Error("amoCRM OAuth credentials are not configured")
  }

  try {
    const response = await axios.post<OAuthTokenResponse>(
      `https://${AMOCRM_SUBDOMAIN}.amocrm.ru/oauth2/access_token`,
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
      },
    )

    const { access_token, refresh_token, expires_in } = response.data

    // Save tokens to Supabase
    console.log("[amoCRM Auth] Saving OAuth tokens to Supabase...")
    const saved = await saveTokens(access_token, refresh_token, expires_in)
    if (saved) {
      console.log("[amoCRM Auth] ✅ Tokens saved to Supabase successfully")
    } else {
      console.warn("[amoCRM Auth] ⚠️ Failed to save tokens to Supabase")
      console.log(
        "[amoCRM Auth] Manual fallback - add to .env.local:",
        `AMOCRM_REFRESH_TOKEN=${refresh_token}`,
      )
    }

    return response.data
  } catch (error: any) {
    console.error("[amoCRM Auth] Failed to exchange code:", error.message)
    throw error
  }
}
