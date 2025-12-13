import { useQuery } from "@tanstack/react-query"

import { IClubImagesParam } from "@/entities/club-images/types.ts"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getClubImagesApi, getMediaImagesApi } from "./index.ts"

export const useGetClubImagesQuery = (params: IClubImagesParam) => {
  return useQuery({
    queryFn: () => getClubImagesApi(params),
    queryKey: [apiKeys.clubImages, params],
    select: (data) => data,
  })
}

export const useGetMediaImagesQuery = (params: IClubImagesParam) => {
  return useQuery({
    queryFn: () => getMediaImagesApi(params),
    queryKey: [apiKeys.mediaImages, params.section],
    select: (data) => data,
  })
}
