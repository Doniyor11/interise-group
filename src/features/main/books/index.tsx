import { Carousel } from "@mantine/carousel"
import { Box, Button, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Image, { StaticImageData } from "next/image"
import React, { FC } from "react"

import ImageRight from "@/shared/assets/images/interise-group/imgright.svg"
import ImageSlider1 from "@/shared/assets/images/interise-group/slider1.png"
import ImageSlider2 from "@/shared/assets/images/interise-group/slider2.png"
import ImageSlider3 from "@/shared/assets/images/interise-group/slider3.png"
import ImageSlider4 from "@/shared/assets/images/interise-group/slider4.png"
import ImageSlider5 from "@/shared/assets/images/interise-group/slider5.png"
import ImageSlider6 from "@/shared/assets/images/interise-group/slider6.png"
import ImageSlider7 from "@/shared/assets/images/interise-group/slider7.png"
import ImageSlider8 from "@/shared/assets/images/interise-group/slider8.png"

import s from "./styles.module.scss"

// Типы
type CaseStudy = {
  number: string
  country: string
  industry: string
  image: StaticImageData
  task: string
  solution: string
  result: string
}

type CaseCardProps = {
  caseStudy: CaseStudy
}

type InfoRowProps = {
  label: string
  value: string
}

// Константы
const CASE_STUDIES: CaseStudy[] = [
  {
    number: "№1",
    country: "Казахстан",
    industry: "Банковский сектор",
    image: ImageSlider1,
    task: "Провести интеграцию с другим банком и полномасштабная трансформация операционной модели",
    solution:
      "Разработана и реализована стратегия изменений, запущено в работу 52 проекта, сформированы новые подходы к клиентскому опыту, 500+ сотрудников прошли обучение",
    result:
      "Операционная прибыль выросла в 6 раз за два года, ускорен вывод новых продуктов",
  },
  {
    number: "№2",
    country: "Армения",
    industry: "Государственные инвестиции / авиация",
    image: ImageSlider2,
    task: "Разработать национальную инвестиционную платформу и подготовить условия для запуска нового авиаперевозчика.",
    solution:
      "Сформирован инвестиционный план, создана платформа, проработана модель авиакомпании, подготовлен запуск и внедрены ESG-практики.",
    result:
      "Перевозчик выполняет регулярные рейсы, привлечено 210+ млн $ инвестиций, создано 800+ рабочих мест, выплачено 14+ млн $ налогов.",
  },
  {
    number: "№3",
    country: "Россия",
    industry: "Частная сеть медицининских клиник",
    image: ImageSlider3,
    task: "Увеличить выручку и подготовить компанию к международной экспансии",
    solution:
      "Проведена комплексная диагностика, discovery-анализ, выявлено 46 инициатив для роста, сформирован план запуска новых программ и выхода на рынки СНГ, Южной Кореи и MENA.",
    result:
      "Запущены новые направления, начата экспансия, подготовлен пилот в Южной Корее.",
  },
  {
    number: "№4",
    country: "Грузия",
    industry: "Ритейл",
    image: ImageSlider4,
    task: "Подготовить бизнес к продаже стратегическому инвестору",
    solution:
      "Проведены аудит и оптимизация процессов, переупаковка бизнеса. Подготовлена финансовая модель" +
      "и презентации для сделки",
    result: "Заключена многомиллионная сделка с новым владельцем",
  },
  {
    number: "№5",
    country: "Армения",
    industry: "Банковский сектор",
    image: ImageSlider5,
    task: "Создать data-driven стратегию персонализации и рост доходов",
    solution:
      "Проведен анализ 430 тыс. профилей клиентов банка, разработано 18 инициатив, запущен Telegram-бот, внедрена персонализация",
    result:
      "Сформирован фундамент персонализации, выявлен дополнительный доход до 22–52 млрд драм, заложена база для роста выручки",
  },
  {
    number: "№6",
    country: "Катар",
    industry: "Банковский сектор",
    image: ImageSlider6,
    task: "Запустить новое направление по управлению ликвидностью; создать комплексное предложение для обслуживания групп компаний",
    solution:
      "Разработано и внедрено новое продуктовое направление Cash Management; сформирован базовый перечень продуктов для работы с корпоративными группами.",
    result:
      "За 2 месяца запущено MVP, рост базы пассивов по корпоративным клиентам составил 140%; привлечены крупные оптовые трейдеры из ОАЭ.",
  },
  {
    number: "№7",
    country: "Россия",
    industry: "Инвестиционные услуги",
    image: ImageSlider7,
    task: "Запустить инвестиционный бизнес для физлиц в новом регионе присутствия холдинга.",
    solution:
      "Определены элементы российской модели для масштабирования, описаны бизнес-процессы, подготовлена продуктовая и сервисная модель.",
    result:
      "Сделан успешный выход на безубыточность в первый год работы, обеспечен рост эффективности бизнеса за счет стандартизации процессов.",
  },
  {
    number: "№8",
    country: "ОАЭ",
    industry: "Банковский сектор",
    image: ImageSlider8,
    task: "Запустить цифровой банк для состоятельных клиентов (Affluent & HNWI).",
    solution:
      "Определены целевой сегмент и продуктовая модель, разработана стратегия привлечения клиентов, сформирована организационная структура и MVP мобильного приложения.",
    result:
      "Получена лицензия на рынке ОАЭ, создано мобильное приложение, подготовлен выход банка на рынок.",
  },
]

// const HEADER_INFO = {
//   stats: "300+ проектов · 30+ стран · 15 отраслей",
//   description:
//     "Здесь представлены проекты из разных стран и отраслей, реализованные в тесном партнерстве с клиентами.",
// }

// Компоненты
const InfoRow: FC<InfoRowProps> = ({ label, value }) => (
  <Text className={s.cardInfo}>
    <b>{label}:</b> {value}
  </Text>
)

const CaseCard: FC<CaseCardProps> = ({ caseStudy }) => {
  const { number, country, industry, image, task, solution, result } = caseStudy
  const matches = useMediaQuery("(max-width: 1040px)")
  return (
    <div className={s.card}>
      <Box>
        <Text className={s.cardNumber}>{number}</Text>
        <InfoRow label="Страна" value={country} />
        <InfoRow label="Отрасль" value={industry} />

        <Image className={s.image} src={image} alt={`Case study ${number}`} />

        <Flex direction="column" gap="4px">
          <Text className={s.cardInfo} mb="4px">
            <b>Задача:</b> {task}
          </Text>
          <Text className={s.cardInfo}>
            <b>Решение:</b> {solution}
          </Text>
          <Text className={s.cardInfo}>
            <b>Результат:</b> {result}
          </Text>
        </Flex>
      </Box>

      <Button
        bg="#0076FE"
        color="#FFF"
        radius={8}
        h="44px"
        w={matches ? "100%" : "192px"}
        mt="60px"
      >
        Подробнее
      </Button>
    </div>
  )
}

export const Books: FC = () => {
  const matches = useMediaQuery("(max-width: 576px)")

  return (
    <div className={s.sectionWrapper}>
      <Flex>
        <Flex direction="column" w={matches ? "100%" : "50%"}>
          <Text className="section-title" mb={"12px"}>
            От идей к результатам: реальные кейсы
          </Text>
          <Text className="section-subtitle">
            Эффективность нашего подхода лучше всего демонстрируют конкретные
            результаты —
            <span>рост выручки, доли рынка и операционной эффективности.</span>
          </Text>
        </Flex>

        {/*<Flex direction="column" w="50%" justify="center" align="flex-end">*/}
        {/*  <Text*/}
        {/*    className={s.infoNumber}*/}
        {/*    mb="13px"*/}
        {/*    fz="24px"*/}
        {/*    c="#0076FE"*/}
        {/*    fw={400}*/}
        {/*    lts="-0.48px"*/}
        {/*    lh="120%"*/}
        {/*  >*/}
        {/*    {HEADER_INFO.stats}*/}
        {/*  </Text>*/}
        {/*  <Text*/}
        {/*    fz="16px"*/}
        {/*    c="#566677"*/}
        {/*    fw={400}*/}
        {/*    lts="-0.32px"*/}
        {/*    lh="120%"*/}
        {/*    maw="438px"*/}
        {/*  >*/}
        {/*    {HEADER_INFO.description}*/}
        {/*  </Text>*/}
        {/*</Flex>*/}
      </Flex>

      <Carousel
        slideGap={matches ? 8 : 16}
        slideSize={matches ? "100%" : 485}
        align="start"
        height="auto"
        slidesToScroll={matches ? 1 : "auto"}
        classNames={{
          controls: s.carouselControls,
          control: s.carouselControl,
        }}
        loop={true}
        mt="35px"
        nextControlIcon={<ImageRight />}
        previousControlIcon={<ImageRight />}
      >
        {CASE_STUDIES.map((caseStudy, idx) => (
          <Carousel.Slide key={idx}>
            <CaseCard caseStudy={caseStudy} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  )
}
