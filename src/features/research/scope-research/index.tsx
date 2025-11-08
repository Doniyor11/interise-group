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
      </Box>
    </div>
  )
}
