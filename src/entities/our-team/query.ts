import { useQuery } from "@tanstack/react-query"
import useTranslation from "next-translate/useTranslation"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getOurTeamApi } from "./index.ts"

export const useGetOurTeamQuery = () => {
  const { lang } = useTranslation()
  return useQuery({
    queryFn: () => getOurTeamApi(lang),
    queryKey: [apiKeys.ourTeam, lang],
    select: (data) => data,
  })
}
