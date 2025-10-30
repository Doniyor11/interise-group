import { Box, Button, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Image from "next/image"
import React from "react"

import ImageSlider1 from "@/shared/assets/images/interise-group/makro1.png"
import ImageSlider2 from "@/shared/assets/images/interise-group/makro2.png"
import ImageSlider3 from "@/shared/assets/images/interise-group/makro3.png"

import s from "./styles.module.scss"

export const MainRecipes = () => {
  const matches = useMediaQuery("(max-width: 1040px)")

  return (
    <div className={s.sectionWrapper} id={"navbar3"}>
      <Flex
        direction={"column"}
        align={matches ? "flex-start" : "center"}
        gap={"20px"}
        mb={"24px"}
      >
        <Text className={s.researchTitle} ta={"center"}>
          Исследования и макро-тренды
        </Text>
        <Text className={s.researchDescription} ta={"center"}>
          Наши исследования объединяют опыт десятков стран и отраслей, превращая
          накопленные данные и инсайты в практические решения. Они помогают
          компаниям видеть картину рынка глубже, чем традиционная аналитика, —
          понимать мотивы клиентов, динамику изменений и реальные точки роста.
        </Text>
      </Flex>
      <div className={s.cards}>
        <Box className={s.card}>
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
              Customer Choice Index
            </Text>
          </Flex>
        </Box>
        <Box className={s.card}>
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
              Сравнительный <br /> анализ стран <br /> и индустрий
            </Text>
          </Flex>
        </Box>
        <Box className={s.card}>
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
              Маркетинговые исследования
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
        >
          Подробнее
        </Button>
      </Flex>
    </div>
  )
}
