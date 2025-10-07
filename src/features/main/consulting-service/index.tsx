import { Box, Button, Flex, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import aboutImage from "@/shared/assets/images/interise-group/about-img.png"
import ourStep from "@/shared/assets/images/interise-group/our-step.png"
import { onLinkClick } from "@/shared/libs/scroll.ts"

import s from "./styles.module.scss"

export const ConsultingService = () => {
  return (
    <>
      <div className={s.sectionWrapper}>
        <Box className={s.sectionLeft}>
          <Flex direction={"column"} h={"100%"}>
            <Text className={"section-title"} mb={"10px"}>
              О нас
            </Text>
            <Text className={"section-subtitle"} mb={"24px"}>
              <span>Мы разрабатываем и внедряем стратегии и решения,</span>{" "}
              <br />
              которые помогают корпоративным клиентам менять рынки, превращать
              идеи в масштабные изменения и обеспечивать устойчивый рост
              бизнеса.
            </Text>
            <Text className={s.decription}>
              Экспертиза InteriseGroup охватывает широкий спектр отраслей — от
              банков <br /> и финтеха до телекоммуникаций, медицины,
              недвижимости, логистики, ритейла <br /> и других ключевых
              сегментов.
            </Text>
          </Flex>

          <Button
            bg={"#0076FE"}
            color={"#FFF"}
            radius={8}
            h={"44px"}
            fz={"16px"}
            fw={400}
            lh={"100%"}
            mt={"78px"}
            w={"233px"}
          >
            Заказать стратегию
          </Button>
        </Box>
        <Image
          src={aboutImage}
          alt={"image-one"}
          width={411}
          height={384}
          className={s.image}
        />
      </div>
      <Box mt={"80px"} className={s.ourWrapper}>
        <Text className={s.ourTitle} mb={"12px"}>
          Наши принципы
        </Text>
        <Text className={"section-subtitle"} c={"#fff"} mb={"24px"}>
          Мы убеждены – время <span>простого консалтинга</span> прошло.
        </Text>
        <Text
          c={"#92A4B7"}
          lh={"120%"}
          lts={"-0.32px"}
          fz={"16px"}
          fw={40}
          maw={"801px"}
          mb={"32px"}
        >
          InteriseGroup работает по модели партнерства: вместе с клиентами
          анализируем ситуацию, проверяем гипотезы, усиливаем работающие решения
          и масштабируем результат. Работа в диалоге и прозрачность процесса
          ускоряет решения и превращает стратегию в реальный, измеримый
          результат.
        </Text>
        <Image
          src={ourStep}
          alt={"image-one"}
          width={990}
          height={192}
          className={s.imageOur}
        />
        <Text
          c={"#92A4B7"}
          lh={"120%"}
          lts={"-0.32px"}
          fz={"16px"}
          fw={40}
          maw={"680px"}
          mb={"40px"}
        >
          Разделяете эти принципы и ищете партнеров, работающих на результат? Мы
          будем рады обсудить ваш проект.
        </Text>
        <Button
          bg={"#0076FE"}
          color={"#FFF"}
          radius={8}
          h={"44px"}
          w={"233px"}
          fz={"16px"}
          fw={400}
          lh={"100%"}
          onClick={() => onLinkClick("form")}
        >
          Обсудить проект
        </Button>
      </Box>
    </>
  )
}
