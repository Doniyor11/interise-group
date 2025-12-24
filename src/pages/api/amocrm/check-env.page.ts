import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const envStatus = {
    supabase: {
      url: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      service_key: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      url_preview: process.env.NEXT_PUBLIC_SUPABASE_URL
        ? `${process.env.NEXT_PUBLIC_SUPABASE_URL.substring(0, 30)}...`
        : "NOT SET",
    },
    amocrm: {
      client_id: !!process.env.AMOCRM_CLIENT_ID,
      client_secret: !!process.env.AMOCRM_CLIENT_SECRET,
      redirect_uri: !!process.env.AMOCRM_REDIRECT_URI,
      subdomain: process.env.AMOCRM_SUBDOMAIN || "interise",
      refresh_token_env: !!process.env.AMOCRM_REFRESH_TOKEN,
    },
    warnings: [] as string[],
  }

  // Check for missing critical env vars
  if (!envStatus.supabase.url) {
    envStatus.warnings.push("❌ NEXT_PUBLIC_SUPABASE_URL not set")
  }
  if (!envStatus.supabase.service_key) {
    envStatus.warnings.push("❌ SUPABASE_SERVICE_ROLE_KEY not set")
  }
  if (!envStatus.amocrm.client_id) {
    envStatus.warnings.push("❌ AMOCRM_CLIENT_ID not set")
  }
  if (!envStatus.amocrm.client_secret) {
    envStatus.warnings.push("❌ AMOCRM_CLIENT_SECRET not set")
  }
  if (!envStatus.amocrm.redirect_uri) {
    envStatus.warnings.push("❌ AMOCRM_REDIRECT_URI not set")
  }

  const allGood = envStatus.warnings.length === 0

  return res.status(allGood ? 200 : 500).json({
    status: allGood
      ? "✅ All environment variables set"
      : "❌ Missing variables",
    ...envStatus,
  })
}
