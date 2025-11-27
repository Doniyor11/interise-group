import { Box, Text } from "@mantine/core"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import React from "react"

import ImageOne from "@/shared/assets/images/interise-group/image-research-2.png"
import { Breadcrumbs } from "@/shared/ui/breadcrumbs"

import { useBreadcrumbs } from "./libs.ts"
import s from "./styles.module.scss"

export const ResearchMainBanner = () => {
  const { t } = useTranslation("common")
  const breadcrumbs = useBreadcrumbs()

  return (
    <>
      <div className={s.topSectionWrapper}>
        <div data-aos="zoom-in-up" className={cx(s.container, "container")}>
          <Breadcrumbs data={breadcrumbs} />
          <h1>{t("breadcrumbs.research")}</h1>
        </div>
      </div>
      <div className={cx(s.sectionWrapper, "container")}>
        <Box data-aos="fade-right">
          <Text
            className={s.title}
            dangerouslySetInnerHTML={{ __html: t("research.banner.title") }}
          />
          <Text className={s.subtitle}>{t("research.banner.description")}</Text>
        </Box>
        <Image
          src={ImageOne}
          alt={"image-research"}
          className={s.image}
          data-aos="fade-left"
        />
      </div>
    </>
  )
}
