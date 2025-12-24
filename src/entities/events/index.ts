import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getEventsApi = async (lang: string) => {
  const response = await clientApi.get(apiKeys.events, {
    params: { lang },
  })
  return response?.data?.data
}

export const getUpcomingEventsApi = async (lang: string, type: string) => {
  const response = await clientApi.get(apiKeys.upcomingEvents, {
    params: { lang, type },
  })
  return response?.data?.data
}
