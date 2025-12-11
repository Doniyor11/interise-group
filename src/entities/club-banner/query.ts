import { useQuery } from "@tanstack/react-query"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getClubBannerApi } from "./index.ts"

export const useGetClubBannerQuery = () => {
  return useQuery({
    queryFn: () => getClubBannerApi(),
    queryKey: [apiKeys.clubBanner],
    select: (data) => data,
  })
}
