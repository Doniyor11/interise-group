import { Button, Flex, Text } from "@mantine/core"
import React from "react"

import s from "./styles.module.scss"

export const Banner = () => {
  return (
    <>
      <div className={s.sectionWrapper}>
        <div className={"container"}>
          <Flex
            direction={"column"}
            justify={"center"}
            align={"center"}
            m={"auto 24px"}
            maw={"900px"}
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
              В портфеле{" "}
              <span>InteriseGroup — проекты в 30+ странах и 15+ отраслях:</span>
              от IT, финансов и ритейла до производства, телекоммуникаций, FMCG
              и энергетики.
            </Text>
            <Text
              fz={"16px"}
              c={"#798B9E"}
              lh={"120%"}
              lts={"-0.32px"}
              mb={"32px"}
            >
              Достижения клиентов и отраслевые награды за инновации и
              трансформацию бизнес-моделей подтверждают результативность нашего
              подхода.
            </Text>
            <Button bg={"#0076FE"} color={"#FFF"} radius={8} h={"44px"}>
              Оставить заявку
            </Button>
          </Flex>
        </div>
      </div>
    </>
  )
}
