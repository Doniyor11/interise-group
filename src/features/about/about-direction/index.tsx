import { Box, Button, Text } from "@mantine/core"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import React from "react"

import IconOne from "@/shared/assets/images/about/icon-about-1.svg"
import IconTwo from "@/shared/assets/images/about/icon-about-2.svg"
import IconThree from "@/shared/assets/images/about/icon-about-3.svg"
import IconFour from "@/shared/assets/images/about/icon-about-4.svg"
import ImageBanner from "@/shared/assets/images/interise-group/image-about-2.png"
import { onLinkClick } from "@/shared/libs/scroll.ts"

import s from "./styles.module.scss"

export const AboutDirection = () => {
  const { t } = useTranslation("common")

  return (
    <>
      <Box className={"container"}>
        <div className={s.sectionWrapper}>
          <Box className={s.head}>
            <h3>{t("about.directions.title")}</h3>
            {/*<Text>{t("about.directions.subtitle")}</Text>*/}
          </Box>
          <div className={s.cards}>
            <div data-aos="zoom-in-up" className={s.card}>
              <div className={s.icon}>
                <IconOne />
              </div>
              <Box>
                <Text className={s.cardTitle}>
                  {t("about.directions.cardTitle1")}
                </Text>
                <Text className={s.cardSubtitle}>
                  {t("about.directions.cardSubtitle1")}
                </Text>
              </Box>
            </div>
            <div data-aos="zoom-in-up" className={s.card}>
              <div className={s.icon}>
                <IconTwo />
              </div>
              <Box>
                <Text className={s.cardTitle}>
                  {t("about.directions.cardTitle2")}
                </Text>
                <Text className={s.cardSubtitle}>
                  {t("about.directions.cardSubtitle2")}
                </Text>
              </Box>
            </div>
            <div data-aos="zoom-in-up" className={s.card}>
              <div className={s.icon}>
                <IconThree />
              </div>
              <Box>
                <Text className={s.cardTitle}>
                  {t("about.directions.cardTitle3")}
                </Text>
                <Text className={s.cardSubtitle}>
                  {t("about.directions.cardSubtitle3")}
                </Text>
              </Box>
            </div>
            <div data-aos="zoom-in-up" className={s.card}>
              <div className={s.icon}>
                <IconFour />
              </div>
              <Box>
                <Text className={s.cardTitle}>
                  {t("about.directions.cardTitle4")}
                </Text>
                <Text className={s.cardSubtitle}>
                  {t("about.directions.cardSubtitle4")}
                </Text>
              </Box>
            </div>
          </div>
        </div>
        <div className={s.box}>
          <Image
            data-aos="fade-right"
            src={ImageBanner}
            alt={"image-banner"}
            className={s.image}
          />
          <div data-aos="fade-left" className={s.boxRight}>
            <h3
              dangerouslySetInnerHTML={{ __html: t("about.projects.title") }}
            />
            <Text
              className={s.text}
              dangerouslySetInnerHTML={{
                __html: t("about.projects.description"),
              }}
            />
            <Button className={s.btn} onClick={() => onLinkClick("contacts")}>
              {t("about.projects.discuss_button")}
            </Button>
          </div>
        </div>
        <div data-aos="fade-up" className={s.bannerWrapper}>
          <h3 dangerouslySetInnerHTML={{ __html: t("about.asset.title") }} />
          <Text className={s.text}>{t("about.asset.description")}</Text>
          <Button className={s.btn} onClick={() => onLinkClick("contacts")}>
            {t("about.asset.order_button")}
          </Button>
        </div>
      </Box>
    </>
  )
}
