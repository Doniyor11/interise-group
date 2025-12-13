import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getCompanyValuesApi = async (lang?: string) => {
  const response = await clientApi.get(apiKeys.companyValues, {
    params: {
      lang,
    },
  })
  return response?.data?.data
}

export const getExpertsFocusingApi = async (lang?: string) => {
  const response = await clientApi.get(apiKeys.expertsFocusing, {
    params: {
      lang,
    },
  })
  return response?.data?.data
}
