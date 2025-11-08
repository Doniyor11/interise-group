import { Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import { DataBreadcrumbs } from "@/features/about/main-banner/libs.ts"

import ImageAbout from "@/shared/assets/images/interise-group/image-about.png"
import { SearchInput } from "@/shared/ui"
import { Breadcrumbs } from "@/shared/ui/breadcrumbs"

import s from "./styles.module.scss"

export const AboutMainBanner = () => {
  const matches = useMediaQuery("(max-width: 1040px)")

  return (
    <>
      <div className={s.topSectionWrapper}>
        <div className={cx(s.container, "container")}>
          <div className={s.sectionHead}>
            <Breadcrumbs data={DataBreadcrumbs} />
            {!matches && <SearchInput />}
          </div>
          <h1>Кто мы?</h1>
        </div>
      </div>
      <div className={cx(s.sectionWrapper, "container")}>
        <div className={s.head}>
          <Text>
            <span>InteriseGroup</span> - это группа компаний, собранная
            глобальными экспертами, практиками и консультантами для обеспечения
            внедрения выигрышных на рынке системных изменений, проектов и
            стратегий.
          </Text>
          <h3>
            Мы работаем в 31 стране и охватываем ключевые регионы, включая{" "}
            <span>СНГ, Европу, MENA, BRICS, США, Азию и Ближний Восток.</span>
          </h3>
        </div>
        <Image src={ImageAbout} alt={"about-image"} className={s.image} />
      </div>
    </>
  )
}
