import { useQuery } from "@tanstack/react-query"
import useTranslation from "next-translate/useTranslation"

import { ICaseParams } from "@/entities/cases/types.ts"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getCaseCategoriesApi, getCasesApi } from "./index.ts"

export const useGetCasesQuery = (params: ICaseParams) => {
  return useQuery({
    queryFn: () => getCasesApi(params),
    queryKey: [apiKeys.cases, params],
    select: (data) => data,
  })
}

export const useCaseCategoriesQuery = () => {
  const { lang } = useTranslation()
  return useQuery({
    queryFn: () => getCaseCategoriesApi(lang),
    queryKey: [apiKeys.caseCategories, lang],
    select: (data) => data,
  })
}
