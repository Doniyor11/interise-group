import { useQuery } from "@tanstack/react-query"
import useTranslation from "next-translate/useTranslation"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getMediaApi } from "./index.ts"

export const useGetMediaQuery = () => {
  const { lang } = useTranslation()
  return useQuery({
    queryFn: () => getMediaApi(lang),
    queryKey: [apiKeys.media, lang],
    select: (data) => data,
  })
}
