import { Badge, Box, Button, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Image from "next/image"
import React from "react"

import ImageBanner from "@/shared/assets/images/interise-group/club.png"

import s from "./styles.module.scss"

const badgeData = [
  { id: 1, title: "Деловые бранчи" },
  { id: 2, title: "Инвест-завтраки" },
  { id: 3, title: "Лекции" },
  { id: 4, title: "Демо-дни" },
  { id: 5, title: "Закрытые форумы" },
  { id: 6, title: "Винные дегустации" },
  { id: 7, title: "Круглые столы" },
  { id: 8, title: "Сигарные вечера" },
]

export const MainGallery = () => {
  const matches = useMediaQuery("(max-width: 1040px)")

  return (
    <div className={s.sectionWrapper} id={"navbar4"}>
      <div className={"container"}>
        <Flex
          direction={"column"}
          justify={"center"}
          align={matches ? "flex-start" : "center"}
          mb={matches ? "0" : "24px"}
        >
          <Text
            className={s.clubTitle}
            c={"#fff"}
            ta={matches ? "left" : "center"}
          >
            InteriseClub — площадка для общения <br /> и обмена опытом
            практиков.
          </Text>
          <Text className={s.clubInfoTitle} c={"#8696A9"} mb={"24px"}>
            Типы мероприятий:
          </Text>
          <Flex
            mb={"32px"}
            wrap={"wrap"}
            gap={"1px"}
            w={matches ? "100%" : "750px"}
            justify={matches ? "flex-start" : "center"}
          >
            {badgeData.map((item) => (
              <Badge className={s.badge} key={item.id}>
                {item.title}
              </Badge>
            ))}
          </Flex>
        </Flex>
        <Flex
          gap={"30px"}
          direction={matches ? "column-reverse" : "row"}
          p={matches ? "0" : "0"}
        >
          <Box w={matches ? "100%" : "50%"}>
            <Text
              fz={"16px"}
              c={"#798B9E"}
              lh={"120%"}
              lts={"-0.32px"}
              mb={"32px"}
            >
              Участники клуба – основатели, акционеры, CEO и топ-менеджеры из
              разных стран и индустрий. Практики, которые работают на результат
              и формируют стратегическую повестку. Встречи клуба проходят в
              разных странах и создают среду для идей, решений и партнерств,
              которые влияют на будущее бизнеса.
            </Text>

            <Text
              fz={"16px"}
              c={"#798B9E"}
              lh={"120%"}
              lts={"-0.32px"}
              mb={"32px"}
            >
              Подайте заявку на участие в закрытых мероприятиях клуба.
            </Text>
            <Button
              bg={"#0076FE"}
              color={"#FFF"}
              w={matches ? "100%" : "fit-content"}
              radius={8}
              h={"44px"}
            >
              Вступить в клуб
            </Button>
          </Box>
          <Flex w={matches ? "100%" : "50%"} direction={"column"}>
            <Box className={s.clubImage}>
              <Image
                src={ImageBanner}
                alt={"Interise Club"}
                width={640}
                height={203}
              />
            </Box>
          </Flex>
        </Flex>
      </div>
    </div>
  )
}
