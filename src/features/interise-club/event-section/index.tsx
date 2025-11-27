import { Box, Button, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import dayjs from "dayjs"
import "dayjs/locale/en"
import "dayjs/locale/ru"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import {
  useGetEventsQuery,
  useGetUpcomingEventsQuery,
} from "@/entities/events/query.ts"
import { IGetEvents, IGetUpcomingEvents } from "@/entities/events/types.ts"

import IconCalendar from "@/shared/assets/images/interise-group/icon-calendar.svg"
import IconTimer from "@/shared/assets/images/interise-group/icon-history.svg"
import IconLocation from "@/shared/assets/images/interise-group/location-outline.svg"
import { onLinkClick } from "@/shared/libs/scroll.ts"

import s from "./styles.module.scss"

export const EventSection = () => {
  const { t, lang } = useTranslation("common")
  const matches = useMediaQuery("(max-width: 1040px)")

  const { data: events } = useGetEventsQuery()
  const { data: upcomingEvents } = useGetUpcomingEventsQuery()

  const timeFormat = lang === "en" ? "hh:mm A" : "HH:mm"

  if (events?.length === 0 || upcomingEvents?.length === 0) return null

  return (
    <div className={cx(s.sectionWrapper, "container")}>
      <h3
        data-aos="fade-up"
        dangerouslySetInnerHTML={{ __html: t("club.events.title") }}
      />
      <Text data-aos="fade-up" className={s.subtitle}>
        {t("club.events.subtitle")}
      </Text>
      <div className={s.cards}>
        <Text className={s.cardTitle}>{t("club.events.upcoming")}</Text>
        <div className={s.card}>
          {events?.map((item: IGetEvents, i: number) => (
            <div key={i} data-aos="zoom-in-up" className={s.cardItem}>
              <Image
                width={154}
                height={152}
                src={item?.image}
                alt={item?.title}
                className={s.image}
                unoptimized
              />
              <Box maw={410} p={matches ? "12px" : 0}>
                <Text className={s.itemTitle}>{item?.title}</Text>
                <Text className={s.itemText}>{item?.description}</Text>
                <Link href={item?.url} className={s.itemLink}>
                  {t("club.events.more")}
                </Link>
              </Box>
            </div>
          ))}
        </div>
      </div>

      {upcomingEvents?.map((item: IGetUpcomingEvents, i: number) => (
        <div key={i} data-aos="fade-up" className={s.box}>
          <Image
            width={390}
            height={268}
            unoptimized
            src={item?.image}
            alt={item?.title}
            className={s.image}
          />
          <Flex gap={16}>
            <div className={s.contentWrapper}>
              <Text className={s.label}>{item?.label}</Text>
              <Text className={s.title}>{item?.title}</Text>
              <Text className={s.description}>{item?.description}</Text>
              {matches && (
                <div className={s.eventDate}>
                  <Text className={s.date}>
                    <IconCalendar />
                    {dayjs(item?.date).format("DD MMMM")}
                  </Text>
                  <Text className={s.date}>
                    <IconTimer />
                    {t("club.events.time") +
                      dayjs(item?.date).format(timeFormat)}
                  </Text>
                  <Text className={s.date}>
                    <IconLocation />
                    {item?.location}
                  </Text>
                </div>
              )}
              <Button
                className={s.btn}
                onClick={() => onLinkClick("eventForm")}
              >
                {t("club.events.attend_button")}
              </Button>
            </div>
            {!matches && (
              <div className={s.eventDate}>
                <Text className={s.date}>
                  <IconCalendar />
                  {dayjs(item?.date).format("DD MMMM")}
                </Text>
                <Text className={s.date}>
                  <IconTimer />
                  {t("club.events.time") + dayjs(item?.date).format(timeFormat)}
                </Text>
                <Text className={s.date}>
                  <IconLocation />
                  {item?.location}
                </Text>
              </div>
            )}
          </Flex>
        </div>
      ))}
    </div>
  )
}
