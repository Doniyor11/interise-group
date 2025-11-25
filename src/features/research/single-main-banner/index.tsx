import { Button, Text } from "@mantine/core"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import React from "react"

import { onLinkClick } from "@/shared/libs/scroll.ts"
import { Breadcrumbs } from "@/shared/ui/breadcrumbs"

import { useBreadcrumbs } from "./libs.ts"
import s from "./styles.module.scss"

export const SingleResearchBanner = () => {
  const { t } = useTranslation("common")
  const breadcrumbs = useBreadcrumbs()

  return (
    <>
      <div className={s.topSectionWrapper}>
        <div className={cx(s.container, "container")}>
          <div className={s.sectionHead}>
            <Breadcrumbs data={breadcrumbs} />
          </div>
          <h1>{t("breadcrumbs.research_page")}</h1>
        </div>
      </div>
      <div className={cx(s.sectionWrapper)}>
        <div className={cx(s.container, "container")}>
          <Text
            className={s.title}
            dangerouslySetInnerHTML={{
              __html: t("research.single_banner.title"),
            }}
          />
          <Text
            className={s.subtitle}
            dangerouslySetInnerHTML={{
              __html: t("research.single_banner.subtitle"),
            }}
          />
          <Button className={s.btn} onClick={() => onLinkClick("contacts")}>
            {t("research.single_banner.demo_button")}
          </Button>
        </div>
      </div>
    </>
  )
}
