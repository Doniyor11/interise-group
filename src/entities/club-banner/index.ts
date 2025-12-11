import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getClubBannerApi = async () => {
  const response = await clientApi.get(apiKeys.clubBanner)
  return response?.data?.data
}
