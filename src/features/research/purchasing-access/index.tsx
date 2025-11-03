import { Box, Button, Text } from "@mantine/core"
import cx from "clsx"
import React from "react"

import s from "./styles.module.scss"

export const PurchasingAccess = () => {
  return (
    <>
      <div className={cx(s.sectionWrapper, "container")}>
        <h2 className={s.title}>
          <span>Что вы получите</span>, купив доступ к исследованию?
        </h2>
        <div className={s.cards}>
          <div className={s.card}>
            <Text className={s.cardTitle}>Четкое понимание слабых мест</Text>
            <Text className={s.cardText}>
              Вы точно узнаете, на каком этапе и в каком канале вы теряете
              клиентов. Это поможет сфокусировать ресурсы на решении ключевых
              задач.
            </Text>
          </div>
          <div className={s.card}>
            <Text className={s.cardTitle}>Конкурентное преимущество</Text>
            <Text className={s.cardText}>
              Данные по конкурентам покажут их сильные и слабые стороны.
              Используйте их, чтобы отстроиться и стать лидером рынка.
            </Text>
          </div>
          <div className={s.card}>
            <Text className={s.cardTitle}>Рост конверсии и продаж</Text>
            <Text className={s.cardText}>
              Улучшив клиентский опыт на основе данных, вы напрямую повлияете на
              решение клиента выбрать именно ваш банк.
            </Text>
          </div>
          <div className={s.card}>
            <Text className={s.cardTitle}>Базовая диагностика</Text>
            <Text className={s.cardText}>
              Наши данные — это отправная точка. Мы не только покажем &quot;что
              не так&quot;, но и поможем разработать стратегию улучшений.
            </Text>
          </div>
        </div>

        <Box className={s.box}>
          <Box>
            <Text className={s.title}>
              Готовы увидеть свой бизнес <span>глазами клиента?</span>
            </Text>
            <Text className={s.subtitle}>
              Запросите демонстрацию дашборда и получите персонализированное
              предложение. Узнайте, как Customer Choice Index может стать
              главным инструментом для вашего роста.
            </Text>
          </Box>
          <Button className={s.btn}>Запросить демо</Button>
        </Box>
      </div>
    </>
  )
}
