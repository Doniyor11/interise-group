import cx from "clsx"
import React from "react"

import { Breadcrumbs } from "@/shared/ui/breadcrumbs"

import { useBreadcrumbs } from "./libs.ts"
import s from "./styles.module.scss"

export const InteriseClubMain = () => {
  const breadcrumbs = useBreadcrumbs()
  return (
    <>
      <div className={s.topSectionWrapper}>
        <div data-aos="zoom-in-up" className={cx(s.container, "container")}>
          <Breadcrumbs data={breadcrumbs} />
          <h1>Interise Club</h1>
        </div>
      </div>
    </>
  )
}
