import { Anchor, Box, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import { EmailForm } from "@/features/contact-forms"

import IconCall from "@/shared/assets/images/interise-group/call-outline.svg"
import IconLogo from "@/shared/assets/images/interise-group/footer_logo.svg"
import Imaga1 from "@/shared/assets/images/interise-group/formbg.png"
import IconLin from "@/shared/assets/images/interise-group/linkedin.svg"
import IconLocation from "@/shared/assets/images/interise-group/location-outline.svg"
import IconEmail from "@/shared/assets/images/interise-group/mail-outline.svg"
import IconTg from "@/shared/assets/images/interise-group/tg 2.svg"

import s from "./styles.module.scss"

export const Footer = () => {
  const matches = useMediaQuery("(max-width: 1040px)")

  return (
    <>
      <Flex
        mb="40px"
        gap="32px"
        id={"contacts"}
        mt={"30px"}
        align={"stretch"}
        direction={matches ? "column" : "row"}
      >
        <Box className={s.boxForm}>
          <Text component="h2">Напишите нам</Text>
          <Text component="p">
            И мы свяжемся с вами для обсуждения <br /> ваших задач
          </Text>
          <EmailForm />
        </Box>
        <Box className={s.boxFormImage}>
          <Image src={Imaga1} alt="Imaga1" width={751} height={331} />
        </Box>
      </Flex>

      <Flex gap="30px" align="stretch" direction={matches ? "column" : "row"}>
        <Box className={s.mapLeft}>
          {/* 1 */}
          <Flex
            direction={"column"}
            gap={matches ? "15px" : "50px"}
            h={"100%"}
            justify={"space-between"}
          >
            <Flex gap={"35px"} direction={"column"} align={"flex-end"}>
              <IconLogo />
              <Flex gap="18px" mb="20px">
                <IconLin />
                <IconTg />
              </Flex>
            </Flex>
            <Flex direction={"column"} gap="8px">
              <Text component="p" className={cx(s.infoText, s.menu)}>
                О нас
              </Text>
              <Text component="p" className={cx(s.infoText, s.menu)}>
                Исследования
              </Text>
              <Text component="p" className={cx(s.infoText, s.menu)}>
                Interise Club
              </Text>
              <Text component="p" className={cx(s.infoText, s.menu)}>
                Направления работы
              </Text>
            </Flex>
          </Flex>
          <span className={s.line} />
          {/* 2 */}
          <Flex
            direction={"column"}
            gap={matches ? "15px" : "50px"}
            h={"100%"}
            justify={"space-between"}
          >
            <Flex
              direction="column"
              gap="19px"
              align="flex-start"
              justify={"space-between"}
            >
              <Flex direction="column" gap="6px">
                <Flex
                  align={"center"}
                  gap={"8px"}
                  className={s.infoTitle}
                  mb="24px"
                >
                  <IconEmail />
                  Напишите нам:
                </Flex>
                <Flex direction="column" mb={"16px"}>
                  <Text component="p" className={s.infoText}>
                    PR и СМИ:
                  </Text>
                  <Anchor
                    className={s.infoText}
                    c={"#535E6B"}
                    fz={"24px"}
                    href={"mailto:pr@interisegroup.com"}
                  >
                    pr@interisegroup.com
                  </Anchor>
                </Flex>
                <Flex direction="column">
                  <Text component="p" className={s.infoText}>
                    По вопросам сотрудничества:
                  </Text>
                  <Anchor
                    className={s.infoText}
                    c={"#535E6B"}
                    fz={"24px"}
                    href={"mailto:request@interisegroup.comcom"}
                  >
                    request@interisegroup.com
                  </Anchor>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap="8px">
              <Anchor
                target={"_blank"}
                href={"/Политика_конфединциальности.pdf"}
                className={cx(s.infoText, s.menu)}
              >
                Политика конфединциальности
              </Anchor>
              <Anchor
                target={"_blank"}
                href={"/Пользовательское_соглашения.pdf"}
                className={cx(s.infoText, s.menu)}
              >
                Пользовательское соглашения
              </Anchor>
              <Anchor
                target={"_blank"}
                href={"/Согласие_на_получение_рассылок.pdf"}
                className={cx(s.infoText, s.menu)}
              >
                Согласие на получение рассылок
              </Anchor>
              <Anchor
                target={"_blank"}
                href={"/Обработка_файлов_Cookies.pdf"}
                className={cx(s.infoText, s.menu)}
              >
                Обработка файлов Cookies
              </Anchor>
            </Flex>
          </Flex>
          <span className={s.line} />
          {/* 3/3 */}
          <Flex
            direction={"column"}
            gap={matches ? "15px" : "50px"}
            h={"100%"}
            justify={"space-between"}
          >
            <Flex
              direction="column"
              gap="19px"
              align="flex-start"
              justify={"space-between"}
            >
              <Flex direction="column" gap="6px">
                <Flex
                  align={"center"}
                  gap={"8px"}
                  className={s.infoTitle}
                  mb="24px"
                >
                  <IconCall />
                  Позвоните:
                </Flex>
                <Flex direction="column" mb={"16px"}>
                  <Text component="p" className={s.infoText}>
                    Телефон:
                  </Text>
                  <Text
                    component="p"
                    className={s.infoText}
                    c={"#535E6B"}
                    fz={"24px"}
                  >
                    8 800 000 00 00
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction="column" gap="18px" justify={"space-between"}>
              <Flex align={"center"} gap={"8px"} className={s.infoTitle}>
                <IconLocation />
                Наш офис:
              </Flex>
              <Flex direction="column">
                <Text component="p" className={s.infoText}>
                  Адрес:
                </Text>
                <Text
                  component="p"
                  className={s.infoText}
                  c={"#535E6B"}
                  fz={"16px"}
                >
                  Остоженка 37/7 с.2, особняк <br /> Conversation Cafe, 4 этаж
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box className={s.mapRight}>
          <iframe
            src="https://yandex.com/map-widget/v1/?um=constructor%3A42c9af928a64586089fec4baa8e2113d4c45085dfbda73f148aca3da4fddc4a3&amp;source=constructor"
            width="100%"
            height="100%"
            frameBorder={0}
          />
        </Box>
      </Flex>

      <Flex justify={"center"}>
        <Text c={"#8696A9"} fz={"16px"} fw={"400"} lh={"121.2%"} mt={"60px"}>
          InteriseGroup · 2025
        </Text>
      </Flex>
    </>
  )
}
