import { Button, Text } from "@mantine/core"
import cx from "clsx"
import React from "react"

import { onLinkClick } from "@/shared/libs/scroll.ts"
import { SearchInput } from "@/shared/ui"
import { Breadcrumbs } from "@/shared/ui/breadcrumbs"

import { DataBreadcrumbs } from "./libs.ts"
import s from "./styles.module.scss"

export const SingleResearchBanner = () => {
  return (
    <>
      <div className={s.topSectionWrapper}>
        <div className={cx(s.container, "container")}>
          <div className={s.sectionHead}>
            <Breadcrumbs data={DataBreadcrumbs} />
            <SearchInput />
          </div>
          <h1>Страница исследования</h1>
        </div>
      </div>
      <div className={cx(s.sectionWrapper)}>
        <div className={cx(s.container, "container")}>
          <Text className={s.title}>
            Посмотрите на свой банк <br /> <span>глазами ваших клиентов</span>
          </Text>
          <Text className={s.subtitle}>
            Новое исследование Customer Choice Index показывает, что на самом
            деле происходит на пути <br /> клиентов — как новых, так и
            существующих. Узнайте, где вы <br /> теряете лояльность и как
            опередить конкурентов.
          </Text>
          <Button className={s.btn} onClick={() => onLinkClick("contacts")}>
            Получить демо-доступ
          </Button>
        </div>
      </div>
    </>
  )
}
