import * as yup from "yup"
import type { NextApiRequest, NextApiResponse } from "next"

import { amoCRMClient } from "@/shared/api/amocrm-client"
import { getAccessToken } from "@/shared/lib/amocrm/auth"
import {
  mapToAmoCRMContact,
  mapToAmoCRMLead,
  mapToNewsletterLead,
} from "@/shared/lib/amocrm/mappers"
import {
  AmoCRMContactResponse,
  AmoCRMLeadResponse,
  FormSubmissionData,
} from "@/shared/lib/amocrm/types"

const formDataSchema = yup.object({
  name: yup.string().required().max(255),
  surname: yup.string().max(255),
  phone: yup.string().required(),
  contactMethod: yup.string(),
  company: yup.string().max(255),
  telegram: yup.string().max(255),
  event: yup.string().max(255),
  source: yup.string().required(),
})

const MAX_RETRIES = 2
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function isRetriableError(error: any): boolean {
  return (
    error.response?.status === 429 ||
    error.response?.status >= 500 ||
    error.code === "ECONNABORTED" ||
    error.code === "ETIMEDOUT"
  )
}

async function createContactAndLead(
  formData: FormSubmissionData,
  retries = 0,
): Promise<{ contactId: number; leadId: number; newsletterLeadId?: number }> {
  try {
    const accessToken = await getAccessToken()

    console.log("[amoCRM] Submission started", { source: formData.source })

    const contact = mapToAmoCRMContact(formData)
    const contactResponse = await amoCRMClient.post<AmoCRMContactResponse>(
      "/contacts",
      [contact],
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )

    const contactId = contactResponse.data._embedded.contacts[0].id
    console.log("[amoCRM] Contact created", { contactId })

    const lead = mapToAmoCRMLead(formData, contactId)
    const leadResponse = await amoCRMClient.post<AmoCRMLeadResponse>(
      "/leads",
      [lead],
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )

    const leadId = leadResponse.data._embedded.leads[0].id
    console.log("[amoCRM] Lead created", { leadId })

    // Create newsletter lead if newsletterConsent field exists
    let newsletterLeadId: number | undefined
    const newsletterLead = mapToNewsletterLead(formData, contactId)

    if (newsletterLead) {
      try {
        const newsletterLeadResponse =
          await amoCRMClient.post<AmoCRMLeadResponse>(
            "/leads",
            [newsletterLead],
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            },
          )

        newsletterLeadId = newsletterLeadResponse.data._embedded.leads[0].id
        console.log("[amoCRM] Newsletter lead created", {
          newsletterLeadId,
          consent: formData.newsletterConsent ? "СОГЛАСЕН" : "НЕ СОГЛАСЕН",
        })
      } catch (newsletterError: any) {
        // Log newsletter lead error but don't fail the whole request
        console.error("[amoCRM] Newsletter lead creation failed", {
          error: newsletterError.message,
          status: newsletterError.response?.status,
        })
      }
    }

    return { contactId, leadId, newsletterLeadId }
  } catch (error: any) {
    console.error("[amoCRM] Error", {
      error: error.message,
      code: error.response?.status,
      retries,
    })

    if (retries < MAX_RETRIES && isRetriableError(error)) {
      await delay(1000 * (retries + 1))
      return createContactAndLead(formData, retries + 1)
    }

    throw error
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    await formDataSchema.validate(req.body)

    const formData = req.body as FormSubmissionData

    const result = await createContactAndLead(formData)

    return res.status(200).json({
      success: true,
      contactId: result.contactId,
      leadId: result.leadId,
      newsletterLeadId: result.newsletterLeadId,
    })
  } catch (error: any) {
    console.error("[amoCRM Submission Error]", error)

    if (error.name === "ValidationError") {
      return res.status(400).json({
        error: "Invalid form data",
        details: error.errors,
      })
    }

    return res.status(500).json({
      error: "Failed to submit to amoCRM",
      details: error.message,
    })
  }
}
