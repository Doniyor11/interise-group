import { Box, Button, Text } from "@mantine/core"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import React from "react"

import { onLinkClick } from "@/shared/libs/scroll.ts"

import s from "./styles.module.scss"

export const PurchasingAccess = () => {
  const { t } = useTranslation("common")
  return (
    <>
      <div className={cx(s.sectionWrapper, "container")}>
        <h2
          className={s.title}
          dangerouslySetInnerHTML={{ __html: t("research.access.title") }}
        />
        <div className={s.cards}>
          <div className={s.card}>
            <Text className={s.cardTitle}>
              {t("research.access.benefit1.title")}
            </Text>
            <Text className={s.cardText}>
              {t("research.access.benefit1.description")}
            </Text>
          </div>
          <div className={s.card}>
            <Text className={s.cardTitle}>
              {t("research.access.benefit2.title")}
            </Text>
            <Text className={s.cardText}>
              {t("research.access.benefit2.description")}
            </Text>
          </div>
          <div className={s.card}>
            <Text className={s.cardTitle}>
              {t("research.access.benefit3.title")}
            </Text>
            <Text className={s.cardText}>
              {t("research.access.benefit3.description")}
            </Text>
          </div>
          <div className={s.card}>
            <Text className={s.cardTitle}>
              {t("research.access.benefit4.title")}
            </Text>
            <Text className={s.cardText}>
              {t("research.access.benefit4.description")}
            </Text>
          </div>
        </div>

        <Box className={s.box}>
          <Box>
            <Text
              className={s.title}
              dangerouslySetInnerHTML={{
                __html: t("research.access.cta.title"),
              }}
            />
            <Text
              className={s.subtitle}
              dangerouslySetInnerHTML={{
                __html: t("research.access.cta.subtitle"),
              }}
            />
          </Box>
          <Button className={s.btn} onClick={() => onLinkClick("contacts")}>
            {t("research.access.demo_button")}
          </Button>
        </Box>
      </div>
    </>
  )
}
