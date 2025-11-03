import { Box, Button, Center, Flex, Grid, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import React from "react"

import Icon1 from "@/shared/assets/images/interise-group/about-icon1.svg"
import Icon2 from "@/shared/assets/images/interise-group/about-icon2.svg"
import Icon3 from "@/shared/assets/images/interise-group/about-icon3.svg"
import IconOurStep1 from "@/shared/assets/images/interise-group/icon-our-step-1.svg"
import IconOurStep2 from "@/shared/assets/images/interise-group/icon-our-step-2.svg"
import IconOurStep3 from "@/shared/assets/images/interise-group/icon-our-step-3.svg"
import VectorOurStepMobile from "@/shared/assets/images/interise-group/vector-our-step-mb.svg"
import VectorOurStep from "@/shared/assets/images/interise-group/vector-our-step.svg"
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
          <Grid w={"100%"} gutter={32}>
            <Grid.Col span={matchesMobile ? 12 : 4}>
              <Box className={cx(s.aboutBox, s.one)}>
                <div className={s.icon}>
                  <Icon1 />
                </div>

                <Text className={s.aboutBoxTitle}>
                  Меняться <br /> и формировать новые <br /> правила рынка
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={matchesMobile ? 12 : 4}>
              <Box className={cx(s.aboutBox, s.two)}>
                <div className={s.icon}>
                  <Icon2 />
                </div>

                <Text className={s.aboutBoxTitle}>
                  Превращать идеи <br /> в масштабные <br /> трансформации
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={matchesMobile ? 12 : 4}>
              <Box className={cx(s.aboutBox, s.three)}>
                <div className={s.icon}>
                  <Icon3 />
                </div>

                <Text className={s.aboutBoxTitle}>
                  Достигать устойчивого роста <br /> и реальных
                  бизнес-результатов
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
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
        <Text className={s.aboutBottomTitle} mb={"20px"}>
          Мы убеждены – время простого <br /> консалтинга прошло
        </Text>
        <Flex w={"100%"} gap={"60px"} mb={36}>
          <Text
            c={"#DBE9F9"}
            lh={"120%"}
            lts={"-0.32px"}
            fz={matches ? "14px" : "16px"}
            fw={40}
            ta={"left"}
            maw={635}
          >
            InteriseGroup работает по модели партнерства: вместе с клиентами
            анализируем ситуацию, проверяем гипотезы, усиливаем работающие
            решения и масштабируем результат. Работа в диалоге и прозрачность
            процесса ускоряет решения и превращает стратегию в реальный,
            измеримый результат
          </Text>
          {!matches && (
            <Box w={"50%"}>
              <Text
                c={"#DBE9F9"}
                lh={"120%"}
                lts={"-0.32px"}
                fz={"16px"}
                fw={40}
                maw={"450px"}
                ta={"left"}
              >
                Разделяете эти принципы и ищете партнеров, работающих на
                результат? <br /> <br /> <br />
                Мы будем рады обсудить ваш проект
              </Text>
            </Box>
          )}
        </Flex>
        <Box className={s.imageOur}>
          <div className={s.cards}>
            <div className={s.card}>
              <div className={s.icon}>
                <IconOurStep1 />
              </div>
              <Text>
                Открытый <br /> диалог
              </Text>
            </div>
            {!matchesMobile ? (
              <VectorOurStep />
            ) : (
              <VectorOurStepMobile className={s.vector} />
            )}
            <div className={s.card}>
              <div className={s.icon}>
                <IconOurStep2 />
              </div>
              <Text>Партнёрство</Text>
            </div>
            {!matchesMobile ? (
              <VectorOurStep />
            ) : (
              <VectorOurStepMobile className={s.vector} />
            )}
            <div className={s.card}>
              <div className={s.icon}>
                <IconOurStep3 />
              </div>
              <Text>
                Ответственность <br /> за результат
              </Text>
            </div>
          </div>

          {/*<Image*/}
          {/*  src={matchesMobile ? ourStepMobile : ourStep}*/}
          {/*  alt={"image-one"}*/}
          {/*  width={1190}*/}
          {/*  height={184}*/}
          {/*  className={s.image}*/}
          {/*/>*/}
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
        <Center>
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
        </Center>
      </Box>
    </>
  )
}
