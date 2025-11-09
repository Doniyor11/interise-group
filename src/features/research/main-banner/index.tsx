import { Box, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import React from "react"

import ImageOne from "@/shared/assets/images/interise-group/image-research-2.png"
import { SearchInput } from "@/shared/ui"
import { Breadcrumbs } from "@/shared/ui/breadcrumbs"

import { DataBreadcrumbs } from "./libs.ts"
import s from "./styles.module.scss"

export const ResearchMainBanner = () => {
  const { t } = useTranslation("common")
  const matches = useMediaQuery("(max-width: 1040px)")

  return (
    <>
      <div className={s.topSectionWrapper}>
        <div className={cx(s.container, "container")}>
          <div className={s.sectionHead}>
            <Breadcrumbs data={DataBreadcrumbs} />
            {!matches && <SearchInput />}
          </div>
          <h1>{t("breadcrumbs.research")}</h1>
        </div>
      </div>
      <div className={cx(s.sectionWrapper, "container")}>
        <Box>
          <Text
            className={s.title}
            dangerouslySetInnerHTML={{ __html: t("research.banner.title") }}
          />
          <Text className={s.subtitle}>{t("research.banner.description")}</Text>
        </Box>
        <Image src={ImageOne} alt={"image-research"} className={s.image} />
      </div>
    </>
  )
}
