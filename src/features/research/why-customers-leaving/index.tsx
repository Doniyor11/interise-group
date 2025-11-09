import { Text } from "@mantine/core"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import React from "react"

import s from "./styles.module.scss"

export const WhyCustomersLeaving = () => {
  const { t } = useTranslation("common")
  return (
    <>
      <div className={cx(s.sectionWrapper, s.newTerritories, "container")}>
        <div className={s.box}>
          <h2>{t("research.territories.title")}</h2>

          <div className={s.cards}>
            <div className={s.card}>
              <Text className={s.cardText}>
                {t("research.territories.cci")}
              </Text>
              <Text
                className={s.cardTitle}
                dangerouslySetInnerHTML={{
                  __html: t("research.territories.uzbekistan"),
                }}
              />
            </div>
            <div className={s.card}>
              <Text className={s.cardText}>
                {t("research.territories.cci")}
              </Text>
              <Text
                className={s.cardTitle}
                dangerouslySetInnerHTML={{
                  __html: t("research.territories.kazakhstan"),
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={cx(s.sectionWrapper, "container")}>
        <h2
          dangerouslySetInnerHTML={{ __html: t("research.why_leaving.title") }}
        />
        <Text
          className={s.subtitle}
          dangerouslySetInnerHTML={{
            __html: t("research.why_leaving.subtitle"),
          }}
        />
        <div className={s.cards}>
          <div className={s.card}>
            <Text
              className={s.cardTitle}
              dangerouslySetInnerHTML={{
                __html: t("research.why_leaving.barrier1.title"),
              }}
            />
            <Text className={s.cardText}>
              {t("research.why_leaving.barrier1.description")}
            </Text>
          </div>
          <div className={s.card}>
            <Text
              className={s.cardTitle}
              dangerouslySetInnerHTML={{
                __html: t("research.why_leaving.barrier2.title"),
              }}
            />
            <Text className={s.cardText}>
              {t("research.why_leaving.barrier2.description")}
            </Text>
          </div>
          <div className={s.card}>
            <Text
              className={s.cardTitle}
              dangerouslySetInnerHTML={{
                __html: t("research.why_leaving.barrier3.title"),
              }}
            />
            <Text className={s.cardText}>
              {t("research.why_leaving.barrier3.description")}
            </Text>
          </div>
        </div>
      </div>
    </>
  )
}
