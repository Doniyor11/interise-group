import { useQuery } from "@tanstack/react-query"
import useTranslation from "next-translate/useTranslation"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getEventsApi, getUpcomingEventsApi } from "./index.ts"

export const useGetEventsQuery = () => {
  const { lang } = useTranslation()
  return useQuery({
    queryFn: () => getEventsApi(lang),
    queryKey: [apiKeys.events, lang],
    select: (data) => data,
  })
}

export const useGetUpcomingEventsQuery = (type: string) => {
  const { lang } = useTranslation()
  return useQuery({
    queryFn: () => getUpcomingEventsApi(lang, type),
    queryKey: [apiKeys.upcomingEvents, lang, type],
    select: (data) => data,
  })
}
