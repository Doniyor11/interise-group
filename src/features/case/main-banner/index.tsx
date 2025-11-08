import { Box, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import React from "react"

import IconBusiness from "@/shared/assets/images/interise-group/icon-business.svg"
import IconDocument from "@/shared/assets/images/interise-group/icon-document.svg"
import IconEyeOff from "@/shared/assets/images/interise-group/icon-eye-off.svg"
import IconMap from "@/shared/assets/images/interise-group/icon-map.svg"
import { AnimatedNumber, SearchInput } from "@/shared/ui"
import { Breadcrumbs } from "@/shared/ui/breadcrumbs"

import { DataBreadcrumbs } from "./libs.ts"
import s from "./styles.module.scss"

export const CaseMainBanner = () => {
  const matches = useMediaQuery("(max-width: 1040px)")

  return (
    <>
      <div className={s.topSectionWrapper}>
        <div className={cx(s.container, "container")}>
          <div className={s.sectionHead}>
            <Breadcrumbs data={DataBreadcrumbs} />
            {!matches && <SearchInput />}
          </div>
          <h1>Кейсы</h1>
        </div>
      </div>
      <div className={cx(s.sectionWrapper, "container")}>
        <div className={s.stats}>
          <Text className={s.sectionTitle}>
            <span>От идей к результатам:</span> <br /> реальные кейсы
          </Text>
          <div className={s.counts}>
            <div className={s.countsItem}>
              <div className={s.icon}>
                <IconDocument />
              </div>
              <Box>
                <Text className={s.count}>
                  <AnimatedNumber value={300} />+
                </Text>
                <Text className={s.countLabel}>проектов</Text>
              </Box>
            </div>
            <div className={s.line} />
            <div className={s.countsItem}>
              <div className={s.icon}>
                <IconMap />
              </div>
              <Box>
                <Text className={s.count}>
                  <AnimatedNumber value={31} />
                </Text>
                <Text className={s.countLabel}>страна</Text>
              </Box>
            </div>
            <div className={s.line} />
            <div className={s.countsItem}>
              <div className={s.icon}>
                <IconBusiness />
              </div>
              <Box>
                <Text className={s.count}>
                  <AnimatedNumber value={15} />
                </Text>
                <Text className={s.countLabel}>отраслей</Text>
              </Box>
            </div>
          </div>
        </div>
        <div className={s.box}>
          <div className={s.boxLeft}>
            <Text className={s.title}>
              Эффективность нашего подхода лучше всего демонстрируют конкретные
              результаты{" "}
              <span>
                — рост выручки, доли рынка и операционной эффективности.
              </span>
            </Text>
            <Text className={s.text}>
              Здесь представлены проекты, которыми мы гордимся, реализованные в
              партнерстве с сильными командами топовых игроков на российском и
              международном рынках.
            </Text>
          </div>
          <div className={s.boxRight}>
            <IconEyeOff />
            <Text className={s.text}>
              Мы уважаем договоренности со своими клиентами и тщательно
              соблюдаем обязательства о неразглашении информации, потому не
              показываем названий компаний и брендов на сайте.
            </Text>
          </div>
        </div>
      </div>
    </>
  )
}
