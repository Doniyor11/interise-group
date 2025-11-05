import { Button, Flex, Text } from "@mantine/core"
import React from "react"

import { onLinkClick } from "@/shared/libs/scroll.ts"

import s from "./styles.module.scss"

export const Banner = () => {
  return (
    <>
      <div className={s.sectionWrapper}>
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          maw={"1000px"}
        >
          <Text className={s.label}>Опыт и признание</Text>
          <Text className={s.title}>
            В портфеле InteriseGroup — проекты в 31 странах и 15 отраслях:{" "}
            <br />
            от IT, финансов и ритейла до производства, <br /> телекоммуникаций,
            FMCG и энергетики
          </Text>
          <Text className={s.subtitle}>
            Достижения клиентов и отраслевые награды за инновации и
            трансформацию бизнес- <br />
            моделей подтверждают результативность нашего подхода
          </Text>
          <Button className={s.btn} onClick={() => onLinkClick("contacts")}>
            Оставить заявку
          </Button>
        </Flex>
      </div>
    </>
  )
}
