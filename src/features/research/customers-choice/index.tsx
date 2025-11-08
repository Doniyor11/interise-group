import { Box, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import React from "react"

import IconCheck from "@/shared/assets/images/interise-group/icon-check.svg"

import s from "./styles.module.scss"

export const CustomersChoice = () => {
  const matches = useMediaQuery("(max-width: 1040px)")

  return (
    <>
      <div className={cx(s.sectionWrapper, "container")}>
        <h2>
          Что такое <span>Customer Choice Index?</span>
        </h2>
        <Text className={s.subtitle}>
          Это комплексное исследование методом «Тайный покупатель», которое
          анализирует весь путь <br />
          клиента — от первого поиска в интернете до сервисных операций в
          отделении. Мы не просто <br />
          ставим оценки, мы измеряем ключевые индексы, которые напрямую влияют
          на решение <br />
          клиента.
        </Text>

        <div className={s.box}>
          <Text className={s.boxTitle}>Наша методология</Text>
          <Flex
            gap={32}
            justify="space-between"
            direction={matches ? "column" : "row"}
          >
            <div className={s.boxLeft}>
              <div className={s.leftItem}>
                <IconCheck />
                <Box>
                  <Text className={s.itemTitle}>Полный клиентский путь</Text>
                  <Text className={s.itemSubtitle}>
                    Наши тайные покупатели проходят сценарии как для новых, так
                    и для действующих клиентов, оценивая процессы привлечения и
                    обслуживания.
                  </Text>
                </Box>
              </div>
              <div className={s.leftItem}>
                <IconCheck />
                <Box>
                  <Text className={s.itemTitle}>Две детальные скор-карты</Text>
                  <Text className={s.itemSubtitle}>
                    Мы отдельно оцениваем Online-путь (сайт, приложение, чаты) и
                    Offline-путь (звонок, визит в отделение).
                  </Text>
                </Box>
              </div>
              <div className={s.leftItem}>
                <IconCheck />
                <Box>
                  <Text className={s.itemTitle}>Дополнительные индексы</Text>
                  <Text className={s.itemSubtitle}>
                    На основе критериев встроенных в скор-карты мы рассчитываем
                    4 дополнительных индекса, которые дают полное понимание
                    клиентского опыта.
                  </Text>
                </Box>
              </div>
            </div>
            <div className={s.boxRight}>
              <div className={s.card}>
                <Text className={s.cardTitle}>Omni</Text>
                <Text className={s.cardText}>Бесшовность</Text>
              </div>
              <div className={s.card}>
                <Text className={s.cardTitle}>GenAI</Text>
                <Text className={s.cardText}>Технологичность</Text>
              </div>
              <div className={s.card}>
                <Text className={s.cardTitle}>Sales</Text>
                <Text className={s.cardText}>Эффективность продаж</Text>
              </div>
              <div className={s.card}>
                <Text className={s.cardTitle}>Культура</Text>
                <Text className={s.cardText}>Эмпатия</Text>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  )
}
