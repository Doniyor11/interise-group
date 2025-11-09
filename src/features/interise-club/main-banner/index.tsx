import { Center } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import ImageInteriseClub from "@/shared/assets/images/interise-group/image-interise-club.png"
import { SearchInput } from "@/shared/ui"
import { Breadcrumbs } from "@/shared/ui/breadcrumbs"

import { useBreadcrumbs } from "./libs.ts"
import s from "./styles.module.scss"

export const InteriseClubMain = () => {
  const breadcrumbs = useBreadcrumbs()
  const matches = useMediaQuery("(max-width: 1040px)")
  return (
    <>
      <div className={s.topSectionWrapper}>
        <div className={cx(s.container, "container")}>
          <div className={s.sectionHead}>
            <Breadcrumbs data={breadcrumbs} className={s.breadcrumbs} />
            {!matches && <SearchInput />}
          </div>
        </div>
        <Center className={s.imageWrapper}>
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
