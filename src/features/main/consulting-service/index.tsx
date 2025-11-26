import { Box, Button, Center, Flex, Grid, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"
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
  const { t } = useTranslation("common")
  const router = useRouter()
  const matches = useMediaQuery("(max-width: 1040px)")
  const matchesMobile = useMediaQuery("(max-width: 768px)")

  return (
    <>
      <div className={s.sectionWrapper} id={"navbar1"}>
        <Box className={s.sectionRow}>
          <Flex direction={"column"} h={"100%"} align={"flex-start"} w={"100%"}>
            <Text className={s.titleAbout} mb={"10px"}>
              {t("main.about.title")}
            </Text>
            <Text
              className={s.description}
              dangerouslySetInnerHTML={{ __html: t("main.about.description") }}
            />
          </Flex>
          <Grid w={"100%"} gutter={32}>
            <Grid.Col span={matchesMobile ? 12 : 4}>
              <Box
                data-aos="fade-right"
                onClick={() => router.push("/about")}
                className={cx(s.aboutBox, s.one)}
              >
                <div className={s.icon}>
                  <Icon1 />
                </div>

                <Text className={s.aboutBoxTitle}>
                  {t("main.about.card1.title")}
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={matchesMobile ? 12 : 4}>
              <Box
                data-aos="fade-up"
                onClick={() => router.push("/about")}
                className={cx(s.aboutBox, s.two)}
              >
                <div className={s.icon}>
                  <Icon2 />
                </div>

                <Text className={s.aboutBoxTitle}>
                  {t("main.about.card2.title")}
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={matchesMobile ? 12 : 4}>
              <Box
                data-aos="fade-left"
                onClick={() => router.push("/about")}
                className={cx(s.aboutBox, s.three)}
              >
                <div className={s.icon}>
                  <Icon3 />
                </div>

                <Text className={s.aboutBoxTitle}>
                  {t("main.about.card3.title")}
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
            onClick={() => onLinkClick("contacts")}
          >
            {t("main.about.order_strategy_button")}
          </Button>
        </Box>
      </div>
      {/* Наши принципы */}
      <Box
        data-aos="fade-up"
        mt={matches ? "60px" : "80px"}
        className={s.ourWrapper}
      >
        <Text
          className={s.aboutBottomTitle}
          mb={"20px"}
          dangerouslySetInnerHTML={{ __html: t("main.principles.title") }}
        />
        <Flex w={"100%"} gap={"60px"} mb={36}>
          <Text
            c={matches ? "#8FB0E1" : "#DBE9F9"}
            lh={"120%"}
            lts={"-0.32px"}
            fz={matches ? "14px" : "16px"}
            fw={400}
            ta={"left"}
            maw={635}
          >
            {t("main.principles.description1")}
          </Text>
          {!matches && (
            <Box w={"50%"}>
              <Text
                c={matches ? "#8FB0E1" : "#DBE9F9"}
                lh={"120%"}
                lts={"-0.32px"}
                fz={"16px"}
                fw={400}
                maw={"450px"}
                ta={"left"}
                dangerouslySetInnerHTML={{
                  __html: t("main.principles.description2"),
                }}
              />
            </Box>
          )}
        </Flex>
        <Box className={s.imageOur}>
          <div className={s.cards}>
            <div className={s.card}>
              <div className={s.icon}>
                <IconOurStep1 />
              </div>
              <Text>{t("main.principles.step1")}</Text>
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
              <Text>{t("main.principles.step2")}</Text>
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
              <Text>{t("main.principles.step3")}</Text>
            </div>
          </div>

          {matches && (
            <Box w={"100%"} mt={"32px"}>
              <Text
                c={matches ? "#8FB0E1" : "#DBE9F9"}
                lh={"120%"}
                lts={"-0.32px"}
                fz={matches ? "14px" : "16px"}
                fw={400}
                maw={"450px"}
                mb={"40px"}
                ta={"left"}
              >
                {t("main.principles.description2")}
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
            onClick={() => onLinkClick("contacts")}
          >
            {t("main.principles.discuss_button")}
          </Button>
        </Center>
      </Box>
    </>
  )
}
