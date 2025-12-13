import cx from "clsx"
import React, { useEffect, useMemo, useRef } from "react"

import { useGetClubBannerQuery } from "@/entities/club-banner/query.ts"

import ImagePoster from "@/shared/assets/images/interise-group/poster.png"
import { Breadcrumbs } from "@/shared/ui/breadcrumbs"

import { useBreadcrumbs } from "./libs.ts"
import s from "./styles.module.scss"

const isVideoUrl = (url: string | undefined): boolean => {
  if (!url) return false
  const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi"]
  return videoExtensions.some((ext) => url.toLowerCase().includes(ext))
}

export const InteriseClubMain = () => {
  const breadcrumbs = useBreadcrumbs()
  const { data } = useGetClubBannerQuery()
  const videoRef = useRef<HTMLVideoElement>(null)

  const isVideo = useMemo(() => isVideoUrl(data?.url), [data?.url])

  useEffect(() => {
    if (isVideo && data?.url && videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error)
      })
    }
  }, [data?.url, isVideo])

  return (
    <>
      <div className={s.topSectionWrapper}>
        <div data-aos="zoom-in-up" className={cx(s.container, "container")}>
          <Breadcrumbs data={breadcrumbs} />
          <h1>InteriseClub</h1>
        </div>
        {isVideo ? (
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="auto"
            ref={videoRef}
            className={s.video}
            poster={ImagePoster.src}
          >
            <source src={data?.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={data?.url} alt="InteriseClub Banner" className={s.video} />
        )}
      </div>
    </>
  )
}
