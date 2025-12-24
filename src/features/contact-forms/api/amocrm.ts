import axios from "axios"

import { FormSubmissionData } from "@/shared/lib/amocrm/types"

export const sendToAmoCRM = async (formData: FormSubmissionData) => {
  const response = await axios.post("/api/amocrm/submit", formData)
  return response.data
}
