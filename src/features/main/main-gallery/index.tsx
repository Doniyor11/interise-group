import { Badge, Box, Button, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"
import React from "react"

import s from "./styles.module.scss"

const getBadgeData = (t: any) => [
  { id: 1, title: t("main.club.events.business_brunches") },
  { id: 2, title: t("main.club.events.invest_breakfasts") },
  { id: 3, title: t("main.club.events.lectures") },
  { id: 4, title: t("main.club.events.demo_days") },
  { id: 5, title: t("main.club.events.closed_forums") },
  { id: 6, title: t("main.club.events.wine_tastings") },
  { id: 7, title: t("main.club.events.round_tables") },
  { id: 8, title: t("main.club.events.cigar_evenings") },
]

export const MainGallery = () => {
  const { t } = useTranslation("common")
  const router = useRouter()
  const matches = useMediaQuery("(max-width: 1040px)")
  const badgeData = getBadgeData(t)

  return (
    <Box pt={matches ? 40 : 100} id={"interise-club"}>
      <div className={s.sectionWrapper}>
        <div className={"container"}>
          <Flex
            data-aos="zoom-in"
            direction={"column"}
            justify={"center"}
            align={matches ? "flex-start" : "center"}
            mb={matches ? "0" : "24px"}
          >
            <Text
              className={s.clubTitle}
              c={"#fff"}
              ta={matches ? "left" : "center"}
              dangerouslySetInnerHTML={{ __html: t("main.club.title") }}
            />
            <Text className={s.clubInfoTitle} c={"#8696A9"} mb={"24px"}>
              {t("main.club.event_types_label")}
            </Text>
            <Flex
              mb={"32px"}
              wrap={"wrap"}
              gap={"1px"}
              w={matches ? "100%" : "750px"}
              justify={matches ? "flex-start" : "center"}
            >
              {badgeData.map((item) => (
                <Badge className={s.badge} key={item.id}>
                  {item.title}
                </Badge>
              ))}
            </Flex>
          </Flex>
          <Flex
            gap={"30px"}
            direction={matches ? "column-reverse" : "row"}
            p={matches ? "0" : "0"}
          >
            <Box data-aos="fade-right" w={matches ? "100%" : "50%"}>
              <Text
                fz={"16px"}
                c={"#798B9E"}
                lh={"120%"}
                lts={"-0.32px"}
                mb={"32px"}
              >
                {t("main.club.description1")}
              </Text>

              <Text
                fz={"16px"}
                c={"#798B9E"}
                lh={"120%"}
                lts={"-0.32px"}
                mb={"32px"}
              >
                {t("main.club.description2")}
              </Text>
              <Button
                radius={8}
                h={"44px"}
                bg={"#0076FE"}
                color={"#FFF"}
                w={matches ? "100%" : "fit-content"}
                onClick={() => router.push("/interise-club")}
              >
                {t("main.club.join_button")}
              </Button>
            </Box>
            <Flex
              data-aos="fade-left"
              w={matches ? "100%" : "50%"}
              direction={"column"}
            >
              <Box className={s.clubImage}>
                <video
                  width="640"
                  height="203"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="none"
                >
                  <source src="/banner.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Box>
            </Flex>
          </Flex>
        </div>
      </div>
    </Box>
  )
}
