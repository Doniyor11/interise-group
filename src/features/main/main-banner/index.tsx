import { Box, Button, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import React from "react"

import IconArrow from "@/shared/assets/images/interise-group/arrow-up-right.svg"
import { onLinkClick } from "@/shared/libs/scroll.ts"
import { AnimatedNumber } from "@/shared/ui"

import s from "./styles.module.scss"

export const MainBanner = () => {
  const { t } = useTranslation("common")
  const matches = useMediaQuery("(max-width: 1040px)")

  return (
    <div className={s.sectionWrapper}>
      <Box className={"container"} w={"100%"}>
        <Box className={s.sectionLeft}>
          <Text
            data-aos="zoom-in-up"
            className={s.bannerTitle}
            dangerouslySetInnerHTML={{ __html: t("main.banner.title") }}
          />
          <Box
            data-aos="zoom-in-up"
            w={"100%"}
            maw={matches ? "480px" : "514px"}
          >
            <Text className={s.bannerDescription}>
              {t("main.banner.description")}
            </Text>
          </Box>
          <Flex className={s.stats} data-aos="zoom-in-up">
            <Flex direction={"column"} align={"center"} className={s.item}>
              <Text className={s.counter}>
                <AnimatedNumber value={115} className={s.number} />
              </Text>
              <Text className={s.info}>{t("main.banner.stats.clients")}</Text>
            </Flex>
            <div className={s.line} />
            <Flex direction={"column"} align={"center"} className={s.item}>
              <Text className={s.counter}>
                <b>$</b>
                <AnimatedNumber value={3.5} className={s.number} />
                <b>{t("main.banner.stats.billion")}</b>
              </Text>
              <Text className={s.info}>{t("main.banner.stats.result")}</Text>
            </Flex>
            <div className={s.line} />
            <Flex direction={"column"} align={"center"} className={s.item}>
              <Text className={s.counter}>
                <AnimatedNumber value={311} className={s.number} />
              </Text>
              <Text className={s.info}>{t("main.banner.stats.projects")}</Text>
            </Flex>
            <div className={s.line} />
            <Flex direction={"column"} align={"center"} className={s.item}>
              <Text className={s.counter}>
                <AnimatedNumber value={31} className={s.number} />
              </Text>
              <Text className={s.info}>{t("main.banner.stats.countries")}</Text>
            </Flex>
          </Flex>
          <Flex
            data-aos="zoom-in-up"
            align={"center"}
            gap={5}
            w={matches ? "100%" : "fit-content"}
          >
            <Button
              onClick={() => onLinkClick("contacts")}
              className={cx(s.buttonBanner)}
            >
              {t("main.banner.contact_button")}
              <Flex ml={"10px"} className={s.buttonBannerIcon}>
                <IconArrow />
              </Flex>
            </Button>
          </Flex>
        </Box>
      </Box>
    </div>
  )
}
