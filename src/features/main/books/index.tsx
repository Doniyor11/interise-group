import { Carousel } from "@mantine/carousel"
import { Flex, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import ImageBook2 from "@/shared/assets/images/book-image-2.png"
import ImageBook3 from "@/shared/assets/images/book-image-3.png"
import ImageBook from "@/shared/assets/images/book-image.png"
import ImageRight from "@/shared/assets/images/icons/icon-right.svg"

import s from "./styles.module.scss"

export const Books = () => {
  return (
    <div className={s.sectionWrapper}>
      <Flex>
        <Flex direction={"column"} w={"50%"}>
          <Text className={"section-title sm"}>
            От идей к результатам: реальные кейсы
          </Text>
          <Text className={"section-subtitle"}>
            Эффективность нашего подхода лучше всего демонстрируют конкретные
            результаты —
            <span>рост выручки, доли рынка и операционной эффективности.</span>
          </Text>
        </Flex>
        <Flex
          direction={"column"}
          w={"50%"}
          justify={"center"}
          align={"flex-end"}
        >
          <Text
            className={s.infoNumber}
            mb={"13px"}
            fz={"24px"}
            c={"#0076FE"}
            fw={400}
            lts={"-0.48px"}
            lh={"120%"}
          >
            300+ проектов · 30+ стран · 15 отраслей
          </Text>
          <Text
            fz={"16px"}
            c={"#566677"}
            fw={400}
            lts={"-0.32px"}
            lh={"120%"}
            maw={"438px"}
          >
            Здесь представлены проекты из разных стран и отраслей, реализованные
            в тесном партнерстве с клиентами.
          </Text>
        </Flex>
      </Flex>

      <Carousel
        slideGap={16}
        slideSize={480}
        align={"start"}
        height={"auto"}
        slidesToScroll={"auto"}
        classNames={{
          controls: s.carouselControls,
          control: s.carouselControl,
        }}
        nextControlIcon={<ImageRight />}
        previousControlIcon={<ImageRight />}
      >
        <Carousel.Slide>
          <div className={s.card}>
            <Text>
              <b>Страна:</b> Казахстан
            </Text>
            <Text>
              <b>Отрасль: </b>Банковский сектор
            </Text>
            <Image className={s.image} src={ImageBook} alt={"ImageBook"} />
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  )
}
