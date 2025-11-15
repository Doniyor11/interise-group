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
import useTranslation from "next-translate/useTranslation"
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
  const { t } = useTranslation("common")
  const matchesSmall = useMediaQuery("(max-width: 845px)")
  const matchesIpad = useMediaQuery("(max-width: 1140px)")
  return (
    <>
      <Box className={cx(s.sectionWrapper, "container")}>
        <Text className={s.teamTitle}>{t("about.team.title")}</Text>
        <Flex className={s.teamSubtitle}>
          <Text>{t("about.team.subtitle1")}</Text>
          <Text>{t("about.team.subtitle2")}</Text>
        </Flex>
        <Flex
          gap={matchesSmall ? 16 : 32}
          direction={matchesSmall ? "column" : "row"}
          align="stretch"
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
                  <p className={s.teamBoxTitle}>
                    {t("about.team.dmitry.name")}
                  </p>
                  <p className={s.teamBoxSubTitle}>
                    {t("about.team.dmitry.position")}
                  </p>
                  <List>
                    <List.Item className={s.teamBoxText}>
                      {t("about.team.dmitry.role1")}
                    </List.Item>
                    <List.Item className={s.teamBoxText}>
                      {t("about.team.dmitry.role2")}
                    </List.Item>
                    <List.Item className={s.teamBoxText}>
                      {t("about.team.dmitry.role3")}
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
                    {t("about.team.project_experience")}
                  </AccordionControl>
                  <Accordion.Panel>
                    <Text
                      className={s.teamBoxBottomSubTitle}
                      dangerouslySetInnerHTML={{
                        __html: t("about.team.dmitry.experience"),
                      }}
                    />
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
                  <p className={s.teamBoxTitle}>
                    {t("about.team.alexey.name")}
                  </p>
                  <p className={s.teamBoxSubTitle}>
                    {t("about.team.alexey.position")}
                  </p>
                  <List>
                    <List.Item className={s.teamBoxText}>
                      {t("about.team.alexey.role1")}
                    </List.Item>
                    <List.Item className={s.teamBoxText}>
                      {t("about.team.alexey.role2")}
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
                    {t("about.team.project_experience")}
                  </AccordionControl>
                  <Accordion.Panel>
                    <Text
                      className={s.teamBoxBottomSubTitle}
                      dangerouslySetInnerHTML={{
                        __html: t("about.team.alexey.experience"),
                      }}
                    />
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <div className={cx(s.mediaBox, "container")}>
        <Text className={s.teamTitle}>{t("about.media.title")}</Text>
        <Text className={s.teamSubtitle}>{t("about.media.subtitle")}</Text>

        <div className={s.cards}>
          <div className={s.card}>
            <div className={s.cardTop}>
              <Image src={ImageMedia} alt={"media-image"} className={s.image} />
              <div className={s.links}>
                <LogoMedia />
                <Anchor className={s.link}>
                  {t("about.media.open_article")}
                </Anchor>
              </div>
            </div>

            <Text>{t("about.media.article_text")}</Text>
          </div>
          <div className={s.card}>
            <div className={s.cardTop}>
              <Image src={ImageMedia} alt={"media-image"} className={s.image} />
              <div className={s.links}>
                <LogoMedia />
                <Anchor className={s.link}>
                  {t("about.media.open_article")}
                </Anchor>
              </div>
            </div>

            <Text>{t("about.media.article_text")}</Text>
          </div>
          <div className={s.card}>
            <div className={s.cardTop}>
              <Image src={ImageMedia} alt={"media-image"} className={s.image} />
              <div className={s.links}>
                <LogoMedia />
                <Anchor className={s.link}>
                  {t("about.media.open_article")}
                </Anchor>
              </div>
            </div>

            <Text>{t("about.media.article_text")}</Text>
          </div>
        </div>
      </div>
    </>
  )
}
