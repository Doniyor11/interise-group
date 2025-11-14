import { Flex, Text } from "@mantine/core"
import useTranslation from "next-translate/useTranslation"
import React from "react"

import IconOne from "@/shared/assets/images/interise-group/icon-value-1.svg"
import IconTwo from "@/shared/assets/images/interise-group/icon-value-2.svg"
import IconThree from "@/shared/assets/images/interise-group/icon-value-3.svg"
import IconFour from "@/shared/assets/images/interise-group/icon-value-4.svg"
import IconFive from "@/shared/assets/images/interise-group/icon-value-5.svg"

import s from "./styles.module.scss"

export const ClubValues = () => {
  const { t } = useTranslation("common")

  return (
    <div className={"container"}>
      <div className={s.valuesSection}>
        <h3
          className={s.sectionTitle}
          dangerouslySetInnerHTML={{ __html: t("club.values.title") }}
        />
        <div className={s.cards}>
          <div className={s.card}>
            <Flex align="center" gap={12}>
              <div className={s.icon}>
                <IconOne />
              </div>
              <Text className={s.cardTitle}>
                {t("club.values.cards.card1.title")}
              </Text>
            </Flex>
            <Text className={s.cardText}>
              {t("club.values.cards.card1.text")}
            </Text>
          </div>
          <div className={s.card}>
            <Flex align="center" gap={12}>
              <div className={s.icon}>
                <IconTwo />
              </div>
              <Text className={s.cardTitle}>
                {t("club.values.cards.card2.title")}
              </Text>
            </Flex>
            <Text className={s.cardText}>
              {t("club.values.cards.card2.text")}
            </Text>
          </div>
          <div className={s.card}>
            <Flex align="center" gap={12}>
              <div className={s.icon}>
                <IconThree />
              </div>
              <Text className={s.cardTitle}>
                {t("club.values.cards.card3.title")}
              </Text>
            </Flex>
            <Text className={s.cardText}>
              {t("club.values.cards.card3.text")}
            </Text>
          </div>
          <div className={s.card}>
            <Flex align="center" gap={12}>
              <div className={s.icon}>
                <IconFour />
              </div>
              <Text className={s.cardTitle}>
                {t("club.values.cards.card4.title")}
              </Text>
            </Flex>
            <Text className={s.cardText}>
              {t("club.values.cards.card4.text")}
            </Text>
          </div>
          <div className={s.card}>
            <Flex align="center" gap={12}>
              <div className={s.icon}>
                <IconFive />
              </div>
              <Text className={s.cardTitle}>
                {t("club.values.cards.card5.title")}
              </Text>
            </Flex>
            <Text className={s.cardText}>
              {t("club.values.cards.card5.text")}
            </Text>
          </div>
        </div>
      </div>
      <div className={s.expertsSection}>
        <h3
          className={s.sectionTitle}
          dangerouslySetInnerHTML={{ __html: t("club.values.experts.title") }}
        />
        <div className={s.cards}>
          <div className={s.card}>
            <Flex gap={12}>
              <div className={s.point} />
              <Text className={s.cardTitle}>
                {t("club.values.experts.cards.card1.title")}
              </Text>
            </Flex>
            <Text className={s.cardText}>
              {t("club.values.experts.cards.card1.text")}
            </Text>
          </div>
          <div className={s.card}>
            <Flex gap={12}>
              <div className={s.point} />
              <Text className={s.cardTitle}>
                {t("club.values.experts.cards.card2.title")}
              </Text>
            </Flex>
            <Text className={s.cardText}>
              {t("club.values.experts.cards.card2.text")}
            </Text>
          </div>
          <div className={s.card}>
            <Flex gap={12}>
              <div className={s.point} />
              <Text className={s.cardTitle}>
                {t("club.values.experts.cards.card3.title")}
              </Text>
            </Flex>
            <Text className={s.cardText}>
              {t("club.values.experts.cards.card3.text")}
            </Text>
          </div>
          <div className={s.card}>
            <Flex gap={12}>
              <div className={s.point} />
              <Text className={s.cardTitle}>
                {t("club.values.experts.cards.card4.title")}
              </Text>
            </Flex>
            <Text className={s.cardText}>
              {t("club.values.experts.cards.card4.text")}
            </Text>
          </div>
          <div className={s.card}>
            <Flex gap={12}>
              <div className={s.point} />
              <Text className={s.cardTitle}>
                {t("club.values.experts.cards.card5.title")}
              </Text>
            </Flex>
            <Text className={s.cardText}>
              {t("club.values.experts.cards.card5.text")}
            </Text>
          </div>
          <div className={s.card}>
            <Flex gap={12}>
              <div className={s.point} />
              <Text className={s.cardTitle}>
                {t("club.values.experts.cards.card6.title")}
              </Text>
            </Flex>
            <Text className={s.cardText}>
              {t("club.values.experts.cards.card6.text")}
            </Text>
          </div>
          <div className={s.card}>
            <Flex gap={12}>
              <div className={s.point} />
              <Text className={s.cardTitle}>
                {t("club.values.experts.cards.card7.title")}
              </Text>
            </Flex>
            <Text className={s.cardText}>
              {t("club.values.experts.cards.card7.text")}
            </Text>
          </div>
          <div className={s.card}>
            <Flex gap={12}>
              <div className={s.point} />
              <Text className={s.cardTitle}>
                {t("club.values.experts.cards.card8.title")}
              </Text>
            </Flex>
            <Text className={s.cardText}>
              {t("club.values.experts.cards.card8.text")}
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}
