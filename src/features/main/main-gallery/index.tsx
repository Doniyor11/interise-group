import { Badge, Box, Button, Flex, Text } from "@mantine/core"
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
  return (
    <div className={s.sectionWrapper} id={"navbar4"}>
      <div className={"container"}>
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          mb={"24px"}
        >
          <Text className={"section-title sm"} c={"#8696A9"}>
            Мероприятия
          </Text>
          <Text className={"section-subtitle"} c={"#fff"} ta="center">
            InteriseClub — <span> площадка для общения</span> <br /> и обмена
            опытом практиков.
          </Text>
        </Flex>
        <Flex gap={"30px"}>
          <Box w={"50%"}>
            <Text
              fz={"16px"}
              c={"#798B9E"}
              lh={"120%"}
              lts={"-0.32px"}
              mb={"32px"}
            >
              Сообщество небезразличных управленцев, сооснователей, акционеров и
              топ-менеджеров из разных индустрий и географий, которых объединяет
              желание работать на результат, обмениваться опытом и вместе
              создавать реальные бизнес-изменения.
            </Text>
            <Text
              fz={"16px"}
              c={"#798B9E"}
              lh={"120%"}
              lts={"-0.32px"}
              mb={"10px"}
            >
              Типы мероприятий:
            </Text>
            <Flex mb={"32px"} wrap={"wrap"} gap={"1px"} w={"475px"}>
              {badgeData.map((item) => (
                <Badge className={s.badge} key={item.id}>
                  {item.title}
                </Badge>
              ))}
            </Flex>
            <Button
              bg={"#0076FE"}
              color={"#FFF"}
              w={"192px"}
              radius={8}
              h={"44px"}
            >
              Вступить в клуб
            </Button>
          </Box>
          <Flex w={"50%"} direction={"column"}>
            <Text
              fz={"16px"}
              c={"#798B9E"}
              lh={"120%"}
              lts={"-0.32px"}
              mb={"10px"}
            >
              В клуб входят CEO, акционеры, члены советов директоров и другие
              лидеры, разделяющие ценности партнёрства и практического подхода.
              Регулярные встречи и мероприятия проходят в разных странах и
              посвящены самым разным отраслям бизнеса: дискуссионные панели,
              закрытые сессии и практические воркшопы. На сайте доступна форма
              для подачи заявки на вступление в клуб и участия в мероприятиях.
            </Text>
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
