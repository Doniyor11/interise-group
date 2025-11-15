import {
  Box,
  Button,
  Popover,
  PopoverDropdown,
  PopoverTarget,
  Text,
} from "@mantine/core"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import { useRouter } from "next/router"
import React, { useState } from "react"

import { getMonthsData } from "@/features/research/research-types/libs.ts"

import IconArrow from "@/shared/assets/images/interise-group/icon-arrow-down-2.svg"
import IconCalendar from "@/shared/assets/images/interise-group/icon-calendar-2.svg"
import ImageOne from "@/shared/assets/images/interise-group/image-research-3.png"
import ImageTwo from "@/shared/assets/images/interise-group/image-research-4.png"
import ImageThree from "@/shared/assets/images/interise-group/image-research-5.png"

import s from "./styles.module.scss"

const cardImages = [ImageOne, ImageTwo, ImageThree]

export const ResearchTypes = () => {
  const { t } = useTranslation("common")
  const router = useRouter()
  const MonthsData = getMonthsData(t)
  const [isOpen, setIsOpen] = useState(false)
  const [selectMonth, setSelectMonth] = useState("1")
  // const onResearch = () => {
  //   onLinkClick("contacts")
  // }
  return (
    <div className={cx(s.sectionWrapper, "container")}>
      <div className={s.filters}>
        <Text
          className={s.title}
          dangerouslySetInnerHTML={{ __html: t("research.types.title") }}
        />
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
            <Text className={s.cardTitle}>
              {t("research.card.index_research")}
            </Text>
            <Text className={s.description}>
              {t("research.card.description")}
            </Text>
          </Box>
        </div>
        <div className={s.card} onClick={() => router.push("/research/1")}>
          <Box>
            <Image src={ImageTwo} alt={"image-research"} className={s.image} />
            <Text className={s.cardTitle}>
              {t("research.card.index_research2")}
            </Text>
            <Text className={s.description}>
              {t("research.card.description")}
            </Text>
          </Box>
        </div>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={s.card}>
            <Box>
              <Image
                src={cardImages[i] || ImageThree}
                alt={"image-research"}
                className={s.image}
              />
              <Text className={s.cardTitle}>
                {t("research.card.index_research")}
              </Text>
              <Text className={s.description}>
                {t("research.card.description")}
              </Text>
            </Box>
            {/*<Button*/}
            {/*  className={s.btn}*/}
            {/*  onClick={(e) => {*/}
            {/*    e.stopPropagation()*/}
            {/*    onResearch()*/}
            {/*  }}*/}
            {/*>*/}
            {/*  {t("research.card.buy_button")}*/}
            {/*</Button>*/}
            <div className={s.disabledWrapper}>
              <Text className={s.label}>
                {t("research.card.release_planned")}
              </Text>
              <Text className={s.date}>30.12.25</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
