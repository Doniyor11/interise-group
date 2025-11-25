import { Center } from "@mantine/core"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import ImageInteriseClub from "@/shared/assets/images/interise-group/image-interise-club.png"
import { Breadcrumbs } from "@/shared/ui/breadcrumbs"

import { useBreadcrumbs } from "./libs.ts"
import s from "./styles.module.scss"

export const InteriseClubMain = () => {
  const breadcrumbs = useBreadcrumbs()
  return (
    <>
      <div className={s.topSectionWrapper}>
        <div className={cx(s.container, "container")}>
          <div className={s.sectionHead}>
            <Breadcrumbs data={breadcrumbs} className={s.breadcrumbs} />
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
