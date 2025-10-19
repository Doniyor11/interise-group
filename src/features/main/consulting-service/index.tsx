import { Box, Button, Flex, Grid, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import Icon1 from "@/shared/assets/images/interise-group/about-icon1.png"
import Icon2 from "@/shared/assets/images/interise-group/about-icon2.png"
import Icon3 from "@/shared/assets/images/interise-group/about-icon3.png"
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
        <Box className={s.sectionRow}>
          <Flex direction={"column"} h={"100%"} align={"flex-start"} w={"100%"}>
            <Text className={s.titleAbout} mb={"10px"}>
              Об InteriseGroup
            </Text>
            <Text className={s.description}>
              Мы разрабатываем и внедряем стратегии и решения, которые <br />{" "}
              помогают крупному бизнесу и корпорациям:
            </Text>
          </Flex>
          <Box w={"100%"}>
            <Grid>
              <Grid.Col span={matchesMobile ? 12 : 4}>
                <Box className={cx(s.aboutBox, s.one)}>
                  <Image src={Icon1} alt={"icon1"} width={54} height={54} />

                  <Text className={s.aboutBoxTitle}>
                    Меняться <br /> и формировать новые <br /> правила рынка
                  </Text>
                </Box>
              </Grid.Col>
              <Grid.Col span={matchesMobile ? 12 : 4}>
                <Box className={cx(s.aboutBox, s.two)}>
                  <Image src={Icon2} alt={"icon1"} width={54} height={54} />

                  <Text className={s.aboutBoxTitle}>
                    Превращать идеи <br /> в масштабные <br /> трансформации
                  </Text>
                </Box>
              </Grid.Col>
              <Grid.Col span={matchesMobile ? 12 : 4}>
                <Box className={cx(s.aboutBox, s.three)}>
                  <Image src={Icon3} alt={"icon1"} width={54} height={54} />

                  <Text className={s.aboutBoxTitle}>
                    Достигать устойчивого роста <br /> и реальных
                    бизнес-результатов
                  </Text>
                </Box>
              </Grid.Col>
            </Grid>
          </Box>
          <Button
            bg={"#0076FE"}
            color={"#FFF"}
            radius={8}
            h={"44px"}
            fz={"16px"}
            fw={400}
            lh={"100%"}
            mt={matches ? "31px" : "40px"}
            w={matches ? "100%" : "233px"}
            onClick={() => onLinkClick("navbar5")}
          >
            Заказать стратегию
          </Button>
        </Box>
      </div>
      {/* Наши принципы */}
      <Box mt={matches ? "60px" : "80px"} className={s.ourWrapper}>
        <Flex w={"100%"} align={"flex-end"} gap={"60px"}>
          <Box w={matches ? "100%" : "50%"}>
            <Text className={s.aboutBottomTitle} mb={"20px"}>
              Мы убеждены – время простого <br /> консалтинга прошло.
            </Text>
            <Text
              c={"#DBE9F9"}
              lh={"120%"}
              lts={"-0.32px"}
              fz={matches ? "14px" : "16px"}
              fw={40}
              ta={"left"}
              mb={"36px"}
            >
              InteriseGroup работает по модели партнерства: вместе с клиентами
              анализируем ситуацию, проверяем гипотезы, усиливаем работающие
              решения и масштабируем результат. Работа в диалоге и прозрачность
              процесса ускоряет решения и превращает стратегию в реальный,
              измеримый результат.
            </Text>
          </Box>
          {!matches && (
            <Box w={"50%"}>
              <Text
                c={"#DBE9F9"}
                lh={"120%"}
                lts={"-0.32px"}
                fz={"16px"}
                fw={40}
                maw={"450px"}
                mb={"40px"}
                ta={"left"}
              >
                Разделяете эти принципы и ищете партнеров, работающих на
                результат? <br /> <br /> <br />
                Мы будем рады обсудить ваш проект.
              </Text>
            </Box>
          )}
        </Flex>
        <Box className={s.imageOur}>
          <Image
            src={matchesMobile ? ourStepMobile : ourStep}
            alt={"image-one"}
            width={1190}
            height={184}
          />
          {matches && (
            <Box w={"100%"} mt={"32px"}>
              <Text
                c={"#DBE9F9"}
                lh={"120%"}
                lts={"-0.32px"}
                fz={"16px"}
                fw={40}
                maw={"450px"}
                mb={"40px"}
                ta={"left"}
              >
                Разделяете эти принципы и ищете партнеров, работающих на
                результат? Мы будем рады обсудить ваш проект.
              </Text>
            </Box>
          )}
        </Box>
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
