import { Box, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import React from "react"

import IconCheck from "@/shared/assets/images/interise-group/icon-check.svg"

import s from "./styles.module.scss"

export const CustomersChoice = () => {
  const { t } = useTranslation("common")
  const matches = useMediaQuery("(max-width: 1040px)")

  return (
    <>
      <div className={cx(s.sectionWrapper, "container")}>
        <h2>{t("research.cci.title")}</h2>
        <Text className={s.subtitle}>{t("research.cci.subtitle")}</Text>

        <div className={s.box}>
          <Text className={s.boxTitle}>
            {t("research.cci.methodology.title")}
          </Text>
          <Flex
            gap={32}
            justify="space-between"
            direction={matches ? "column" : "row"}
          >
            <div className={s.boxLeft}>
              <div className={s.leftItem}>
                <IconCheck />
                <Box>
                  <Text className={s.itemTitle}>
                    {t("research.cci.methodology.item1.title")}
                  </Text>
                  <Text className={s.itemSubtitle}>
                    {t("research.cci.methodology.item1.description")}
                  </Text>
                </Box>
              </div>
              <div className={s.leftItem}>
                <IconCheck />
                <Box>
                  <Text className={s.itemTitle}>
                    {t("research.cci.methodology.item2.title")}
                  </Text>
                  <Text className={s.itemSubtitle}>
                    {t("research.cci.methodology.item2.description")}
                  </Text>
                </Box>
              </div>
              <div className={s.leftItem}>
                <IconCheck />
                <Box>
                  <Text className={s.itemTitle}>
                    {t("research.cci.methodology.item3.title")}
                  </Text>
                  <Text className={s.itemSubtitle}>
                    {t("research.cci.methodology.item3.description")}
                  </Text>
                </Box>
              </div>
            </div>
            <div className={s.boxRight}>
              <div className={s.card}>
                <Text className={s.cardTitle}>
                  {t("research.cci.index1.title")}
                </Text>
                <Text className={s.cardText}>
                  {t("research.cci.index1.description")}
                </Text>
              </div>
              <div className={s.card}>
                <Text className={s.cardTitle}>
                  {t("research.cci.index2.title")}
                </Text>
                <Text className={s.cardText}>
                  {t("research.cci.index2.description")}
                </Text>
              </div>
              <div className={s.card}>
                <Text className={s.cardTitle}>
                  {t("research.cci.index3.title")}
                </Text>
                <Text className={s.cardText}>
                  {t("research.cci.index3.description")}
                </Text>
              </div>
              <div className={s.card}>
                <Text className={s.cardTitle}>
                  {t("research.cci.index4.title")}
                </Text>
                <Text className={s.cardText}>
                  {t("research.cci.index4.description")}
                </Text>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  )
}
