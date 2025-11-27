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
        <div data-aos="zoom-in-up" className={cx(s.container, "container")}>
          <div className={s.sectionHead}>
            <Breadcrumbs data={breadcrumbs} />
          </div>
          <h1>{t("about.banner.title")}</h1>
        </div>
      </div>
      <div className={cx(s.sectionWrapper, "container")}>
        <div className={s.head}>
          <Text
            data-aos="fade-right"
            dangerouslySetInnerHTML={{ __html: t("about.banner.description") }}
          />
          <h3
            data-aos="fade-left"
            dangerouslySetInnerHTML={{ __html: t("about.banner.subtitle") }}
          />
        </div>
        <Image
          data-aos="fade-up"
          src={ImageAbout}
          alt={"about-image"}
          className={s.image}
        />
      </div>
    </>
  )
}
