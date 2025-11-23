import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getOurTeamApi = async (lang: string) => {
  const response = await clientApi.get(apiKeys.ourTeam, {
    params: { lang },
  })
  return response?.data?.data
}
