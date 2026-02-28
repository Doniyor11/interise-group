import { Flex, Text } from "@mantine/core"
import useTranslation from "next-translate/useTranslation"
import React from "react"

import s from "./styles.module.scss"

export const Banner = () => {
  const { t } = useTranslation("common")

  return (
    <>
      <div className={s.sectionWrapper}>
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          maw={"1000px"}
          data-aos="zoom-in"
        >
          <Text className={s.label}>{t("main.experience.label")}</Text>
          <Text className={s.title}>{t("main.experience.title")}</Text>
          <Text
            className={s.subtitle}
            dangerouslySetInnerHTML={{ __html: t("main.experience.subtitle") }}
          />
          {/*<Button className={s.btn} onClick={() => onLinkClick("contacts")}>*/}
          {/*  {t("main.experience.request_button")}*/}
          {/*</Button>*/}
        </Flex>
      </div>
    </>
  )
}
