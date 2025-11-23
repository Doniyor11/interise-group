import { Anchor, Box, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import MarkdownPreview from "@uiw/react-markdown-preview"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import React from "react"

import { Footer } from "@/widgets/layouts/footer"

import { useGetOurTeamQuery } from "@/entities/our-team/query.ts"
import { IGetOurTeam } from "@/entities/our-team/types.ts"

import IconLin from "@/shared/assets/images/interise-group/linkedin.svg"
import IconTg from "@/shared/assets/images/interise-group/tg 2.svg"

import s from "./index.module.scss"

export const Contacts = () => {
  const { t } = useTranslation("common")
  const matchesIpad = useMediaQuery("(max-width: 1140px)")

  const { data } = useGetOurTeamQuery()

  if (data?.length === 0) return null

  return (
    <div className={s.sectionWrapper}>
      <div className="container">
        <div className={s.box}>
          <p className={s.teamTitle}>{t("contacts.team.title")}</p>
          <Flex gap={12} mb={32} align={"stretch"}>
            {data?.map((item: IGetOurTeam, i: number) => (
              <Flex key={i} className={s.teamBox}>
                <Flex className={s.teamBoxTop}>
                  <Box className={s.teamBoxImage}>
                    <Image
                      src={item?.image}
                      alt={item?.name}
                      width={254}
                      height={284}
                      unoptimized
                    />
                  </Box>
                  <Flex
                    direction={"column"}
                    justify={"space-between"}
                    h={matchesIpad ? "240px" : "280px"}
                  >
                    <Box>
                      <p className={s.teamBoxTitle}>{item?.name}</p>
                      <p className={s.teamBoxSubTitle}>{item?.role}</p>
                      <MarkdownPreview
                        source={item?.highlights}
                        className={s.list}
                      />
                    </Box>
                    <Flex gap={"8px"} className={s.socials}>
                      <Anchor
                        h={50}
                        href={item?.telegram_url}
                        target={"_blank"}
                      >
                        <IconTg />
                      </Anchor>
                      <Anchor
                        h={50}
                        href={item?.linkedin_url}
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
                  <MarkdownPreview
                    source={item?.experience}
                    className={s.teamBoxBottomSubTitle}
                  />
                </Flex>
              </Flex>
            ))}
          </Flex>
          <Footer />
        </div>
      </div>
    </div>
  )
}
