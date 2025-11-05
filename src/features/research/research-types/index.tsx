import {
  Box,
  Button,
  Popover,
  PopoverDropdown,
  PopoverTarget,
  Text,
} from "@mantine/core"
import cx from "clsx"
import Image from "next/image"
import { useRouter } from "next/router"
import React, { useState } from "react"

import { MonthsData } from "@/features/research/research-types/libs.ts"

import IconArrow from "@/shared/assets/images/interise-group/icon-arrow-down-2.svg"
import IconCalendar from "@/shared/assets/images/interise-group/icon-calendar-2.svg"
import ImageOne from "@/shared/assets/images/interise-group/image-research-3.png"
import ImageTwo from "@/shared/assets/images/interise-group/image-research-4.png"
import ImageThree from "@/shared/assets/images/interise-group/image-research-5.png"
import { onLinkClick } from "@/shared/libs/scroll.ts"

import s from "./styles.module.scss"

export const ResearchTypes = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [selectMonth, setSelectMonth] = useState("1")
  const onResearch = () => {
    onLinkClick("contacts")
  }
  return (
    <div className={cx(s.sectionWrapper, "container")}>
      <Text className={s.title}>
        Виды <span>исследований:</span>
      </Text>
      <div className={s.filters}>
        <Text className={s.text}>
          Customer Choice Index для Казахстана появится до конца года
        </Text>
        <Popover
          radius={10}
          opened={isOpen}
          onClose={() => setIsOpen(false)}
          position={"bottom-end"}
        >
          <PopoverTarget>
            <Text className={s.filterBtn} onClick={() => setIsOpen(!isOpen)}>
              <IconCalendar />
              {MonthsData[Number(selectMonth) - 1]?.month}
              <IconArrow />
            </Text>
          </PopoverTarget>
          <PopoverDropdown>
            <div className={s.monthsWrapper}>
              {MonthsData?.map((item, index) => (
                <Button
                  key={index}
                  className={cx(s.month, {
                    [s.active]: selectMonth === item?.key,
                  })}
                  onClick={() => {
                    setSelectMonth(item?.key)
                    setIsOpen(false)
                  }}
                >
                  {item?.month}
                </Button>
              ))}
            </div>
          </PopoverDropdown>
        </Popover>
      </div>
      <div className={s.cards}>
        <div className={s.card} onClick={() => router.push("/research/1")}>
          <Box>
            <Image src={ImageOne} alt={"image-research"} className={s.image} />
            <Text className={s.cardTitle}>Индексные исследования</Text>
            <Text className={s.description}>
              Customer Choice Index — это комплексная диагностика клиентского
              опыта, которая вскрывает настоящие причины побед и поражений в
              борьбе за клиента. Исследование выходит далеко за рамки
              традиционных оценок качества и фокусируется на критических
              моментах принятия решений.
            </Text>
          </Box>
          <Button
            className={s.btn}
            onClick={(e) => {
              e.stopPropagation()
              onResearch()
            }}
          >
            Купить
          </Button>
        </div>
        <div className={s.card} onClick={() => router.push("/research/1")}>
          <Box>
            <Image src={ImageTwo} alt={"image-research"} className={s.image} />
            <Text className={s.cardTitle}>
              Сравнительный анализ стран и индустрий
            </Text>
            <Text className={s.description}>
              Комплексные макроэкономические обзоры и прогнозирование позволяют
              сравнивать экономики, отрасли и бизнес-среды в разных
              странах.Такой подход помогает компаниям принимать стратегические
              решения, видеть перспективные возможности и опережать изменения на
              рынке, а не реагировать на них постфактум.
            </Text>
          </Box>
          <Button
            className={s.btn}
            onClick={(e) => {
              e.stopPropagation()
              onResearch()
            }}
          >
            Купить
          </Button>
        </div>
        <div className={s.card} onClick={() => router.push("/research/1")}>
          <Box>
            <Image
              src={ImageThree}
              alt={"image-research"}
              className={s.image}
            />
            <Text className={s.cardTitle}>Медиа и публикации</Text>
            <Text className={s.description}>
              Экспертные статьи в ведущих деловых СМИ, аналитические материалы,
              видеоканал с участием партнеров и приглашенных лидеров индустрий,
              а также авторская колонка партнеров и экспертов
              InteriseGroup.story.
            </Text>
          </Box>
          <Button
            className={s.btn}
            onClick={(e) => {
              e.stopPropagation()
              onResearch()
            }}
          >
            Купить
          </Button>
        </div>
        <div className={s.card} onClick={() => router.push("/research/1")}>
          <Box>
            <Image
              src={ImageThree}
              alt={"image-research"}
              className={s.image}
            />
            <Text className={s.cardTitle}>Медиа и публикации</Text>
            <Text className={s.description}>
              Экспертные статьи в ведущих деловых СМИ, аналитические материалы,
              видеоканал с участием партнеров и приглашенных лидеров индустрий,
              а также авторская колонка партнеров и экспертов
              InteriseGroup.story.
            </Text>
          </Box>
          <Button
            className={s.btn}
            onClick={(e) => {
              e.stopPropagation()
              onResearch()
            }}
          >
            Купить
          </Button>
          <div className={s.disabledWrapper}>
            <Text className={s.label}>Планируется релиз</Text>
            <Text className={s.date}>01.12.2025</Text>
          </div>
        </div>
        <div className={s.card} onClick={() => router.push("/research/1")}>
          <Box>
            <Image
              src={ImageThree}
              alt={"image-research"}
              className={s.image}
            />
            <Text className={s.cardTitle}>Медиа и публикации</Text>
            <Text className={s.description}>
              Экспертные статьи в ведущих деловых СМИ, аналитические материалы,
              видеоканал с участием партнеров и приглашенных лидеров индустрий,
              а также авторская колонка партнеров и экспертов
              InteriseGroup.story.
            </Text>
          </Box>
          <Button
            className={s.btn}
            onClick={(e) => {
              e.stopPropagation()
              onResearch()
            }}
          >
            Купить
          </Button>
          <div className={s.disabledWrapper}>
            <Text className={s.label}>Планируется релиз</Text>
            <Text className={s.date}>01.12.2025</Text>
          </div>
        </div>
        <div className={s.card} onClick={() => router.push("/research/1")}>
          <Box>
            <Image
              src={ImageThree}
              alt={"image-research"}
              className={s.image}
            />
            <Text className={s.cardTitle}>Медиа и публикации</Text>
            <Text className={s.description}>
              Экспертные статьи в ведущих деловых СМИ, аналитические материалы,
              видеоканал с участием партнеров и приглашенных лидеров индустрий,
              а также авторская колонка партнеров и экспертов
              InteriseGroup.story.
            </Text>
          </Box>
          <Button
            className={s.btn}
            onClick={(e) => {
              e.stopPropagation()
              onResearch()
            }}
          >
            Купить
          </Button>
          <div className={s.disabledWrapper}>
            <Text className={s.label}>Планируется релиз</Text>
            <Text className={s.date}>01.12.2025</Text>
          </div>
        </div>
      </div>
    </div>
  )
}
