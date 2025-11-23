import { useQuery } from "@tanstack/react-query"

import { IResearchParams } from "@/entities/research/types.ts"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getResearchesApi } from "./index.ts"

export const useGetResearchesQuery = (params?: IResearchParams) => {
  return useQuery({
    queryFn: () => getResearchesApi(params),
    queryKey: [apiKeys.research, params],
    select: (data) => data,
  })
}
