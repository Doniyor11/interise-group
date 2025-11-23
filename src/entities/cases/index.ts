import { ICaseParams } from "@/entities/cases/types.ts"

import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getCasesApi = async (params: ICaseParams) => {
  const response = await clientApi.get(apiKeys.cases, {
    params: {
      lang: params.lang,
      search: params.search,
      category_id: params.category,
      for_main: params.for_main,
    },
  })
  return response?.data?.data
}

export const getCaseCategoriesApi = async (lang?: string) => {
  const response = await clientApi.get(apiKeys.caseCategories, {
    params: {
      lang,
    },
  })
  return response?.data?.data
}
