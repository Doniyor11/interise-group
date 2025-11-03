import { Box, Button, Flex, Text } from "@mantine/core"
import cx from "clsx"
import React from "react"

import s from "./styles.module.scss"

export const InteractiveDashboard = () => {
  return (
    <div className={cx(s.sectionWrapper, "container")}>
      <h2>
        Все данные — в одном <span>интерактивном дашборде</span>
      </h2>
      <Text className={s.subtitle}>
        Вы получаете не просто отчет, а живой инструмент для анализа. Ниже
        представлена главная страница дашборда. Сравнивайте себя с конкурентами,
        находите точки роста и принимайте решения на основе реальных данных. В
        полной версии вы сможете изучить детальную оценку каждого шага на
        клиентском пути.
      </Text>
      <Text className={s.tabLabel}>Выберите сегмент</Text>
      <Flex className={s.tabWrapper} m={"12px auto 32px"}>
        <Button className={s.tabBtn}>All</Button>
        <Button className={cx(s.tabBtn, s.active)}>Retail</Button>
        <Button className={s.tabBtn}>SME</Button>
      </Flex>
      <Box className={s.cards}>
        <div className={s.leftSide}>
          <Box mih={220} className={s.card}>
            <Text className={s.cardTitle}>Card title</Text>
            <div className={s.cardBody}></div>
          </Box>
          <Box mih={343} className={s.card}>
            <Text className={s.cardTitle}>Card title</Text>
            <div className={s.cardBody}></div>
          </Box>
          <Box mih={317} className={s.card}>
            <Text className={s.cardTitle}>Card title</Text>
            <div className={s.cardBody}></div>
          </Box>
        </div>
        <div className={s.rightSide}>
          <Box className={cx(s.card, s.firstCard)}>
            <Text className={s.cardTitle}>Card title</Text>
            <div className={s.cardBody}></div>
          </Box>
          <Box className={s.card}>
            <Text className={s.cardTitle}>Card title</Text>
            <div className={s.cardBody}></div>
          </Box>
          <Box className={s.card}>
            <Text className={s.cardTitle}>Card title</Text>
            <div className={s.cardBody}></div>
          </Box>
          <Box className={s.card}>
            <Text className={s.cardTitle}>Card title</Text>
            <div className={s.cardBody}></div>
          </Box>
          <Box className={s.card}>
            <Text className={s.cardTitle}>Card title</Text>
            <div className={s.cardBody}></div>
          </Box>
          <Box className={cx(s.card, s.lastCard)}>
            <Text className={s.cardTitle}>Card title</Text>
            <div className={s.cardBody}></div>
          </Box>
        </div>
      </Box>
    </div>
  )
}
