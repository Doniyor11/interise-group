import { Box, Button, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
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
  const matches = useMediaQuery("(max-width: 1040px)")

  return (
    <div className={cx(s.sectionWrapper, "container")}>
      <h3>
        InteriseClub — <span>площадка для общения</span> <br /> и обмена опытом
        практиков
      </h3>
      <Text className={s.subtitle}>Выберите мероприятие:</Text>
      <div className={s.filters}>
        <Text className={s.filterBtn}>Деловые бранчи</Text>
        <Text className={s.filterBtn}>Инвест-завтраки</Text>
        <Text className={s.filterBtn}>Лекции</Text>
        <Text className={s.filterBtn}>Демо-дни</Text>
        <Text className={s.filterBtn}>Закрытые форумы</Text>
        <Text className={s.filterBtn}>Винные дегустации</Text>
        <Text className={s.filterBtn}>Круглые столы</Text>
        <Text className={s.filterBtn}>Сигарные вечера</Text>
      </div>
      <div className={s.cards}>
        <Text className={s.cardTitle}>Предстоящие мероприятия:</Text>
        <div className={s.card}>
          <div className={s.cardItem}>
            <Image src={ImageOne} alt={"image-event"} className={s.image} />
            <Box maw={410} p={matches ? "12px" : 0}>
              <Text className={s.itemTitle}>Мероприятие 1</Text>
              <Text className={s.itemText}>
                Эксперт в стратегии и трансформации, управлении системно
                значимыми проектами и изменениями
              </Text>
              <Link href={"/"} className={s.itemLink}>
                Подробнее &gt;
              </Link>
            </Box>
          </div>
          <div className={s.cardItem}>
            <Image src={ImageTwo} alt={"image-event"} className={s.image} />
            <Box maw={410}>
              <Text className={s.itemTitle}>Мероприятие 2</Text>
              <Text className={s.itemText}>
                Эксперт в стратегии и трансформации, управлении системно
                значимыми проектами и изменениями
              </Text>
              <Link href={"/"} className={s.itemLink}>
                Подробнее &gt;
              </Link>
            </Box>
          </div>
          <div className={s.cardItem}>
            <Image src={ImageOne} alt={"image-event"} className={s.image} />
            <Box maw={410}>
              <Text className={s.itemTitle}>Мероприятие 1</Text>
              <Text className={s.itemText}>
                Эксперт в стратегии и трансформации, управлении системно
                значимыми проектами и изменениями
              </Text>
              <Link href={"/"} className={s.itemLink}>
                Подробнее &gt;
              </Link>
            </Box>
          </div>
          <div className={s.cardItem}>
            <Image src={ImageTwo} alt={"image-event"} className={s.image} />
            <Box maw={410}>
              <Text className={s.itemTitle}>Мероприятие 2</Text>
              <Text className={s.itemText}>
                Эксперт в стратегии и трансформации, управлении системно
                значимыми проектами и изменениями
              </Text>
              <Link href={"/"} className={s.itemLink}>
                Подробнее &gt;
              </Link>
            </Box>
          </div>
        </div>
      </div>
      <div className={s.box}>
        <Image src={ImageThree} alt={"image-event"} className={s.image} />
        <div className={s.contentWrapper}>
          <Text className={s.label}>Мероприятие:</Text>
          <Text className={s.title}>
            Демо-день с Дмитрием Вакиным Масштабирование и Go-Global
          </Text>
          <Text className={s.description}>
            Эксперт в стратегии и трансформации, управлении системно значимыми
            проектами и изменениями. Имеет опыт формирования
            кросс-индустриальных стратегий и O2O-партнерств в соответствии с
            концепцией Industry 4.0 (крупнейшие кейсы в РФ на стыке банк+ритейл,
            банк+телеком).
          </Text>
          {matches && (
            <div className={s.eventDate}>
              <Text className={s.date}>
                <IconCalendar />
                20 октября
              </Text>
              <Text className={s.date}>
                <IconTimer />в 13:00
              </Text>
            </div>
          )}
          <Button className={s.btn}>Посетить мероприятие</Button>
        </div>
        {!matches && (
          <div className={s.eventDate}>
            <Text className={s.date}>
              <IconCalendar />
              20 октября
            </Text>
            <Text className={s.date}>
              <IconTimer />в 13:00
            </Text>
          </div>
        )}
      </div>
      <div className={s.box}>
        <Image src={ImageFour} alt={"image-event"} className={s.image} />
        <div className={s.contentWrapper}>
          <Text className={s.label}>Интервью:</Text>
          <Text className={s.title}>
            Алексей Веретенов в гостях у Оскара Хартмана о цифровой
            трансформации банков
          </Text>
          <Text className={s.description}>
            Эксперт в стратегии и трансформации, управлении системно значимыми
            проектами и изменениями. Имеет опыт формирования
            кросс-индустриальных стратегий и O2O-партнерств в соответствии с
            концепцией Industry 4.0 (крупнейшие кейсы в РФ на стыке банк+ритейл,
            банк+телеком).
          </Text>
          <Button className={s.btn}>Посетить мероприятие</Button>
        </div>
      </div>
      <div className={s.box}>
        <Image src={ImageThree} alt={"image-event"} className={s.image} />
        <div className={s.contentWrapper}>
          <Text className={s.label}>Мероприятие:</Text>
          <Text className={s.title}>
            Демо-день с Дмитрием Вакиным Масштабирование и Go-Global
          </Text>
          <Text className={s.description}>
            Эксперт в стратегии и трансформации, управлении системно значимыми
            проектами и изменениями. Имеет опыт формирования
            кросс-индустриальных стратегий и O2O-партнерств в соответствии с
            концепцией Industry 4.0 (крупнейшие кейсы в РФ на стыке банк+ритейл,
            банк+телеком).
          </Text>
          {matches && (
            <div className={s.eventDate}>
              <Text className={s.date}>
                <IconCalendar />
                20 октября
              </Text>
              <Text className={s.date}>
                <IconTimer />в 13:00
              </Text>
            </div>
          )}
          <Button className={s.btn}>Посетить мероприятие</Button>
        </div>
        {!matches && (
          <div className={s.eventDate}>
            <Text className={s.date}>
              <IconCalendar />
              20 октября
            </Text>
            <Text className={s.date}>
              <IconTimer />в 13:00
            </Text>
          </div>
        )}
      </div>
    </div>
  )
}
