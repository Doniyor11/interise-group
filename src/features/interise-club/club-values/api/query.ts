import { useQuery } from "@tanstack/react-query"
import useTranslation from "next-translate/useTranslation"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getCompanyValuesApi, getExpertsFocusingApi } from "./index.ts"

export const useGetCompanyValuesQuery = () => {
  const { lang } = useTranslation()
  return useQuery({
    queryFn: () => getCompanyValuesApi(lang),
    queryKey: [apiKeys.companyValues, lang],
    select: (data) => data,
  })
}

export const useGetExpertsFocusingQuery = () => {
  const { lang } = useTranslation()
  return useQuery({
    queryFn: () => getExpertsFocusingApi(lang),
    queryKey: [apiKeys.expertsFocusing, lang],
    select: (data) => data,
  })
}
