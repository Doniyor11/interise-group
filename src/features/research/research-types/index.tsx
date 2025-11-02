import { Box, Button, Flex, Text } from "@mantine/core"
import cx from "clsx"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"

import IconCalendar from "@/shared/assets/images/interise-group/icon-calendar-2.svg"
import ImageOne from "@/shared/assets/images/interise-group/image-research-3.png"
import ImageTwo from "@/shared/assets/images/interise-group/image-research-4.png"
import ImageThree from "@/shared/assets/images/interise-group/image-research-5.png"

import s from "./styles.module.scss"

export const ResearchTypes = () => {
  const router = useRouter()
  const onResearch = () => {
    router.push("/research/1")
  }
  return (
    <div className={cx(s.sectionWrapper, "container")}>
      <Text className={s.title}>
        Виды <span>исследований:</span>
      </Text>
      <div className={s.cards}>
        <div className={s.card}>
          <Box>
            <Image src={ImageOne} alt={"image-research"} className={s.image} />
            <Text className={s.cardTitle}>Индексные исследования</Text>
            <Text className={s.description}>
              Customer Choice Index — это комплексная диагностика клиентского
              опыта, которая вскрывает настоящие причины побед и поражений в
              борьбе за клиента. Исследование выходит далеко за рамки
              традиционных оценок качества и фокусируется на критических
              моментах принятия решений.
            </Text>
          </Box>
          <Flex className={s.cardBtns}>
            <Button className={s.btn} onClick={onResearch}>
              Купить
            </Button>
            <Button className={s.btn}>
              <IconCalendar />
            </Button>
          </Flex>
        </div>
        <div className={s.card}>
          <Box>
            <Image src={ImageTwo} alt={"image-research"} className={s.image} />
            <Text className={s.cardTitle}>
              Сравнительный анализ стран и индустрий
            </Text>
            <Text className={s.description}>
              Комплексные макроэкономические обзоры и прогнозирование позволяют
              сравнивать экономики, отрасли и бизнес-среды в разных
              странах.Такой подход помогает компаниям принимать стратегические
              решения, видеть перспективные возможности и опережать изменения на
              рынке, а не реагировать на них постфактум.
            </Text>
          </Box>
          <Flex className={s.cardBtns}>
            <Button className={s.btn} onClick={onResearch}>
              Купить
            </Button>
            <Button className={s.btn}>
              <IconCalendar />
            </Button>
          </Flex>
        </div>
        <div className={s.card}>
          <Box>
            <Image
              src={ImageThree}
              alt={"image-research"}
              className={s.image}
            />
            <Text className={s.cardTitle}>Медиа и публикации</Text>
            <Text className={s.description}>
              Экспертные статьи в ведущих деловых СМИ, аналитические материалы,
              видеоканал с участием партнеров и приглашенных лидеров индустрий,
              а также авторская колонка партнеров и экспертов
              InteriseGroup.story.
            </Text>
          </Box>
          <Flex className={s.cardBtns}>
            <Button className={s.btn} onClick={onResearch}>
              Купить
            </Button>
            <Button className={s.btn}>
              <IconCalendar />
            </Button>
          </Flex>
        </div>
      </div>
    </div>
  )
}
