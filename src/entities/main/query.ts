import { useQuery } from "@tanstack/react-query"
import useTranslation from "next-translate/useTranslation"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getMainSprintsApi } from "./index.ts"

export const useGetMainSprintsQuery = () => {
  const { lang } = useTranslation()
  return useQuery({
    queryFn: () => getMainSprintsApi(lang),
    queryKey: [apiKeys.mainSprints, lang],
    select: (data) => data,
  })
}
