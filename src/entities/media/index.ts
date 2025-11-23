import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getMediaApi = async (lang: string) => {
  const response = await clientApi.get(apiKeys.media, {
    params: { lang },
  })
  return response?.data?.data
}
