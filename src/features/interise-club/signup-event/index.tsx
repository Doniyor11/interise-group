import { Box, Button, Input, Select, Text } from "@mantine/core"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { IMaskInput } from "react-imask"

import { useSendMessageQuery } from "@/features/contact-forms/api/query.ts"
import { IEventFormTypes } from "@/features/contact-forms/email-form/types.ts"

import s from "./styles.module.scss"

export const SignupEvent = () => {
  const { t } = useTranslation("common")
  const router = useRouter()
  const pathMap: Record<string, string> = {
    "/": t("forms.page.home"),
    "/main": t("forms.page.home"),
    "/about": t("forms.page.about"),
    "/case": t("forms.page.cases"),
    "/research": t("forms.page.research"),
  }
  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm<IEventFormTypes>()

  const { mutate, isPending } = useSendMessageQuery(() => {
    reset({
      name: "",
      company: "",
      phone: "",
      telegram: "",
      event: null as any,
    })
  })

  const onSubmit = (data: IEventFormTypes) => {
    const currentPath = router.asPath
    const matchedKey = Object.keys(pathMap).find((key) =>
      currentPath.startsWith(key),
    )

    mutate(
      `<b>📩 Новая заявка с сайта!</b>\n` +
        `<b>🌐 Страница:</b> ${
          matchedKey ? pathMap[matchedKey] : t("forms.page.home")
        }\n` +
        `<b>👤 Имя:</b> ${data.name}\n` +
        `<b>🏢 Компания:</b> ${data.company}\n` +
        `<b>📞 Телефон:</b> ${data.phone}\n` +
        `<b>💬 Telegram:</b> ${data.telegram}\n` +
        `<b>📅 Способ связи:</b> ${data.event}\n`,
    )
  }
  return (
    <div className={cx(s.container, "container")}>
      <div className={s.sectionWrapper}>
        <Box maw={472}>
          <Text className={s.title}>{t("club.signup.title")}</Text>
          <Text className={s.subtitle}>{t("club.signup.subtitle")}</Text>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.inputs}>
              <Controller
                name={"name"}
                control={control}
                render={({ field }) => (
                  <Input.Wrapper className={s.inputWrapper}>
                    <Input
                      required
                      className={s.input}
                      placeholder={t("club.signup.name_placeholder")}
                      {...field}
                    />
                  </Input.Wrapper>
                )}
              />

              <Controller
                name={"company"}
                control={control}
                render={({ field }) => (
                  <Input.Wrapper className={s.inputWrapper}>
                    <Input
                      required
                      className={s.input}
                      placeholder={t("club.signup.company_placeholder")}
                      {...field}
                    />
                  </Input.Wrapper>
                )}
              />

              <Controller
                name={"phone"}
                control={control}
                render={({ field }) => (
                  <Input.Wrapper className={s.inputWrapper}>
                    <Input
                      required
                      inputMode="tel"
                      autoComplete="off"
                      component={IMaskInput}
                      mask="+7 (000) 000 00 00"
                      placeholder={t("club.signup.phone_placeholder")}
                      className={s.input}
                      {...field}
                    />
                  </Input.Wrapper>
                )}
              />

              <Controller
                name={"telegram"}
                control={control}
                render={({ field }) => (
                  <Input.Wrapper className={s.inputWrapper}>
                    <Input
                      required
                      className={s.input}
                      placeholder={t("club.signup.telegram_placeholder")}
                      {...field}
                    />
                  </Input.Wrapper>
                )}
              />

              <Controller
                name={"event"}
                control={control}
                render={({ field }) => (
                  <Select
                    required
                    className={s.select}
                    placeholder={t("club.signup.select_event_placeholder")}
                    data={[
                      t("club.events.demo_day_dmitry"),
                      t("club.events.brunch_restaurant"),
                    ]}
                    {...field}
                  />
                )}
              />
            </div>
            <Button
              type={"submit"}
              className={s.btn}
              loading={isPending}
              disabled={!isDirty || !isValid}
            >
              {t("club.signup.submit_button")}
            </Button>
          </form>
        </Box>
      </div>
    </div>
  )
}
