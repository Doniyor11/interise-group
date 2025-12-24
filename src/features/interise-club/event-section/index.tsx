import { Carousel } from "@mantine/carousel"
import { Box, Button, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import MarkdownPreview from "@uiw/react-markdown-preview"
import cx from "clsx"
import dayjs from "dayjs"
import "dayjs/locale/en"
import "dayjs/locale/ru"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import React from "react"

import { useGetUpcomingEventsQuery } from "@/entities/events/query.ts"
import { IGetUpcomingEvents } from "@/entities/events/types.ts"

import IconCalendar from "@/shared/assets/images/interise-group/icon-calendar.svg"
import IconTimer from "@/shared/assets/images/interise-group/icon-history.svg"
import IconLocation from "@/shared/assets/images/interise-group/location-outline.svg"
import { onLinkClick } from "@/shared/libs/scroll.ts"

import s from "./styles.module.scss"

export const EventSection = () => {
  const { t } = useTranslation("common")

  return (
    <div className={cx(s.sectionWrapper, "container")}>
      <h3
        data-aos="fade-up"
        dangerouslySetInnerHTML={{ __html: t("club.events.title") }}
      />
      <Text data-aos="fade-up" className={s.subtitle}>
        {t("club.events.subtitle")}
      </Text>

      <FutureEvents />

      <PastEvents />
    </div>
  )
}

export const FutureEvents = () => {
  const { t, lang } = useTranslation("common")
  const matches = useMediaQuery("(max-width: 1040px)")

  const { data } = useGetUpcomingEventsQuery("upcoming")

  const timeFormat = lang === "en" ? "hh:mm A" : "HH:mm"

  if (data?.length === 0) return null
  return (
    <Box data-aos="fade-up">
      <Text className={s.boxTitle}>{t("club.events.upcoming_events")}</Text>
      <Carousel
        slideSize={"100%"}
        slideGap={{ base: 0, sm: "md" }}
        loop
        align="start"
        withControls
      >
        {data?.map((item: IGetUpcomingEvents, i: number) => (
          <Carousel.Slide key={i}>
            <div className={s.box}>
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
                  <MarkdownPreview
                    className={s.description}
                    source={item?.description}
                  />
                  {matches && (
                    <div className={s.eventDate}>
                      <Text className={s.date}>
                        <IconCalendar />
                        {dayjs(item?.date).format("DD MMMM YYYY")}
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
                  {item.disable_button && (
                    <Button
                      className={s.btn}
                      onClick={() => onLinkClick("eventForm")}
                    >
                      {t("club.events.attend_button")}
                    </Button>
                  )}
                </div>
                {!matches && (
                  <div className={s.eventDate}>
                    <Text className={s.date}>
                      <IconCalendar />
                      {dayjs(item?.date).format("DD MMMM YYYY")}
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
              </Flex>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  )
}

export const PastEvents = () => {
  const { t, lang } = useTranslation("common")
  const matches = useMediaQuery("(max-width: 1040px)")

  const { data } = useGetUpcomingEventsQuery("past")

  const timeFormat = lang === "en" ? "hh:mm A" : "HH:mm"

  if (data?.length === 0) return null
  return (
    <Box data-aos="fade-up">
      <Text className={s.boxTitle}>{t("club.events.past_events")}</Text>
      <Carousel
        slideSize={"100%"}
        slideGap={{ base: 0, sm: "md" }}
        loop
        align="start"
        withControls
      >
        {data?.map((item: IGetUpcomingEvents, i: number) => (
          <Carousel.Slide key={i}>
            <div className={s.box}>
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
                  <MarkdownPreview
                    className={s.description}
                    source={item?.description}
                  />
                  {matches && (
                    <div className={s.eventDate}>
                      <Text className={s.date}>
                        <IconCalendar />
                        {dayjs(item?.date).format("DD MMMM YYYY")}
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
                  {item.disable_button && (
                    <Button
                      className={s.btn}
                      onClick={() => onLinkClick("eventForm")}
                    >
                      {t("club.events.attend_button")}
                    </Button>
                  )}
                </div>
                {!matches && (
                  <div className={s.eventDate}>
                    <Text className={s.date}>
                      <IconCalendar />
                      {dayjs(item?.date).format("DD MMMM YYYY")}
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
              </Flex>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  )
}
