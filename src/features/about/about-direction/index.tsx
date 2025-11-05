import { Box, Button, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import IconOne from "@/shared/assets/images/about/icon-about-1.svg"
import IconTwo from "@/shared/assets/images/about/icon-about-2.svg"
import IconThree from "@/shared/assets/images/about/icon-about-3.svg"
import IconFour from "@/shared/assets/images/about/icon-about-4.svg"
import ImageBanner from "@/shared/assets/images/interise-group/image-about-2.png"
import { onLinkClick } from "@/shared/libs/scroll.ts"

import s from "./styles.module.scss"

export const AboutDirection = () => {
  return (
    <>
      <Box className={"container"}>
        <div className={s.sectionWrapper}>
          <Box className={s.head}>
            <h3>В своей работе мы объединяем четыре ключевых направления:</h3>
            <Text>Направления работы</Text>
          </Box>
          <div className={s.cards}>
            <div className={s.card}>
              <div className={s.icon}>
                <IconOne />
              </div>
              <Text>
                Цифровую <br /> трансформацию
              </Text>
            </div>
            <div className={s.card}>
              <div className={s.icon}>
                <IconTwo />
              </div>
              <Text>Инвестиции и финансирование</Text>
            </div>
            <div className={s.card}>
              <div className={s.icon}>
                <IconThree />
              </div>
              <Text>
                Маркетинг <br /> и продвижение
              </Text>
            </div>
            <div className={s.card}>
              <div className={s.icon}>
                <IconFour />
              </div>
              <Text>Масштабирование бизнеса и международную экспансию</Text>
            </div>
          </div>
        </div>
        <div className={s.box}>
          <Image src={ImageBanner} alt={"image-banner"} className={s.image} />
          <div className={s.boxRight}>
            <h3>
              InteriseGroup{" "}
              <span>ведёт проекты в десятках стран и отраслей</span>, от
              финансового сектора и телекоммуникаций до медицины и недвижимости.
            </h3>
            <Text className={s.text}>
              Мы сопровождаем бизнес на всех стадиях: от экспресс-диагностики и
              поиска точек роста до разработки стратегии, подготовки к сделкам и
              реализации крупных изменений. <br />
              <br />
              Такой подход позволяет комплексно поддерживать компании — от
              модернизации процессов до вывода продуктов на новые рынки.
            </Text>
            <Button className={s.btn} onClick={() => onLinkClick("contacts")}>
              Обсудить проект
            </Button>
          </div>
        </div>
        <div className={s.bannerWrapper}>
          <h3>
            В группе InteriseGroup присутствует <span>отдельный актив</span>
          </h3>
          <Text className={s.text}>
            Компания специализируется на формировании отчетности, построении и
            разработке dashboard, системах мониторинга и контроля, на базе
            лучших мировых практик.
          </Text>
          <Button className={s.btn} onClick={() => onLinkClick("contacts")}>
            Заказать отчет
          </Button>
        </div>
      </Box>
    </>
  )
}
