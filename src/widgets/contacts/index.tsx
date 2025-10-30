import { Box, Flex, Grid, List, Text } from "@mantine/core"
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
import User1 from "@/shared/assets/images/interise-group/partner/user1.png"
import User2 from "@/shared/assets/images/interise-group/partner/user2.png"
import IconTg from "@/shared/assets/images/interise-group/tg 2.svg"

import s from "./index.module.scss"

export const Contacts = () => {
  const matches = useMediaQuery("(max-width: 1040px)")
  const matchesSmall = useMediaQuery("(max-width: 845px)")
  const matchesIpad = useMediaQuery("(max-width: 1140px)")
  return (
    <div className={s.sectionWrapper}>
      <div className="container">
        <div className={s.box}>
          <Text className={s.teamTitle}>Команда InteriseGroup</Text>

          <Box mb={"32px"}>
            <Grid>
              <Grid.Col span={matchesSmall ? 12 : 6}>
                <Flex direction={"column"}>
                  <Flex
                    direction={"column"}
                    bg={"#D4E8FF"}
                    className={s.teamBox}
                  >
                    <Flex className={s.teamBoxTop}>
                      <Box className={s.teamBoxImage}>
                        <Image src={User1} alt={""} width={254} height={284} />
                      </Box>
                      <Box h={matchesIpad ? "240px" : "280px"}>
                        <Text className={s.teamBoxTitle}>Дмитрий Вакин</Text>
                        <Text className={s.teamBoxSubTitle}>
                          Сооснователь, InteriseGroup
                        </Text>
                        <List>
                          <List.Item className={s.teamBoxText}>
                            Инвестор и совладелец daily- и tech-
                            <br />
                            проектов
                          </List.Item>
                          <List.Item className={s.teamBoxText}>
                            Член делового совета BRICS
                            <br /> (Мьянма)
                          </List.Item>
                          <List.Item className={s.teamBoxText}>
                            Топ-100 Forbes “30 до 30”(Финансы
                            <br /> и инвестиции, 2020).
                          </List.Item>
                        </List>
                        <Flex gap={"8px"} mt={"15px"}>
                          <IconTg />
                          <IconLin />
                        </Flex>
                      </Box>
                    </Flex>
                    <Flex
                      direction={"column"}
                      className={s.teamBoxBottom}
                      gap={"15px"}
                      p={"35px"}
                    >
                      <Text className={s.teamBoxBottomTitle}>
                        Проектный опыт:
                      </Text>
                      <Text className={s.teamBoxBottomSubTitle}>
                        Эксперт по стратегии, трансформации и управлению
                        изменениями. Более 15 лет опыта в инвестиционной,
                        банковской и IT-сферах. Реализовал свыше 30 крупных
                        проектов в России и СНГ, включая крупнейшие интеграции и
                        программы цифровой трансформации.
                      </Text>
                      <Text className={s.teamBoxBottomSubTitle}>
                        Руководил развитием инноваций в Альфа-Банке, участвовал
                        в создании инвестиционного фонда группы (€500 млн).
                        Консультирует компании, входит в советы директоров и
                        инвестирует в международные консалтинговые и
                        технологические бизнесы.
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Grid.Col>
              <Grid.Col span={matchesSmall ? 12 : 6}>
                <Flex direction={"column"}>
                  <Flex
                    direction={"column"}
                    bg={"#D4E8FF"}
                    className={s.teamBox}
                  >
                    <Flex className={s.teamBoxTop}>
                      <Box className={s.teamBoxImage}>
                        <Image src={User2} alt={""} width={254} height={284} />
                      </Box>
                      <Flex
                        direction={"column"}
                        justify={"space-between"}
                        h={matchesIpad ? "240px" : "280px"}
                      >
                        <Box>
                          <Text className={s.teamBoxTitle}>
                            Алексей Веретенов
                          </Text>
                          <Text className={s.teamBoxSubTitle}>
                            Сооснователь, InteriseGroup
                          </Text>
                          <List>
                            <List.Item className={s.teamBoxText}>
                              Управляющий партнёр Sentoo <br />и CEO Sentoo
                              Восток
                            </List.Item>
                            <List.Item className={s.teamBoxText}>
                              Инвестор и совладелец daily- <br />и
                              venture-проектов.
                            </List.Item>
                          </List>
                        </Box>
                        <Flex gap={"8px"} mt={"15px"}>
                          <IconTg />
                          <IconLin />
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex
                      direction={"column"}
                      className={s.teamBoxBottom}
                      gap={"15px"}
                      p={"35px"}
                    >
                      <Text className={s.teamBoxBottomTitle}>
                        Проектный опыт:
                      </Text>
                      <Text className={s.teamBoxBottomSubTitle}>
                        Эксперт по стратегии, трансформации и управлению
                        изменениями. Более 15 лет опыта в инвестиционной,
                        банковской и IT-сферах. Реализовал свыше 30 крупных
                        проектов в России и СНГ, включая крупнейшие интеграции и
                        программы цифровой трансформации.
                      </Text>
                      <Text className={s.teamBoxBottomSubTitle}>
                        Руководил развитием инноваций в Альфа-Банке, участвовал
                        в создании инвестиционного фонда группы (€500 млн).
                        Консультирует компании, входит в советы директоров и
                        инвестирует в международные консалтинговые и
                        технологические бизнесы.
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Grid.Col>
            </Grid>
          </Box>

          <Flex
            mb="40px"
            gap="32px"
            id={"navbar5"}
            mt={"30px"}
            align={"stretch"}
            direction={matches ? "column" : "row"}
          >
            <Box className={s.boxForm}>
              <Flex direction="column" gap="8px">
                <Text component="h2">Записаться на консультацию</Text>
                <Text component="p">
                  Получите персональные рекомендации и ответы <br /> на ваши
                  вопросы.
                </Text>
              </Flex>
              <EmailForm />
            </Box>
            <Box className={s.boxFormImage}>
              <Image src={Imaga1} alt="Imaga1" width={751} height={331} />
            </Box>
          </Flex>

          <Flex
            gap="30px"
            align="stretch"
            direction={matches ? "column" : "row"}
          >
            <Box className={s.mapLeft}>
              {/* 1 */}
              <Flex
                direction={"column"}
                gap={matches ? "15px" : "50px"}
                h={"100%"}
                justify={"space-between"}
              >
                <Flex gap={"35px"} direction={"column"}>
                  <Flex>
                    <IconLogo />
                  </Flex>
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
                      <Text
                        component="p"
                        className={s.infoText}
                        c={"#535E6B"}
                        fz={"24px"}
                      >
                        pr@interisegroup.com
                      </Text>
                    </Flex>
                    <Flex direction="column">
                      <Text component="p" className={s.infoText}>
                        По вопросам сотрудничества:
                      </Text>
                      <Text
                        component="p"
                        className={s.infoText}
                        c={"#535E6B"}
                        fz={"24px"}
                      >
                        request@interisegroup.com
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex direction={"column"} gap="8px">
                  <Text component="p" className={cx(s.infoText, s.menu)}>
                    Политика конфединциальности
                  </Text>
                  <Text component="p" className={cx(s.infoText, s.menu)}>
                    Пользовательское соглашения
                  </Text>
                  <Text component="p" className={cx(s.infoText, s.menu)}>
                    Согласие на получение рассылок
                  </Text>
                  <Text component="p" className={cx(s.infoText, s.menu)}>
                    Обработка файлов Cookies
                  </Text>
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
                      Остоженка 37/7 с.2, особняк <br /> Conversation Cafe, 4
                      этаж
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
                frameBorder="0"
              ></iframe>
            </Box>
          </Flex>

          <Flex justify={"center"}>
            <Text
              c={"#8696A9"}
              fz={"16px"}
              fw={"400"}
              lh={"121.2%"}
              mt={"60px"}
            >
              InteriseGroup · 2025
            </Text>
          </Flex>
        </div>
      </div>
    </div>
  )
}
