import { Box, Flex, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import { EmailForm } from "@/features/contact-forms"

import Imaga1 from "@/shared/assets/images/interise-group/formbg.png"
import IconLogo from "@/shared/assets/images/interise-group/logo.svg"
import IconMap from "@/shared/assets/images/interise-group/map.png"
import IconTg from "@/shared/assets/images/interise-group/tg.svg"
import IconVk from "@/shared/assets/images/interise-group/vk.svg"
import IconYoutube from "@/shared/assets/images/interise-group/yu.svg"

import s from "./index.module.scss"

export const Contacts = () => {
  return (
    <div className={s.sectionWrapper}>
      <div className={"container"}>
        <div className={s.box}>
          <Text className={"section-title"} ta={"center"}>
            Партнёры
          </Text>
          <Text
            className={"section-subtitle"}
            c={"#fff"}
            ta={"center"}
            mb={"40px"}
          >
            <span>Команда</span> InteriseGroup
          </Text>

          <Flex mb={"40px"} gap={"32px"}>
            <Box className={s.boxForm}>
              <Flex direction={"column"} gap={"8px"} mb={"32px"}>
                <Text component={"h2"}>Запишитесь на консультацию</Text>
                <Text component={"p"}>
                  Получите персональные рекомендации и ответы <br /> на ваши
                  вопросы.
                </Text>
              </Flex>
              <EmailForm />
            </Box>
            <Box className={s.boxFormImage}>
              <Image src={Imaga1} alt={"Imaga1"} width={751} height={331} />
            </Box>
          </Flex>

          <Flex gap={"37px"} align={"stretch"}>
            <Box className={s.mapLeft}>
              <Flex direction={"column"}>
                <Flex direction={"column"} gap={"8px"} mb={"31px"}>
                  <IconLogo />
                </Flex>
                <Flex gap={"18px"} mb={"20px"}>
                  <IconYoutube />
                  <IconTg />
                  <IconVk />
                </Flex>
                <Flex direction={"column"} gap={"6px"}>
                  <Text component={"p"} className={s.infoTitle} mb={"3px"}>
                    Email:
                  </Text>
                  <Text component={"p"} className={s.infoText}>
                    PR и СМИ: <span>pr@interisegroup.com</span>
                  </Text>
                  <Text component={"p"} className={s.infoText}>
                    Запросы бизнеса: <br />
                    <span>request@interisegroup.com</span>
                  </Text>
                </Flex>
              </Flex>

              <Flex direction={"column"} gap={"18px"} align={"flex-start"}>
                <Flex direction={"column"} gap={"6px"}>
                  <Text component={"p"} className={s.infoTitle} mb={"23px"}>
                    Контакты партнёров:
                  </Text>
                  <Text component={"p"} className={s.infoText}>
                    Дмитрий Вакин <br /> Со-основатель, Управляющий партнер
                    +79652877590
                  </Text>
                </Flex>
                <Flex direction={"column"} gap={"6px"}>
                  <Text component={"p"} className={s.infoTitle} mb={"34px"}>
                    Наш офис:
                  </Text>
                  <Text component={"p"} className={s.infoText}>
                    Остоженка 37/7 с.2, особняк <br /> Conversation Cafe, 4 этаж
                  </Text>
                </Flex>
              </Flex>

              <Flex direction={"column"} gap={"18px"}>
                <Flex direction={"column"} gap={"6px"} align={"flex-start"}>
                  <Text component={"p"} className={s.infoText}>
                    Алексей Веретенов Со-основатель, Управляющий партнер
                    +79032846834
                  </Text>
                </Flex>
              </Flex>
            </Box>
            <Box className={s.mapRight}>
              <Image src={IconMap} alt={"IconMap"} width={415} height={353} />
            </Box>
          </Flex>
        </div>
      </div>
    </div>
  )
}
