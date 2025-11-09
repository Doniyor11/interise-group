import { Box, Button, Input, Select, Text } from "@mantine/core"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import React from "react"
import { IMaskInput } from "react-imask"

import s from "./styles.module.scss"

export const SignupEvent = () => {
  const { t } = useTranslation("common")
  return (
    <div className={cx(s.container, "container")}>
      <div className={s.sectionWrapper}>
        <Box maw={472}>
          <Text className={s.title}>{t("club.signup.title")}</Text>
          <Text className={s.subtitle}>{t("club.signup.subtitle")}</Text>
          <form className={s.form}>
            <div className={s.inputs}>
              <Input
                className={s.input}
                placeholder={t("club.signup.name_placeholder")}
              />
              <Input
                className={s.input}
                placeholder={t("club.signup.company_placeholder")}
              />
              <Input
                inputMode="tel"
                autoComplete="off"
                component={IMaskInput}
                mask="+7 (000) 000 00 00"
                placeholder={t("club.signup.phone_placeholder")}
                className={s.input}
              />
              <Input
                className={s.input}
                placeholder={t("club.signup.telegram_placeholder")}
              />
              <Select
                className={s.select}
                placeholder={t("club.signup.select_event_placeholder")}
                data={[t("club.signup.demo_day_option")]}
              />
            </div>
            <Button className={s.btn}>{t("club.signup.submit_button")}</Button>
          </form>
        </Box>
      </div>
    </div>
  )
}
