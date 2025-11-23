import { IResearchParams } from "@/entities/research/types.ts"

import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getResearchesApi = async (params?: IResearchParams) => {
  const response = await clientApi.get(apiKeys.research, {
    params: {
      lang: params?.lang,
      month: params?.month,
      year: params?.year,
    },
  })
  return response?.data?.data
}
