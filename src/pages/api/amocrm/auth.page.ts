import type { NextApiRequest, NextApiResponse } from "next"

import { exchangeCodeForToken } from "@/shared/lib/amocrm/auth"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { code } = req.query

  if (!code || typeof code !== "string") {
    const clientId = process.env.AMOCRM_CLIENT_ID
    const redirectUri = process.env.AMOCRM_REDIRECT_URI

    if (!clientId || !redirectUri) {
      return res.status(500).json({ error: "OAuth credentials not configured" })
    }

    const authUrl = `https://www.amocrm.ru/oauth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=amocrm_auth`

    return res.status(200).json({
      message:
        "No authorization code provided. Please visit the following URL to authorize:",
      authUrl,
      instructions: [
        "1. Visit the authUrl above in your browser",
        "2. Authorize the application",
        "3. You will be redirected back to your redirect_uri with a code parameter",
        "4. Visit this endpoint again with ?code=YOUR_CODE",
      ],
    })
  }

  try {
    const tokens = await exchangeCodeForToken(code)

    console.log("\n=== amoCRM OAuth Success ===")
    console.log("Access Token:", tokens.access_token)
    console.log("Refresh Token:", tokens.refresh_token)
    console.log("Expires In:", tokens.expires_in, "seconds")
    console.log("\nCopy the refresh token above and add it to your .env.local file:")
    console.log(`AMOCRM_REFRESH_TOKEN=${tokens.refresh_token}`)
    console.log("===========================\n")

    return res.status(200).json({
      success: true,
      message:
        "OAuth successful! Check your server console for the refresh token.",
      tokens: {
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
        expires_in: tokens.expires_in,
      },
    })
  } catch (error: any) {
    console.error("[OAuth Error]", error.message)
    return res.status(500).json({
      error: "Failed to exchange code for token",
      details: error.message,
    })
  }
}
