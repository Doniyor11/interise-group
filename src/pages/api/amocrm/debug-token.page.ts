import type { NextApiRequest, NextApiResponse } from "next"

import { getOAuthTokens } from "@/shared/lib/supabase/oauth-tokens"

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    // Get tokens from Supabase
    const tokens = await getOAuthTokens()

    if (!tokens) {
      return res.status(404).json({
        error: "No tokens found in Supabase",
        hint: "Run the SQL migration and set initial refresh token",
      })
    }

    // Mask sensitive data for security
    const maskedTokens = {
      id: tokens.id,
      provider: tokens.provider,
      access_token: tokens.access_token
        ? `${tokens.access_token.substring(0, 10)}...`
        : "EMPTY",
      refresh_token: tokens.refresh_token
        ? `${tokens.refresh_token.substring(0, 10)}...`
        : "EMPTY",
      expires_at: tokens.expires_at,
      expires_at_human: new Date(tokens.expires_at).toISOString(),
      is_expired: tokens.expires_at < Date.now(),
      created_at: tokens.created_at,
      updated_at: tokens.updated_at,
    }

    // Also check .env fallback
    const envToken = process.env.AMOCRM_REFRESH_TOKEN
    const envTokenMasked = envToken
      ? `${envToken.substring(0, 10)}...`
      : "NOT SET"

    return res.status(200).json({
      supabase: maskedTokens,
      env_fallback: {
        refresh_token: envTokenMasked,
      },
      status: tokens.refresh_token
        ? "✅ Refresh token exists in Supabase"
        : "❌ Refresh token is EMPTY in Supabase",
    })
  } catch (error: any) {
    return res.status(500).json({
      error: "Failed to fetch tokens",
      details: error.message,
    })
  }
}
