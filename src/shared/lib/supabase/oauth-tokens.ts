import { supabaseAdmin } from "./client"
import { OAuthToken, OAuthTokenUpdate } from "./types"

const PROVIDER = "amocrm"

/**
 * Get OAuth tokens from database
 */
export async function getOAuthTokens(): Promise<OAuthToken | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from("oauth_tokens")
      .select("*")
      .eq("provider", PROVIDER)
      .single()

    if (error) {
      console.error("[Supabase] Error fetching OAuth tokens:", error.message)
      return null
    }

    return data
  } catch (error) {
    console.error("[Supabase] Unexpected error fetching tokens:", error)
    return null
  }
}

/**
 * Update OAuth tokens in database
 */
export async function updateOAuthTokens(
  tokens: OAuthTokenUpdate,
): Promise<boolean> {
  try {
    const { error } = await supabaseAdmin
      .from("oauth_tokens")
      .update({
        ...tokens,
        updated_at: new Date().toISOString(),
      })
      .eq("provider", PROVIDER)

    if (error) {
      console.error("[Supabase] Error updating OAuth tokens:", error.message)
      return false
    }

    console.log("[Supabase] ✅ OAuth tokens updated successfully")
    return true
  } catch (error) {
    console.error("[Supabase] Unexpected error updating tokens:", error)
    return false
  }
}

/**
 * Get only the refresh token from database
 */
export async function getRefreshToken(): Promise<string | null> {
  const tokens = await getOAuthTokens()
  return tokens?.refresh_token || null
}

/**
 * Save new refresh token to database
 */
export async function saveRefreshToken(refreshToken: string): Promise<boolean> {
  return await updateOAuthTokens({ refresh_token: refreshToken })
}

/**
 * Save both access and refresh tokens with expiry
 */
export async function saveTokens(
  accessToken: string,
  refreshToken: string,
  expiresIn: number,
): Promise<boolean> {
  return await updateOAuthTokens({
    access_token: accessToken,
    refresh_token: refreshToken,
    expires_at: Date.now() + expiresIn * 1000,
  })
}
