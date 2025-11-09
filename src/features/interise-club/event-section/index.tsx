import { Box, Button, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import IconCalendar from "@/shared/assets/images/interise-group/icon-calendar.svg"
import IconTimer from "@/shared/assets/images/interise-group/icon-history.svg"
import ImageOne from "@/shared/assets/images/interise-group/image-event-1.png"
import ImageTwo from "@/shared/assets/images/interise-group/image-event-2.png"
import ImageThree from "@/shared/assets/images/interise-group/partneruser1.png"
import ImageFour from "@/shared/assets/images/interise-group/partneruser2.png"

import s from "./styles.module.scss"

export const EventSection = () => {
  const { t } = useTranslation("common")
  const matches = useMediaQuery("(max-width: 1040px)")

  return (
    <div className={cx(s.sectionWrapper, "container")}>
      <h3 dangerouslySetInnerHTML={{ __html: t("club.events.title") }} />
      <Text className={s.subtitle}>{t("club.events.select_event")}</Text>
      <div className={s.filters}>
        <Text className={s.filterBtn}>
          {t("club.events.business_brunches")}
        </Text>
        <Text className={s.filterBtn}>
          {t("club.events.invest_breakfasts")}
        </Text>
        <Text className={s.filterBtn}>{t("club.events.lectures")}</Text>
        <Text className={s.filterBtn}>{t("club.events.demo_days")}</Text>
        <Text className={s.filterBtn}>{t("club.events.closed_forums")}</Text>
        <Text className={s.filterBtn}>{t("club.events.wine_tastings")}</Text>
        <Text className={s.filterBtn}>{t("club.events.round_tables")}</Text>
        <Text className={s.filterBtn}>{t("club.events.cigar_evenings")}</Text>
      </div>
      <div className={s.cards}>
        <Text className={s.cardTitle}>{t("club.events.upcoming")}</Text>
        <div className={s.card}>
          <div className={s.cardItem}>
            <Image src={ImageOne} alt={"image-event"} className={s.image} />
            <Box maw={410} p={matches ? "12px" : 0}>
              <Text className={s.itemTitle}>
                {t("club.events.event1.title")}
              </Text>
              <Text className={s.itemText}>
                {t("club.events.expert_description")}
              </Text>
              <Link href={"/"} className={s.itemLink}>
                {t("club.events.more")}
              </Link>
            </Box>
          </div>
          <div className={s.cardItem}>
            <Image src={ImageTwo} alt={"image-event"} className={s.image} />
            <Box maw={410}>
              <Text className={s.itemTitle}>
                {t("club.events.event2.title")}
              </Text>
              <Text className={s.itemText}>
                {t("club.events.expert_description")}
              </Text>
              <Link href={"/"} className={s.itemLink}>
                {t("club.events.more")}
              </Link>
            </Box>
          </div>
          <div className={s.cardItem}>
            <Image src={ImageOne} alt={"image-event"} className={s.image} />
            <Box maw={410}>
              <Text className={s.itemTitle}>
                {t("club.events.event1.title")}
              </Text>
              <Text className={s.itemText}>
                {t("club.events.expert_description")}
              </Text>
              <Link href={"/"} className={s.itemLink}>
                {t("club.events.more")}
              </Link>
            </Box>
          </div>
          <div className={s.cardItem}>
            <Image src={ImageTwo} alt={"image-event"} className={s.image} />
            <Box maw={410}>
              <Text className={s.itemTitle}>
                {t("club.events.event2.title")}
              </Text>
              <Text className={s.itemText}>
                {t("club.events.expert_description")}
              </Text>
              <Link href={"/"} className={s.itemLink}>
                {t("club.events.more")}
              </Link>
            </Box>
          </div>
        </div>
      </div>
      <div className={s.box}>
        <Image src={ImageThree} alt={"image-event"} className={s.image} />
        <div className={s.contentWrapper}>
          <Text className={s.label}>{t("club.events.event_label")}</Text>
          <Text className={s.title}>{t("club.events.demo_day_dmitry")}</Text>
          <Text className={s.description}>{t("club.events.expert_bio")}</Text>
          {matches && (
            <div className={s.eventDate}>
              <Text className={s.date}>
                <IconCalendar />
                {t("club.events.date_october_20")}
              </Text>
              <Text className={s.date}>
                <IconTimer />
                {t("club.events.time_13_00")}
              </Text>
            </div>
          )}
          <Button className={s.btn}>{t("club.events.attend_button")}</Button>
        </div>
        {!matches && (
          <div className={s.eventDate}>
            <Text className={s.date}>
              <IconCalendar />
              {t("club.events.date_october_20")}
            </Text>
            <Text className={s.date}>
              <IconTimer />
              {t("club.events.time_13_00")}
            </Text>
          </div>
        )}
      </div>
      <div className={s.box}>
        <Image src={ImageFour} alt={"image-event"} className={s.image} />
        <div className={s.contentWrapper}>
          <Text className={s.label}>{t("club.events.interview_label")}</Text>
          <Text className={s.title}>{t("club.events.interview_alexey")}</Text>
          <Text className={s.description}>{t("club.events.expert_bio")}</Text>
          <Button className={s.btn}>{t("club.events.attend_button")}</Button>
        </div>
      </div>
      <div className={s.box}>
        <Image src={ImageThree} alt={"image-event"} className={s.image} />
        <div className={s.contentWrapper}>
          <Text className={s.label}>{t("club.events.event_label")}</Text>
          <Text className={s.title}>{t("club.events.demo_day_dmitry")}</Text>
          <Text className={s.description}>{t("club.events.expert_bio")}</Text>
          {matches && (
            <div className={s.eventDate}>
              <Text className={s.date}>
                <IconCalendar />
                {t("club.events.date_october_20")}
              </Text>
              <Text className={s.date}>
                <IconTimer />
                {t("club.events.time_13_00")}
              </Text>
            </div>
          )}
          <Button className={s.btn}>{t("club.events.attend_button")}</Button>
        </div>
        {!matches && (
          <div className={s.eventDate}>
            <Text className={s.date}>
              <IconCalendar />
              {t("club.events.date_october_20")}
            </Text>
            <Text className={s.date}>
              <IconTimer />
              {t("club.events.time_13_00")}
            </Text>
          </div>
        )}
      </div>
    </div>
  )
}
