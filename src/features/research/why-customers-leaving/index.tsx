import { Text } from "@mantine/core"
import cx from "clsx"
import React from "react"

import s from "./styles.module.scss"

export const WhyCustomersLeaving = () => {
  return (
    <>
      <div className={cx(s.sectionWrapper, s.newTerritories, "container")}>
        <div className={s.box}>
          <h2>Новые территории</h2>

          <div className={s.cards}>
            <div className={s.card}>
              <Text className={s.cardText}>Customer Choice Index</Text>
              <Text className={s.cardTitle}>
                Стал доступен для новой страны: <br />
                <span>Узбекистан</span>
              </Text>
            </div>
            <div className={s.card}>
              <Text className={s.cardText}>Customer Choice Index</Text>
              <Text className={s.cardTitle}>
                Будет доступен до конца года для страны: <br />
                <span>Казахстан</span>
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className={cx(s.sectionWrapper, "container")}>
        <h2>
          <span>Почему клиенты уходят</span>, так и не начав с вами работать?
        </h2>
        <Text className={s.subtitle}>
          Вы вкладываете миллионы в маркетинг и цифровые каналы, но конверсия не
          растет. Проблема <br /> скрыта в разрывах клиентского пути, которые
          невозможно увидеть изнутри.
        </Text>
        <div className={s.cards}>
          <div className={s.card}>
            <Text className={s.cardTitle}>
              Невидимые <span>барьеры</span>
            </Text>
            <Text className={s.cardText}>
              Клиент сталкивается с трудностями на сайте, в колл-центре или
              отделении, и вы об этом даже не узнаете.
            </Text>
          </div>
          <div className={s.card}>
            <Text className={s.cardTitle}>
              Разрыв между <span>Online и Offline</span>
            </Text>
            <Text className={s.cardText}>
              Идеальный цифровой опыт рушится из-за некомпетентного сотрудника в
              отделении. И наоборот.
            </Text>
          </div>
          <div className={s.card}>
            <Text className={s.cardTitle}>
              Непонимание <span>конкурентов</span>
            </Text>
            <Text className={s.cardText}>
              Вы не знаете, почему клиенты на самом деле выбирают другие банки и
              в чем их реальное преимущество.
            </Text>
          </div>
        </div>
      </div>
    </>
  )
}
