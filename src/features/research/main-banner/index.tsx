import { Box, Text } from "@mantine/core"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import ImageOne from "@/shared/assets/images/interise-group/image-research-2.png"
import { SearchInput } from "@/shared/ui"
import { Breadcrumbs } from "@/shared/ui/breadcrumbs"

import { DataBreadcrumbs } from "./libs.ts"
import s from "./styles.module.scss"

export const ResearchMainBanner = () => {
  return (
    <>
      <div className={s.topSectionWrapper}>
        <div className={cx(s.container, "container")}>
          <div className={s.sectionHead}>
            <Breadcrumbs data={DataBreadcrumbs} />
            <SearchInput />
          </div>
          <h1>Исследования</h1>
        </div>
      </div>
      <div className={cx(s.sectionWrapper, "container")}>
        <Box>
          <Text className={s.title}>
            InteriseGroup проводит{" "}
            <span>
              комплексные исследования рынков, отраслей и целевых аудиторий
            </span>{" "}
            — включая глубинные мотивы и реальные триггеры поведения.
          </Text>
          <Text className={s.subtitle}>
            Мы используем индивидуальный подход и подбираем инструменты под
            конкретную задачу клиента. Эти исследования помогают компаниям
            принимать взвешенные стратегические решения на всех этапах развития
            — от поиска точек роста и тестирования гипотез до вывода новых
            продуктов и масштабирования бизнеса.
          </Text>
        </Box>
        <Image src={ImageOne} alt={"image-research"} className={s.image} />
      </div>
    </>
  )
}
