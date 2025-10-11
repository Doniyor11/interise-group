import { Box, Button, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Image from "next/image"
import React from "react"

import aboutImage from "@/shared/assets/images/interise-group/about-img.png"
import ourStepMobile from "@/shared/assets/images/interise-group/our-step-mobile.png"
import ourStep from "@/shared/assets/images/interise-group/our-step.png"
import { onLinkClick } from "@/shared/libs/scroll.ts"

import s from "./styles.module.scss"

export const ConsultingService = () => {
  const matches = useMediaQuery("(max-width: 1040px)")
  const matchesMobile = useMediaQuery("(max-width: 768px)")

  return (
    <>
      <div className={s.sectionWrapper} id={"navbar1"}>
        <Box className={s.sectionLeft}>
          <Flex direction={"column"} h={"100%"}>
            <Text className={"section-title"} mb={"10px"}>
              О нас
            </Text>
            <Text className={"section-subtitle"} mb={matches ? "0" : "24px"}>
              <span>Мы разрабатываем и внедряем стратегии и решения,</span>{" "}
              <br />
              которые помогают корпоративным клиентам менять рынки, превращать
              идеи в масштабные изменения и обеспечивать устойчивый рост
              бизнеса.
            </Text>
            <Text className={s.description}>
              Экспертиза InteriseGroup охватывает широкий спектр отраслей — от
              банков <br /> и финтеха до телекоммуникаций, медицины,
              недвижимости, логистики, ритейла <br /> и других ключевых
              сегментов.
            </Text>
          </Flex>

          {!matches && (
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
              onClick={() => onLinkClick("navbar5")}
            >
              Заказать стратегию
            </Button>
          )}
        </Box>
        <Image
          src={aboutImage}
          alt={"image-one"}
          width={411}
          height={384}
          className={s.image}
        />
        {matches && (
          <Button
            bg={"#0076FE"}
            color={"#FFF"}
            radius={8}
            h={"44px"}
            fz={"16px"}
            fw={400}
            lh={"100%"}
            mt={matches ? "20px" : "78px"}
            w={matches ? "100%" : "233px"}
            onClick={() => onLinkClick("navbar5")}
          >
            Заказать стратегию
          </Button>
        )}
      </div>
      {/* Наши принципы */}
      <Box mt={matches ? "60px" : "80px"} className={s.ourWrapper}>
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
          fz={matches ? "14px" : "16px"}
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
        <Box className={s.imageOur}>
          <Image
            src={matchesMobile ? ourStepMobile : ourStep}
            alt={"image-one"}
            width={990}
            height={192}
          />
        </Box>
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
          w={matches ? "100%" : "233px"}
          fz={"16px"}
          fw={400}
          lh={"100%"}
          onClick={() => onLinkClick("navbar5")}
        >
          Обсудить проект
        </Button>
      </Box>
    </>
  )
}
