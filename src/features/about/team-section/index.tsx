import {
  Accordion,
  AccordionControl,
  Anchor,
  Box,
  Flex,
  List,
  Text,
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import LogoMedia from "@/shared/assets/images/interise-group/icon-media.svg"
import ImageMedia from "@/shared/assets/images/interise-group/image-media.png"
import IconLin from "@/shared/assets/images/interise-group/linkedin.svg"
import User1 from "@/shared/assets/images/interise-group/partner/user1.png"
import User2 from "@/shared/assets/images/interise-group/partner/user2.png"
import IconTg from "@/shared/assets/images/interise-group/tg 2.svg"

import s from "./styles.module.scss"

export const TeamSection = () => {
  const matchesSmall = useMediaQuery("(max-width: 845px)")
  const matchesIpad = useMediaQuery("(max-width: 1140px)")
  return (
    <>
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
        <Flex
          gap={matchesSmall ? 16 : 32}
          direction={matchesSmall ? "column" : "row"}
          align="flex-start"
        >
          <Flex className={s.teamBox}>
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
                  <Anchor h={50} href={"https://t.me/Di_VC"} target={"_blank"}>
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
              <Accordion w={"100%"} unstyled key={"user1"}>
                <Accordion.Item value="item-1">
                  <AccordionControl className={s.teamBoxBottomTitle}>
                    Проектный опыт:
                  </AccordionControl>
                  <Accordion.Panel>
                    <Text className={s.teamBoxBottomSubTitle}>
                      Эксперт по стратегии, трансформации и управлению
                      изменениями. Более 15 лет опыта в инвестиционной,
                      банковской и IT-сферах. Реализовал свыше 30 крупных
                      проектов в России и СНГ, включая крупнейшие интеграции и
                      программы цифровой трансформации. <br /> <br />
                      Руководил развитием инноваций в Альфа-Банке, участвовал в
                      создании инвестиционного фонда группы (€500 млн).
                      Консультирует компании, входит в советы директоров и
                      инвестирует в международные консалтинговые и
                      технологические бизнесы.
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Flex>
          </Flex>
          <Flex className={s.teamBox}>
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
              <Accordion w={"100%"} unstyled key={"user2"}>
                <Accordion.Item value="item-2">
                  <AccordionControl className={s.teamBoxBottomTitle}>
                    Проектный опыт:
                  </AccordionControl>
                  <Accordion.Panel>
                    <Text className={s.teamBoxBottomSubTitle}>
                      Эксперт по трансформациям, цифровизации и стратегиям
                      роста. 20+ лет опыта в 26 странах и 150+ проектах — от
                      банковского сектора и телекоммуникаций до промышленности и
                      медицины. <br /> <br />
                      Разрабатывает стратегии с фокусом на внедрение и
                      операционную эффективность. Работал с ведущими компаниями
                      Европы, США и Азии, специализируется на построении систем
                      клиентского опыта и управлении ростом бизнеса.
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <div className={cx(s.mediaBox, "container")}>
        <Text className={s.teamTitle}>Медиа</Text>
        <Text className={s.teamSubtitle}>
          Статьи и фото с наших выступлений
        </Text>

        <div className={s.cards}>
          <div className={s.card}>
            <div className={s.cardTop}>
              <Image src={ImageMedia} alt={"media-image"} className={s.image} />
              <div className={s.links}>
                <LogoMedia />
                <Anchor className={s.link}>Открыть статью</Anchor>
              </div>
            </div>

            <Text>
              Интеграция ведущих банков и запуск крупнейшей трансформации на
              рынке
            </Text>
          </div>
          <div className={s.card}>
            <div className={s.cardTop}>
              <Image src={ImageMedia} alt={"media-image"} className={s.image} />
              <div className={s.links}>
                <LogoMedia />
                <Anchor className={s.link}>Открыть статью</Anchor>
              </div>
            </div>

            <Text>
              Интеграция ведущих банков и запуск крупнейшей трансформации на
              рынке
            </Text>
          </div>
          <div className={s.card}>
            <div className={s.cardTop}>
              <Image src={ImageMedia} alt={"media-image"} className={s.image} />
              <div className={s.links}>
                <LogoMedia />
                <Anchor className={s.link}>Открыть статью</Anchor>
              </div>
            </div>

            <Text>
              Интеграция ведущих банков и запуск крупнейшей трансформации на
              рынке
            </Text>
          </div>
        </div>
      </div>
    </>
  )
}
