import {
  Accordion,
  AccordionControl,
  Box,
  Button,
  Flex,
  Grid,
  Text,
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Image from "next/image"
import { useRouter } from "next/router"
import React, { FC } from "react"

import Icon1 from "@/shared/assets/images/interise-group/geo-alt.svg"
import Icon2 from "@/shared/assets/images/interise-group/graph-up.svg"
import IconArrow from "@/shared/assets/images/interise-group/icon-arrow-down.svg"
import Image1 from "@/shared/assets/images/interise-group/idea-1.png"
import Image2 from "@/shared/assets/images/interise-group/idea-2.png"
import Image3 from "@/shared/assets/images/interise-group/idea-3.png"
import Image4 from "@/shared/assets/images/interise-group/idea-4.svg"
import Image5 from "@/shared/assets/images/interise-group/idea-5.svg"
import Image6 from "@/shared/assets/images/interise-group/idea-6.svg"
import Image7 from "@/shared/assets/images/interise-group/idea-7.svg"
import Image8 from "@/shared/assets/images/interise-group/idea-8.svg"
import { onLinkClick } from "@/shared/libs/scroll.ts"

// import { onLinkClick } from "@/shared/libs/scroll.ts"
import s from "./styles.module.scss"

const IDEAS_DATA = [
  {
    rank: "Топ-3",
    rankDesc: "компания в стране",
    info: [
      { icon: Icon1, label: "Страна:", value: "Средняя Азия" },
      { icon: Icon2, label: "Отрасль:", value: "Финтех" },
    ],
    description:
      "Интеграция ведущих банков и запуск крупнейшей трансформации на рынке",
    results: [
      { icon: Image1, text: "Операционная прибыль выросла ×6 за 2 года" },
      { icon: Image2, text: "Ускорен вывод новых продуктов" },
      { icon: Image3, text: "500+ сотрудников обучены" },
    ],
  },
  {
    rank: "Топ-3",
    rankDesc: "компания в стране",
    info: [
      { icon: Icon1, label: "Страна:", value: "Закавказье" },
      { icon: Icon2, label: "Отрасль:", value: "Авиация" },
    ],
    description: "Создание новой </br> национальной авиакомпании </br> с нуля",
    results: [
      {
        icon: Image1,
        text: "Привлечено 210+ млн $ инвестиций, выплачено 14+ млн $ налогов",
      },
      {
        icon: Image2,
        text: "Национальный перевозик запущен и выполняет регулярные рейсы",
      },
      { icon: Image3, text: "Создано 800+ рабочих мест" },
    ],
  },
  {
    rank: "Топ-1",
    rankDesc: "компания </br> в премиальной </br> медицине",
    info: [
      { icon: Icon1, label: "Страна:", value: "Россия" },
      { icon: Icon2, label: "Отрасль:", value: "Медицина" },
    ],
    description:
      "Стратегия экспансии </br> и развитие премиального </br> медицинского бренда",
    results: [
      {
        icon: Image1,
        text: "Проведён анализ и вывлено 46 инициатив для роста выручки",
      },
      { icon: Image2, text: "Запущены новые направления и программы развития" },
      {
        icon: Image3,
        text: "Начата международная экспансия, подготовлен пилот в Южной Корее",
      },
    ],
  },
]

const IdeaInfoItem: FC<{ icon: any; label: string; value: string }> = ({
  icon: Icon,
  label,
  value,
}) => (
  <Flex className={s.ideaBoxInfoCountry} gap={"12px"} align={"center"}>
    <Icon />
    <Flex direction={"column"}>
      <Text className={s.ideaBoxCountry}>{label}</Text>
      {value && <Text className={s.ideaBoxCity}>{value}</Text>}
    </Flex>
  </Flex>
)

const IdeaResultItem: FC<{ icon: any; text: string }> = ({ icon, text }) => (
  <Flex gap={"24px"} align={"center"} p={"13px 18px"} className={s.ideaItem}>
    <Image src={icon} alt={""} width={44} height={44} />
    <Text component={"p"}>{text}</Text>
  </Flex>
)

const IdeaCard: FC<{ data: (typeof IDEAS_DATA)[0]; onClick?: () => void }> = ({
  data,
  onClick,
}) => (
  <Box onClick={onClick} className={s.ideaBox}>
    <Box className={s.ideaBoxTop}>
      <Flex gap={"26px"} justify={"space-between"}>
        <Text className={s.ideaBoxTitle}>
          {data.rank} <br />
          <span dangerouslySetInnerHTML={{ __html: data.rankDesc }} />
        </Text>
        <Flex direction="column" gap="6px">
          {data.info.map((info, i) => (
            <IdeaInfoItem key={i} {...info} />
          ))}
        </Flex>
      </Flex>
      <Text
        className={s.ideaBoxDescription}
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    </Box>

    <Accordion
      unstyled
      w={"100%"}
      key={"card-1"}
      chevron={<IconArrow />}
      multiple={false}
      m={"8px 0 18px"}
    >
      <Accordion.Item value="item-1" className={s.collapseWrapper}>
        <AccordionControl
          onClick={(e) => e.stopPropagation()}
          className={s.collapseBtn}
        >
          Задача:
        </AccordionControl>
        <Accordion.Panel>
          <Text className={s.collapseText}>
            Провести интеграцию с другим банком и полномасштабная трансформация
            операционной модели
          </Text>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item-2" className={s.collapseWrapper}>
        <AccordionControl
          onClick={(e) => e.stopPropagation()}
          className={s.collapseBtn}
        >
          Решение:
        </AccordionControl>
        <Accordion.Panel>
          <Text className={s.collapseText}>
            Разработана и реализована стратегия изменений, запущено в работу 52
            проекта, сформированы новые подходы к клиентскому опыту, 500+
            сотрудников прошли обучение
          </Text>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>

    <Box>
      <Text className={s.ideaBoxResult}>Результат:</Text>
      <Flex direction={"column"} gap={"12px"}>
        {data.results.map((result, i) => (
          <IdeaResultItem key={i} {...result} />
        ))}
      </Flex>
    </Box>
  </Box>
)

export const Books: FC = () => {
  const router = useRouter()
  const matches = useMediaQuery("(max-width: 1040px)")

  return (
    <div className={s.sectionWrapper}>
      <Flex
        direction="column"
        align={matches ? "flex-start" : "center"}
        gap={"20px"}
      >
        <Text className={s.ideaTitle}>От идей к результатам</Text>
        <Text className={s.ideaDescription} maw={matches ? "100%" : "512px"}>
          Главный показатель нашей эффективности — реальные результаты: рост
          выручки, доли рынка и производительности
        </Text>
      </Flex>
      <Grid gutter={32}>
        {IDEAS_DATA.map((idea, idx) => (
          <Grid.Col span={matches ? 12 : 4} key={idx}>
            <IdeaCard data={idea} onClick={() => router.push("/case")} />
          </Grid.Col>
        ))}
      </Grid>
      <Flex justify={"center"} mt={"24px"}>
        <Button
          bg={"#0076FE"}
          color={"#FFF"}
          radius={8}
          h={"44px"}
          w={matches ? "100%" : "233px"}
          fz={"16px"}
          fw={400}
          lh={"100%"}
          onClick={() => router.push("/case")}
        >
          Все проекты
        </Button>
      </Flex>
      {/* ----- */}

      <Grid gutter={"32px"} pt={"100px"} id={"directions"}>
        <Grid.Col span={matches ? 12 : 4}>
          <Box h={"100%"}>
            <Text className={s.ideaInfoBoxTitleOne}>
              Мы работаем спринтами — от быстрой диагностики до комплексного
              внедрения
            </Text>
            <Text className={s.ideaInfoBoxDescriptionOne}>
              За короткое время формулируем и проверяем гипотезы, усиливаем
              работающие решения и масштабируем результат
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={matches ? 12 : 4}>
          <Box className={s.ideaInfoBox}>
            <Flex justify={"flex-end"} mb={"45px"}>
              <div className={s.icon}>
                <Image4 />
              </div>
            </Flex>
            <Text className={s.ideaInfoBoxTitle}>Диагностика</Text>
            <Text className={s.ideaInfoBoxDescription}>
              Быстрый анализ и диагностика бизнеса: определяем точки роста и
              создаём дорожную карту дальнейших действий
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={matches ? 12 : 4}>
          <Box className={s.ideaInfoBox}>
            <Flex justify={"flex-end"} mb={"45px"}>
              <div className={s.icon}>
                <Image5 />
              </div>
            </Flex>
            <Text className={s.ideaInfoBoxTitle}>Стратегия</Text>
            <Text className={s.ideaInfoBoxDescription}>
              Формируем стратегию, проверяем гипотезы практикой, усиливаем
              сильное и убираем лишнее
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={matches ? 12 : 4}>
          <Box className={s.ideaInfoBox}>
            <Flex justify={"flex-end"} mb={"45px"}>
              <div className={s.icon}>
                <Image6 />
              </div>
            </Flex>
            <Text className={s.ideaInfoBoxTitle}>Цифровая транформация</Text>
            <Text className={s.ideaInfoBoxDescription}>
              Реализуем комплексные трансформации, перестраиваем процессы и
              добиваемся измеримых результатов
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={matches ? 12 : 4}>
          <Box className={s.ideaInfoBox}>
            <Flex justify={"flex-end"} mb={"45px"}>
              <div className={s.icon}>
                <Image7 />
              </div>
            </Flex>
            <Text className={s.ideaInfoBoxTitle}>Инвестирование</Text>
            <Text className={s.ideaInfoBoxDescription}>
              Готовим бизнес к сделкам и IPO, увеличиваем капитализацию и
              инвестиционную привлекательность
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={matches ? 12 : 4}>
          <Box className={s.ideaInfoBox}>
            <Flex justify={"flex-end"} mb={"45px"}>
              <div className={s.icon}>
                <Image8 />
              </div>
            </Flex>
            <Text className={s.ideaInfoBoxTitle}>Выход на новые рынки</Text>
            <Text className={s.ideaInfoBoxDescription}>
              Помогаем компаниям масштабироваться и выходить на международные
              рынки
            </Text>
          </Box>
        </Grid.Col>
      </Grid>
      <Flex justify={"center"} mt={"24px"}>
        <Button
          bg={"#0076FE"}
          color={"#FFF"}
          radius={8}
          h={"44px"}
          w={matches ? "100%" : "233px"}
          fz={"16px"}
          fw={400}
          lh={"100%"}
          onClick={() => onLinkClick("contacts")}
        >
          Связаться с нами
        </Button>
      </Flex>
    </div>
  )
}
