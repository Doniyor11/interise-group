import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import React, { useMemo, useRef } from "react"

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
  const { lang } = useTranslation()
  const breadcrumbs = useBreadcrumbs()
  const { data } = useGetClubBannerQuery()
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleCanPlay = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = true

    video.play().catch(() => {})
  }

  const isVideo = useMemo(() => isVideoUrl(data?.url), [data?.url])

  return (
    <>
      <div className={s.topSectionWrapper}>
        <div data-aos="zoom-in-up" className={cx(s.container, "container")}>
          <Breadcrumbs data={breadcrumbs} />
          {lang === "ru" ? <h1>ИнтерайзКлуб</h1> : <h1>InteriseClub</h1>}
        </div>
        {isVideo ? (
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            preload="auto"
            poster={ImagePoster.src}
            className={s.video}
            onCanPlay={handleCanPlay}
          >
            <source src={data?.url} type="video/mp4" />
          </video>
        ) : (
          <img src={data?.url} alt="InteriseClub Banner" className={s.video} />
        )}
      </div>
    </>
  )
}
