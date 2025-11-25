import { Carousel } from "@mantine/carousel"
import "@mantine/carousel/styles.css"
import {
  Accordion,
  AccordionControl,
  Anchor,
  Box,
  Flex,
  Text,
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import MarkdownPreview from "@uiw/react-markdown-preview"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import React from "react"

import { useGetMediaQuery } from "@/entities/media/query.ts"
import { IGetMedia } from "@/entities/media/types.ts"
import { useGetOurTeamQuery } from "@/entities/our-team/query.ts"
import { IGetOurTeam } from "@/entities/our-team/types.ts"

import LogoMedia from "@/shared/assets/images/interise-group/icon-media.svg"
import IconLin from "@/shared/assets/images/interise-group/linkedin.svg"
import IconTg from "@/shared/assets/images/interise-group/tg 2.svg"

import s from "./styles.module.scss"

export const TeamSection = () => {
  const { t } = useTranslation("common")
  const matchesSmall = useMediaQuery("(max-width: 845px)")

  const { data } = useGetOurTeamQuery()

  if (data?.length === 0) return null
  return (
    <>
      <Box className={cx(s.sectionWrapper, "container")}>
        <Text className={s.teamTitle}>{t("about.team.title")}</Text>
        <Flex className={s.teamSubtitle}>
          <Text>{t("about.team.subtitle1")}</Text>
          <Text>{t("about.team.subtitle2")}</Text>
        </Flex>
        <Flex
          gap={matchesSmall ? 16 : 32}
          direction={matchesSmall ? "column" : "row"}
          align="flex-start"
        >
          {data?.map((item: IGetOurTeam, i: number) => (
            <Flex key={i} className={s.teamBox}>
              <Flex className={s.teamBoxTop}>
                <Box className={s.teamBoxImage}>
                  <Image
                    src={item?.image}
                    alt={item?.name}
                    width={254}
                    height={284}
                    unoptimized
                  />
                </Box>
                <Flex direction={"column"} justify={"space-between"} gap={12}>
                  <Box>
                    <p className={s.teamBoxTitle}>{item?.name}</p>
                    <p className={s.teamBoxSubTitle}>{item?.role}</p>
                    <MarkdownPreview
                      source={item?.highlights}
                      className={s.list}
                    />
                  </Box>
                  <Flex gap={"8px"} className={s.socials}>
                    <Anchor h={50} href={item?.telegram_url} target={"_blank"}>
                      <IconTg />
                    </Anchor>
                    <Anchor h={50} href={item?.linkedin_url} target={"_blank"}>
                      <IconLin />
                    </Anchor>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                direction={"column"}
                className={s.teamBoxBottom}
                gap={"15px"}
                p={"35px"}
              >
                <Accordion w={"100%"} unstyled key={"user1"}>
                  <Accordion.Item value="item-1">
                    <AccordionControl className={s.teamBoxBottomTitle}>
                      {t("about.team.project_experience")}
                    </AccordionControl>
                    <Accordion.Panel>
                      <MarkdownPreview
                        source={item?.experience}
                        className={s.teamBoxBottomSubTitle}
                      />
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Box>
      <MediaSection />
    </>
  )
}

export const MediaSection = () => {
  const { t } = useTranslation("common")
  const { data } = useGetMediaQuery()

  if (data?.length === 0) return null

  return (
    <div className={cx(s.mediaBox, "container")}>
      <Text className={s.teamTitle}>{t("about.media.title")}</Text>
      <Text className={s.teamSubtitle}>{t("about.media.subtitle")}</Text>

      <Carousel
        loop
        align="start"
        slideGap={16}
        height={"auto"}
        withControls={false}
        slidesToScroll={data?.length >= 3 ? 3 : 1}
        slideSize="33.333333%"
      >
        {data?.map((item: IGetMedia, i: number) => (
          <Carousel.Slide key={i}>
            <div className={s.card}>
              <div className={s.cardTop}>
                <Image
                  src={item?.image}
                  alt={item?.text}
                  className={s.image}
                  width={275}
                  height={275}
                  unoptimized
                />
                <div className={s.links}>
                  <LogoMedia />
                  <Anchor className={s.link} href={item?.url} target={"_blank"}>
                    {t("about.media.open_article")}
                  </Anchor>
                </div>
              </div>

              <Text>{item?.text}</Text>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  )
}
