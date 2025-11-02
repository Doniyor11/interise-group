import { Center } from "@mantine/core"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import ImageInteriseClub from "@/shared/assets/images/interise-group/image-interise-club.png"
import { SearchInput } from "@/shared/ui"
import { Breadcrumbs } from "@/shared/ui/breadcrumbs"

import { DataBreadcrumbs } from "./libs.ts"
import s from "./styles.module.scss"

export const InteriseClubMain = () => {
  return (
    <>
      <div className={s.topSectionWrapper}>
        <div className={cx(s.container, "container")}>
          <div className={s.sectionHead}>
            <Breadcrumbs data={DataBreadcrumbs} className={s.breadcrumbs} />
            <SearchInput />
          </div>
        </div>
        <Center>
          <Image
            src={ImageInteriseClub}
            alt={"image-banner"}
            className={s.image}
          />
        </Center>
      </div>
    </>
  )
}
