import { IClubImagesParam } from "@/entities/club-images/types.ts"

import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getClubImagesApi = async (params: IClubImagesParam) => {
  const response = await clientApi.get(apiKeys.clubImages, {
    params: {
      lang: params?.lang,
      section: params?.section,
    },
  })
  return response?.data?.data
}

export const getMediaImagesApi = async (params: IClubImagesParam) => {
  const response = await clientApi.get(apiKeys.mediaImages, {
    params: {
      section: params?.section,
    },
  })
  return response?.data?.data
}
