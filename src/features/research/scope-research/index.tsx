import { Box, Text } from "@mantine/core"
import cx from "clsx"
import React from "react"

import { AnimatedNumber } from "@/shared/ui"

import s from "./styles.module.scss"

export const ScopeResearch = () => {
  return (
    <div className={cx(s.sectionWrapper, "container")}>
      <h2>
        <span>Масштаб</span> исследования
      </h2>
      <Text className={s.subtitle}>
        Мы предоставляем данные, которым можно доверять. Исследование охватывает{" "}
        <br />
        несколько рынков для наиболее полного и объективного сравнения.
      </Text>
      <Box className={s.box}>
        <div className={s.statsWrapper}>
          <div className={s.statsCard}>
            <Text>
              <AnimatedNumber value={2} className={s.count} />
            </Text>
            <Text className={s.text}>Региона</Text>
          </div>
          <div className={s.statsCard}>
            <Text>
              <AnimatedNumber value={8} className={s.count} />
            </Text>
            <Text className={s.text}>Стран</Text>
          </div>
          <div className={s.statsCard}>
            <Text>
              <AnimatedNumber value={15} className={s.count} symbols={"+"} />
            </Text>
            <Text className={s.text}>
              Банко
              <span>в каждой стране</span>
            </Text>
          </div>
          <div className={s.statsCard}>
            <Text>
              <AnimatedNumber value={500} className={s.count} symbols={"+"} />
            </Text>
            <Text className={s.text}>
              Тайных визитов
              <span>По сценариям Retail и SME</span>
            </Text>
          </div>
        </div>

        {/*<Flex className={s.tabWrapper} m={"0 auto"}>*/}
        {/*  <Button className={cx(s.tabBtn, s.active)}>Регион 1</Button>*/}
        {/*  <Button className={s.tabBtn}>Регион 2</Button>*/}
        {/*</Flex>*/}
        {/*<Flex className={cx(s.tabWrapper, s.transparent)} m={"16px auto"}>*/}
        {/*  <Button className={cx(s.tabBtn, s.active)}>Страна 1</Button>*/}
        {/*  <Button className={s.tabBtn}>Страна 2</Button>*/}
        {/*  <Button className={s.tabBtn}>Страна 3</Button>*/}
        {/*  <Button className={s.tabBtn}>Страна 4</Button>*/}
        {/*</Flex>*/}
        {/*<Box className={s.tableWrapper}>*/}
        {/*  <div className={s.head}>*/}
        {/*    <Text>Рейтинг банков: Страна 1</Text>*/}
        {/*    <Flex className={s.tabWrapper}>*/}
        {/*      <Button className={cx(s.tabBtn, s.active)}>По индексу</Button>*/}
        {/*      <Button className={s.tabBtn}> По волатильности</Button>*/}
        {/*    </Flex>*/}
        {/*  </div>*/}
        {/*  <div className={s.body}>*/}
        {/*    {banks.map((bank) => (*/}
        {/*      <Flex key={bank.id} align="center" gap={10}>*/}
        {/*        <div className={s.tableRow}>*/}
        {/*          <Text className={s.text}>*/}
        {/*            <span>{bank.id}</span>*/}
        {/*            {bank.name}*/}
        {/*          </Text>*/}
        {/*          <Text className={cx(s.text, s.bold)}>*/}
        {/*            {bank.value} <span>{bank.subValue}</span>*/}
        {/*          </Text>*/}
        {/*        </div>*/}
        {/*        <Box mih={12}>*/}
        {/*          <IconArrow />*/}
        {/*        </Box>*/}
        {/*      </Flex>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</Box>*/}
      </Box>
    </div>
  )
}
