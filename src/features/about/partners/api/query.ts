import { useQuery } from "@tanstack/react-query"
import useTranslation from "next-translate/useTranslation"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getPartnersApi } from "./index.ts"

export const useGetPartnersQuery = () => {
  const { lang } = useTranslation()
  return useQuery({
    queryFn: () => getPartnersApi(lang),
    queryKey: [apiKeys.partners, lang],
    select: (data) => data,
  })
}
