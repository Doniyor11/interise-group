import { Text } from "@mantine/core"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import React from "react"

import { useBreadcrumbs } from "@/features/about/main-banner/libs.ts"

import ImageAbout from "@/shared/assets/images/interise-group/image-about.png"
import { Breadcrumbs } from "@/shared/ui/breadcrumbs"

import s from "./styles.module.scss"

export const AboutMainBanner = () => {
  const { t } = useTranslation("common")
  const breadcrumbs = useBreadcrumbs()

  return (
    <>
      <div className={s.topSectionWrapper}>
        <div className={cx(s.container, "container")}>
          <div className={s.sectionHead}>
            <Breadcrumbs data={breadcrumbs} />
          </div>
          <h1>{t("about.banner.title")}</h1>
        </div>
      </div>
      <div className={cx(s.sectionWrapper, "container")}>
        <div className={s.head}>
          <Text
            dangerouslySetInnerHTML={{ __html: t("about.banner.description") }}
          />
          <h3
            dangerouslySetInnerHTML={{ __html: t("about.banner.subtitle") }}
          />
        </div>
        <Image src={ImageAbout} alt={"about-image"} className={s.image} />
      </div>
    </>
  )
}
