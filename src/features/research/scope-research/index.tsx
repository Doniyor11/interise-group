import { Box, Text } from "@mantine/core"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import React from "react"

import { AnimatedNumber } from "@/shared/ui"

import s from "./styles.module.scss"

export const ScopeResearch = () => {
  const { t } = useTranslation("common")
  return (
    <div className={cx(s.sectionWrapper, "container")}>
      <h2 dangerouslySetInnerHTML={{ __html: t("research.scope.title") }} />
      <Text
        className={s.subtitle}
        dangerouslySetInnerHTML={{ __html: t("research.scope.subtitle") }}
      />
      <Box className={s.box}>
        <div className={s.statsWrapper}>
          <div className={s.statsCard}>
            <Text>
              <AnimatedNumber value={2} className={s.count} />
            </Text>
            <Text className={s.text}>{t("research.scope.regions")}</Text>
          </div>
          <div className={s.statsCard}>
            <Text>
              <AnimatedNumber value={8} className={s.count} />
            </Text>
            <Text className={s.text}>{t("research.scope.countries")}</Text>
          </div>
          <div className={s.statsCard}>
            <Text>
              <AnimatedNumber value={15} className={s.count} symbols={"+"} />
            </Text>
            <Text
              className={s.text}
              dangerouslySetInnerHTML={{ __html: t("research.scope.banks") }}
            />
          </div>
          <div className={s.statsCard}>
            <Text>
              <AnimatedNumber value={500} className={s.count} symbols={"+"} />
            </Text>
            <Text
              className={s.text}
              dangerouslySetInnerHTML={{ __html: t("research.scope.visits") }}
            />
          </div>
        </div>
      </Box>
    </div>
  )
}
