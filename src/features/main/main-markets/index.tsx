import { Box, Button, Flex, Text } from "@mantine/core"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import Icon1 from "@/shared/assets/images/interise-group/icon1.png"
import Icon2 from "@/shared/assets/images/interise-group/icon2.png"
import Icon3 from "@/shared/assets/images/interise-group/icon3.png"
import Icon4 from "@/shared/assets/images/interise-group/icon4.png"
import Icon5 from "@/shared/assets/images/interise-group/icon5.png"

import s from "./styles.module.scss"

const boxData = [
  {
    id: 1,
    icon: Icon1,
    className: s.div1,
    title: "Диагностика",
    desc: `Быстрый обзор бизнеса: анализ данных, интервью, экспресс-диагностика и, при необходимости, внутренний аудит. Помогает увидеть ключевые проблемы, точки роста и возможные решения, сформировать ясную дорожную карту дальнейших действий.`,
  },
  {
    id: 2,
    icon: Icon2,
    className: s.div2,
    title: "Стратегия",
    desc: `Разработка стратегий, которые работают в реальном бизнесе. Гипотезы проверяются практикой: слабое исключается, сильное масштабируется. Это помогает компаниям укреплять позиции, повышать эффективность и выходить на новые рынки.`,
  },
  {
    id: 3,
    icon: Icon3,
    className: s.div3,
    title: "Large Scale Change",
    desc: `Реализация комплексных трансформаций: изменение бизнес-моделей, процессов и структур с фокусом на измеримый результат. Многие проекты выполняются по модели success fee — команда InteriseGroup заинтересована в успехе наравне с клиентом. Опыт включает интеграцию крупных игроков, перестройку операционных моделей, запуск десятков проектов изменений и обучение сотен сотрудников.`,
  },
  {
    id: 4,
    icon: Icon4,
    className: s.div4,
    title: "Переупаковка бизнеса для продажи/инвестиций",
    desc: `Подготовка компаний к масштабным сделкам и привлечению капитала: от оценки потенциала до структурирования сделки и подготовки к IPO. Это повышает стоимость бизнеса и помогает привлечь стратегических инвесторов.`,
  },
  {
    id: 4,
    icon: Icon5,
    className: s.div5,
    title: "Go Global",
    desc: `Сопровождение выхода компаний на новые рынки: формирование стратегии глобальной экспансии, адаптация продуктов и поддержка запуска бизнеса в новых странах. Опыт InteriseGroup включает запуск бизнесов с нуля в новых странах, подготовку к экспансии и управление проектами на рынках Европы, СНГ и Ближнего Востока.`,
  },
]

export const MainMarkets = () => {
  return (
    <>
      <div className={s.sectionWrapper}>
        <Box className={s.sectionLeft}>
          <Flex gap={""} direction={"column"} w={"50%"}>
            <Text className={"section-title"} mb={"12px"}>
              Как мы работаем
            </Text>
            <Text className={"section-subtitle"}>
              <span>Мы работаем спринтами</span> — от быстрой диагностики до
              комплексного внедрения.
            </Text>
          </Flex>
          <Flex w={"50%"}>
            <Text
              c={"#798B9E"}
              fz={"16px"}
              lh={"120%"}
              lts={"-0.32px"}
              mt={"15px"}
            >
              За короткое время формулируем и проверяем гипотезы, усиливаем
              работающие решения и масштабируем результат. Такой подход даёт
              прозрачность, экономит ресурсы и позволяет быстро увидеть эффект
              от изменений.
            </Text>
          </Flex>
        </Box>

        <Box className={s.sectionLefGrid} mt="40px">
          {boxData.map((data) => (
            <Box key={data.id} className={cx(s.sectionLeftBox, data.className)}>
              <Flex gap={"12px"} align={"center"}>
                <Image src={data.icon} alt={""} width={72} height={72} />
                <Text
                  className={s.sectionLeftBoxTitle}
                  fz={"22px"}
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
                fz={"16px"}
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
      </div>

      <Flex justify={"center"} align={"center"} mt={"32px"}>
        <Button
          bg={"#0076FE"}
          color={"#FFF"}
          radius={8}
          h={"44px"}
          w={"192px"}
          fw={"400"}
        >
          Оставить заявку
        </Button>
      </Flex>
    </>
  )
}
