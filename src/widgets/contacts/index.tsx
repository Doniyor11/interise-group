import { Anchor, Box, Flex, List, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import React from "react"

import { Footer } from "@/widgets/layouts/footer"

import IconLin from "@/shared/assets/images/interise-group/linkedin.svg"
import User1 from "@/shared/assets/images/interise-group/partner/user1.png"
import User2 from "@/shared/assets/images/interise-group/partner/user2.png"
import IconTg from "@/shared/assets/images/interise-group/tg 2.svg"

import s from "./index.module.scss"

export const Contacts = () => {
  const { t } = useTranslation("common")
  const matchesIpad = useMediaQuery("(max-width: 1140px)")
  return (
    <div className={s.sectionWrapper}>
      <div className="container">
        <div className={s.box}>
          <p className={s.teamTitle}>{t("contacts.team.title")}</p>
          <Flex gap={12} mb={32} align={"stretch"}>
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
                      {t("contacts.team.dmitry.name")}
                    </p>
                    <p className={s.teamBoxSubTitle}>
                      {t("contacts.team.dmitry.position")}
                    </p>
                    <List>
                      <List.Item className={s.teamBoxText}>
                        {t("contacts.team.dmitry.role1")}
                      </List.Item>
                      <List.Item className={s.teamBoxText}>
                        {t("contacts.team.dmitry.role2")}
                      </List.Item>
                      <List.Item className={s.teamBoxText}>
                        {t("contacts.team.dmitry.role3")}
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
                <Text className={s.teamBoxBottomTitle}>
                  {t("contacts.team.project_experience")}
                </Text>
                <Text
                  className={s.teamBoxBottomSubTitle}
                  dangerouslySetInnerHTML={{
                    __html: t("about.team.dmitry.experience"),
                  }}
                />
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
                      {t("contacts.team.alexey.name")}
                    </p>
                    <p className={s.teamBoxSubTitle}>
                      {t("about.team.alexey.position")}
                    </p>
                    <List>
                      <List.Item className={s.teamBoxText}>
                        {t("contacts.team.alexey.role1")}
                      </List.Item>
                      <List.Item className={s.teamBoxText}>
                        {t("contacts.team.alexey.role2")}
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
                <Text className={s.teamBoxBottomTitle}>
                  {t("contacts.team.project_experience")}
                </Text>
                <Text
                  className={s.teamBoxBottomSubTitle}
                  dangerouslySetInnerHTML={{
                    __html: t("about.team.alexey.experience"),
                  }}
                />
              </Flex>
            </Flex>
          </Flex>
          <Footer />
        </div>
      </div>
    </div>
  )
}
