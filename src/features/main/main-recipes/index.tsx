import { Box, Button, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"

import ImageSlider1 from "@/shared/assets/images/interise-group/makro1.png"
import ImageSlider2 from "@/shared/assets/images/interise-group/makro2.png"
import ImageSlider3 from "@/shared/assets/images/interise-group/makro3.png"

import s from "./styles.module.scss"

export const MainRecipes = () => {
  const { t } = useTranslation("common")
  const router = useRouter()
  const matches = useMediaQuery("(max-width: 1040px)")

  return (
    <div className={s.sectionWrapper}>
      <Flex
        data-aos="zoom-in"
        direction={"column"}
        align={matches ? "flex-start" : "center"}
        gap={"20px"}
        mb={"24px"}
      >
        <Text className={s.researchTitle} ta={"center"}>
          {t("main.research.title")}
        </Text>
        <Text className={s.researchDescription} ta={"center"}>
          {t("main.research.description")}
        </Text>
      </Flex>
      <div className={s.cards}>
        <Box data-aos="fade-right" className={s.card}>
          <Box className={s.cardImageBox}>
            <Image
              className={s.image}
              src={ImageSlider1}
              alt={"ImageBook"}
              width={102}
              height={102}
            />
          </Box>
          <Flex direction={"column"} gap={"12px"}>
            <Text
              c={"#535E6B"}
              fz={matches ? "20px" : "24px"}
              lh={"120%"}
              lts={"-0.48px"}
              fw={"400"}
              component={"p"}
            >
              {t("main.research.card1.title")}
            </Text>
          </Flex>
        </Box>
        <Box data-aos="fade-up" className={s.card}>
          <Box className={s.cardImageBox}>
            <Image
              className={s.image}
              src={ImageSlider2}
              alt={"ImageBook"}
              width={102}
              height={102}
            />
          </Box>
          <Flex direction={"column"} gap={"12px"}>
            <Text
              c={"#535E6B"}
              fz={matches ? "20px" : "24px"}
              lh={"120%"}
              lts={"-0.48px"}
              fw={"400"}
              component={"p"}
            >
              {t("main.research.card2.title")}
            </Text>
          </Flex>
        </Box>
        <Box data-aos="fade-left" className={s.card}>
          <Box className={s.cardImageBox}>
            <Image
              className={s.image}
              src={ImageSlider3}
              alt={"ImageBook"}
              width={102}
              height={102}
            />
          </Box>
          <Flex direction={"column"} gap={"12px"}>
            <Text
              c={"#535E6B"}
              fz={matches ? "20px" : "24px"}
              lh={"120%"}
              lts={"-0.48px"}
              fw={"400"}
              component={"p"}
            >
              {t("main.research.card3.title")}
            </Text>
          </Flex>
        </Box>
      </div>
      <Flex justify={"center"} align={"center"}>
        <Button
          bg={"#0076FE"}
          color={"#FFF"}
          w={matches ? "100%" : "220px"}
          radius={8}
          h={"44px"}
          mt={"32px"}
          onClick={() => router.push("/research")}
        >
          {t("main.research.more_button")}
        </Button>
      </Flex>
    </div>
  )
}
