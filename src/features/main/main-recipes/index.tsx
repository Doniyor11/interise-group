import { Box, Button, Flex, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import ImageSlider1 from "@/shared/assets/images/interise-group/makro1.png"
import ImageSlider2 from "@/shared/assets/images/interise-group/makro2.png"
import ImageSlider3 from "@/shared/assets/images/interise-group/makro3.png"

import s from "./styles.module.scss"

export const MainRecipes = () => {
  return (
    <div className={s.sectionWrapper}>
      <Text className={"section-subtitle"} ta={"center"} mb={"24px"}>
        <span>Исследования</span> и макро-тренды
      </Text>
      <div className={s.cards}>
        <Box className={s.card}>
          <Image className={s.image} src={ImageSlider1} alt={"ImageBook"} />
          <Flex direction={"column"} gap={"12px"}>
            <Text
              c={"#535E6B"}
              fz={"24px"}
              lh={"120%"}
              lts={"-0.48px"}
              fw={"400"}
            >
              Индексные исследования
            </Text>
            <Text className={s.cardInfo}>
              Customer Choice Index — это комплексная диагностика клиентского
              опыта, которая вскрывает настоящие причины побед и поражений в
              борьбе за клиента. Исследование выходит далеко за рамки
              традиционных оценок качества и фокусируется на критических
              моментах принятия решений.
            </Text>
          </Flex>
        </Box>
        <Box className={s.card}>
          <Image className={s.image} src={ImageSlider2} alt={"ImageBook"} />
          <Flex direction={"column"} gap={"12px"}>
            <Text
              c={"#535E6B"}
              fz={"24px"}
              lh={"120%"}
              lts={"-0.48px"}
              fw={"400"}
            >
              Сравнительный анализ стран и индустрий
            </Text>
            <Text className={s.cardInfo}>
              Комплексные макроэкономические обзоры и прогнозирование позволяют
              сравнивать экономики, отрасли и бизнес-среды в разных
              странах.Такой подход помогает компаниям принимать стратегические
              решения, видеть перспективные возможности и опережать изменения на
              рынке, а не реагировать на них постфактум.
            </Text>
          </Flex>
        </Box>
        <Box className={s.card}>
          <Image className={s.image} src={ImageSlider3} alt={"ImageBook"} />
          <Flex direction={"column"} gap={"12px"}>
            <Text
              c={"#535E6B"}
              fz={"24px"}
              lh={"120%"}
              lts={"-0.48px"}
              fw={"400"}
            >
              Медиа и публикации
            </Text>
            <Text className={s.cardInfo}>
              Экспертные статьи в ведущих деловых СМИ, аналитические материалы,
              видеоканал с участием партнеров и приглашенных лидеров индустрий,
              а также авторская колонка партнеров и экспертов
              InteriseGroup.story.
            </Text>
          </Flex>
        </Box>
      </div>
      <Flex justify={"center"} align={"center"}>
        <Button
          bg={"#0076FE"}
          color={"#FFF"}
          w={"192px"}
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
