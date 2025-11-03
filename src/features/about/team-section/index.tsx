import { Anchor, Box, Flex, Grid, List, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import IconLin from "@/shared/assets/images/interise-group/linkedin.svg"
import User1 from "@/shared/assets/images/interise-group/partner/user1.png"
import User2 from "@/shared/assets/images/interise-group/partner/user2.png"
import IconTg from "@/shared/assets/images/interise-group/tg 2.svg"

import s from "./styles.module.scss"

export const TeamSection = () => {
  const matchesSmall = useMediaQuery("(max-width: 845px)")
  const matchesIpad = useMediaQuery("(max-width: 1140px)")
  return (
    <Box className={cx(s.sectionWrapper, "container")}>
      <Text className={s.teamTitle}>Команда InteriseGroup</Text>
      <Flex className={s.teamSubtitle}>
        <Text>
          Наша команда объединяет экспертов и практиков с реальным опытом в
          крупнейших компаниях Америки, Европы, России, стран СНГ и Ближнего
          Востока.
        </Text>
        <Text>
          Этот уникальный бэкграунд помогает нам разрабатывать стратегии,
          которые работают в реальном бизнесе и дают измеримый результат.
        </Text>
      </Flex>
      <Grid>
        <Grid.Col span={matchesSmall ? 12 : 6}>
          <Flex direction={"column"}>
            <Flex direction={"column"} bg={"#D4E8FF"} className={s.teamBox}>
              <Flex className={s.teamBoxTop}>
                <Box className={s.teamBoxImage}>
                  <Image src={User1} alt={""} width={254} height={284} />
                </Box>
                <Flex
                  direction={"column"}
                  justify={"space-between"}
                  h={matchesIpad ? "240px" : "280px"}
                >
                  <Box>
                    <p className={s.teamBoxTitle}>Дмитрий Вакин</p>
                    <p className={s.teamBoxSubTitle}>
                      Сооснователь, InteriseGroup
                    </p>
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
                  </Box>
                  <Flex gap={"8px"} className={s.socials}>
                    <Anchor
                      h={50}
                      href={"https://t.me/Di_VC"}
                      target={"_blank"}
                    >
                      <IconTg />
                    </Anchor>
                    <Anchor
                      h={50}
                      href={"https://ru.linkedin.com/in/dmitrii-vakin-9585a679"}
                      target={"_blank"}
                    >
                      <IconLin />
                    </Anchor>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                direction={"column"}
                className={s.teamBoxBottom}
                gap={"15px"}
                p={"35px"}
              >
                <Text className={s.teamBoxBottomTitle}>Проектный опыт:</Text>
                <Text className={s.teamBoxBottomSubTitle}>
                  Эксперт по стратегии, трансформации и управлению изменениями.
                  Более 15 лет опыта в инвестиционной, банковской и IT-сферах.
                  Реализовал свыше 30 крупных проектов в России и СНГ, включая
                  крупнейшие интеграции и программы цифровой трансформации.
                </Text>
                <Text className={s.teamBoxBottomSubTitle}>
                  Руководил развитием инноваций в Альфа-Банке, участвовал в
                  создании инвестиционного фонда группы (€500 млн).
                  Консультирует компании, входит в советы директоров и
                  инвестирует в международные консалтинговые и технологические
                  бизнесы.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Grid.Col>
        <Grid.Col span={matchesSmall ? 12 : 6}>
          <Flex direction={"column"}>
            <Flex direction={"column"} bg={"#D4E8FF"} className={s.teamBox}>
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
                    <p className={s.teamBoxTitle}>Алексей Веретенов</p>
                    <p className={s.teamBoxSubTitle}>
                      Сооснователь, InteriseGroup
                    </p>
                    <List>
                      <List.Item className={s.teamBoxText}>
                        Управляющий партнёр Sentoo <br />и CEO Sentoo Восток
                      </List.Item>
                      <List.Item className={s.teamBoxText}>
                        Инвестор и совладелец daily- <br />и venture-проектов.
                      </List.Item>
                    </List>
                  </Box>
                  <Flex gap={"8px"} className={s.socials}>
                    <Anchor
                      h={50}
                      href={"https://t.me/aoveretenov"}
                      target={"_blank"}
                    >
                      <IconTg />
                    </Anchor>
                    <Anchor
                      h={50}
                      href={"https://ru.linkedin.com/in/aoveretenov/ru"}
                      target={"_blank"}
                    >
                      <IconLin />
                    </Anchor>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                direction={"column"}
                className={s.teamBoxBottom}
                gap={"15px"}
                p={"35px"}
              >
                <Text className={s.teamBoxBottomTitle}>Проектный опыт:</Text>
                <Text className={s.teamBoxBottomSubTitle}>
                  Эксперт по стратегии, трансформации и управлению изменениями.
                  Более 15 лет опыта в инвестиционной, банковской и IT-сферах.
                  Реализовал свыше 30 крупных проектов в России и СНГ, включая
                  крупнейшие интеграции и программы цифровой трансформации.
                </Text>
                <Text className={s.teamBoxBottomSubTitle}>
                  Руководил развитием инноваций в Альфа-Банке, участвовал в
                  создании инвестиционного фонда группы (€500 млн).
                  Консультирует компании, входит в советы директоров и
                  инвестирует в международные консалтинговые и технологические
                  бизнесы.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Grid.Col>
      </Grid>
    </Box>
  )
}
