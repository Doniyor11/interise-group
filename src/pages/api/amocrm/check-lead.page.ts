import type { NextApiRequest, NextApiResponse } from "next"

import { amoCRMClient } from "@/shared/api/amocrm-client"
import { getAccessToken } from "@/shared/lib/amocrm/auth"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query

  if (!id) {
    return res.status(400).json({ error: "Lead ID required" })
  }

  try {
    const accessToken = await getAccessToken()

    const response = await amoCRMClient.get(`/leads/${id}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })

    return res.status(200).json(response.data)
  } catch (error: any) {
    console.error("[Lead Check Error]", error.response?.data || error.message)
    return res.status(500).json({
      error: "Failed to fetch lead",
      details: error.response?.data || error.message,
    })
  }
}
