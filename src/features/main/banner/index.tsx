import { Button, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React from "react"

import { onLinkClick } from "@/shared/libs/scroll.ts"

import s from "./styles.module.scss"

export const Banner = () => {
  const matchesIpad = useMediaQuery("(max-width: 1040px)")
  const matches = useMediaQuery("(max-width: 576px)")
  return (
    <>
      <div className={s.sectionWrapper}>
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          m={matchesIpad ? "30px auto 0 auto" : "auto 24px"}
          maw={"1000px"}
        >
          <Text className={"section-title sm"} c={"#8696A9"} mb={"11px"}>
            Опыт и признание
          </Text>
          <Text
            className={"section-subtitle"}
            c={"#fff"}
            ta="center"
            mb={"24px"}
          >
            В портфеле InteriseGroup — проекты в 31+ странах и 15 отраслях:{" "}
            <br />
            от IT, финансов и ритейла до производства, <br /> телекоммуникаций,
            FMCG и энергетики.
          </Text>
          <Text
            fz={"16px"}
            c={"#798B9E"}
            lh={"120%"}
            lts={"-0.32px"}
            mb={"32px"}
          >
            Достижения клиентов и отраслевые награды за инновации и
            трансформацию бизнес- <br />
            моделей подтверждают результативность нашего подхода.
          </Text>
          <Button
            bg={"#0076FE"}
            color={"#FFF"}
            radius={8}
            h={"44px"}
            onClick={() => onLinkClick("navbar5")}
            w={matches ? "100%" : "233px"}
          >
            Все проекты
          </Button>
        </Flex>
      </div>
    </>
  )
}
