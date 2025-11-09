import { Box, Button, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import React from "react"

import Icon1 from "@/shared/assets/images/interise-group/icon1.png"
import Icon2 from "@/shared/assets/images/interise-group/icon2.png"
import Icon3 from "@/shared/assets/images/interise-group/icon3.png"
import Icon4 from "@/shared/assets/images/interise-group/icon4.png"
import Icon5 from "@/shared/assets/images/interise-group/icon5.png"
import { onLinkClick } from "@/shared/libs/scroll.ts"

import s from "./styles.module.scss"

const getBoxData = (t: any) => [
  {
    id: 1,
    icon: Icon1,
    className: s.div1,
    title: t("main.how_we_work.diagnostics.title"),
    desc: t("main.how_we_work.diagnostics.description"),
  },
  {
    id: 2,
    icon: Icon2,
    className: s.div2,
    title: t("main.how_we_work.strategy.title"),
    desc: t("main.how_we_work.strategy.description"),
  },
  {
    id: 3,
    icon: Icon3,
    className: s.div3,
    title: t("main.how_we_work.large_scale_change.title"),
    desc: t("main.how_we_work.large_scale_change.description"),
  },
  {
    id: 4,
    icon: Icon4,
    className: s.div4,
    title: t("main.how_we_work.repackaging.title"),
    desc: t("main.how_we_work.repackaging.description"),
  },
  {
    id: 5,
    icon: Icon5,
    className: s.div5,
    title: t("main.how_we_work.go_global.title"),
    desc: t("main.how_we_work.go_global.description"),
  },
]

export const MainMarkets = () => {
  const { t } = useTranslation("common")
  const matches = useMediaQuery("(max-width: 1040px)")
  const boxData = getBoxData(t)
  return (
    <>
      <div className={s.sectionWrapper}>
        <Box className={s.sectionLeft}>
          <Flex gap={""} direction={"column"} w={matches ? "100%" : "50%"}>
            <Text className={"section-title"} mb={"12px"}>
              {t("main.how_we_work.title")}
            </Text>
            <Text className={"section-subtitle"}>
              {t("main.how_we_work.subtitle")}
            </Text>
          </Flex>
          <Flex w={matches ? "100%" : "50%"}>
            <Text
              c={"#798B9E"}
              fz={"16px"}
              lh={"120%"}
              lts={"-0.32px"}
              mt={"15px"}
            >
              {t("main.how_we_work.description")}
            </Text>
          </Flex>
        </Box>

        <Box className={s.sectionLefGrid} mt="40px">
          {boxData.map((data) => (
            <Box key={data.id} className={cx(s.sectionLeftBox, data.className)}>
              <Flex gap={"12px"} align={"center"}>
                <Image
                  src={data.icon}
                  alt={""}
                  width={matches ? 40 : 72}
                  height={matches ? 40 : 72}
                />
                <Text
                  className={s.sectionLeftBoxTitle}
                  fz={matches ? "18px" : "22px"}
                  c={"#535E6B"}
                  lh={"120%"}
                  lts={"-0.48px"}
                  fw={400}
                >
                  {data.title}
                </Text>
              </Flex>
              <Text
                className={s.sectionLeftBoxDesc}
                mt={"20px"}
                fz={matches ? "12px" : "16px"}
                c={"#798B9E"}
                lh={"120%"}
                lts={"-0.32px"}
                fw={400}
              >
                {data.desc}
              </Text>
            </Box>
          ))}
        </Box>

        <Flex justify={"center"} align={"center"} mt={"32px"}>
          <Button
            bg={"#0076FE"}
            color={"#FFF"}
            radius={8}
            h={"44px"}
            w={matches ? "100%" : "192px"}
            fw={"400"}
            onClick={() => onLinkClick("contacts")}
          >
            {t("main.how_we_work.all_projects_button")}
          </Button>
        </Flex>
      </div>
    </>
  )
}
