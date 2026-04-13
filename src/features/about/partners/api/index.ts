import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getPartnersApi = async (lang: string) => {
  const response = await clientApi.get(apiKeys.partners, {
    params: { lang },
  })
  return response?.data?.data
}
