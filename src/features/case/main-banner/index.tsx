import { Box, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import React from "react"

import IconBusiness from "@/shared/assets/images/interise-group/icon-business.svg"
import IconDocument from "@/shared/assets/images/interise-group/icon-document.svg"
import IconEyeOff from "@/shared/assets/images/interise-group/icon-eye-off.svg"
import IconMap from "@/shared/assets/images/interise-group/icon-map.svg"
import { AnimatedNumber, SearchInput } from "@/shared/ui"
import { Breadcrumbs } from "@/shared/ui/breadcrumbs"

import { useBreadcrumbs } from "./libs.ts"
import s from "./styles.module.scss"

export const CaseMainBanner = () => {
  const { t } = useTranslation("common")
  const breadcrumbs = useBreadcrumbs()
  const matches = useMediaQuery("(max-width: 1040px)")

  return (
    <>
      <div className={s.topSectionWrapper}>
        <div className={cx(s.container, "container")}>
          <div className={s.sectionHead}>
            <Breadcrumbs data={breadcrumbs} />
            {!matches && <SearchInput />}
          </div>
          <h1>{t("breadcrumbs.cases")}</h1>
        </div>
      </div>
      <div className={cx(s.sectionWrapper, "container")}>
        <div className={s.stats}>
          <Text
            className={s.sectionTitle}
            dangerouslySetInnerHTML={{ __html: t("case.banner.title") }}
          />
          <div className={s.counts}>
            <div className={s.countsItem}>
              <div className={s.icon}>
                <IconDocument />
              </div>
              <Box>
                <Text className={s.count}>
                  <AnimatedNumber value={300} />+
                </Text>
                <Text className={s.countLabel}>
                  {t("case.banner.projects")}
                </Text>
              </Box>
            </div>
            <div className={s.line} />
            <div className={s.countsItem}>
              <div className={s.icon}>
                <IconMap />
              </div>
              <Box>
                <Text className={s.count}>
                  <AnimatedNumber value={31} />
                </Text>
                <Text className={s.countLabel}>
                  {t("case.banner.countries")}
                </Text>
              </Box>
            </div>
            <div className={s.line} />
            <div className={s.countsItem}>
              <div className={s.icon}>
                <IconBusiness />
              </div>
              <Box>
                <Text className={s.count}>
                  <AnimatedNumber value={15} />
                </Text>
                <Text className={s.countLabel}>
                  {t("case.banner.industries")}
                </Text>
              </Box>
            </div>
          </div>
        </div>
        <div className={s.box}>
          <div className={s.boxLeft}>
            <Text
              className={s.title}
              dangerouslySetInnerHTML={{ __html: t("case.banner.description") }}
            />
            <Text className={s.text}>{t("case.banner.subtitle")}</Text>
          </div>
          <div className={s.boxRight}>
            <IconEyeOff />
            <Text className={s.text}>{t("case.banner.nda_text")}</Text>
          </div>
        </div>
      </div>
    </>
  )
}
