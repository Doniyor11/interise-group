import { Box, Button, Input, Text } from "@mantine/core"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { IMaskInput } from "react-imask"

import { useSendMessageQuery } from "@/features/contact-forms/api/query.ts"
import { IEventFormTypes } from "@/features/contact-forms/email-form/types.ts"

import { useGetClubImagesQuery } from "@/entities/club-images/query.ts"

import s from "./styles.module.scss"

export const SignupEvent = () => {
  const { t, lang } = useTranslation("common")

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
      event: "",
    })
  })

  const onSubmit = (data: IEventFormTypes) => {
    mutate(
      `<b>📩 Новая заявка с сайта!</b>\n\n` +
        `<b>🌐 Страница:</b> InteriseClub\n` +
        `<b>👤 Имя:</b> ${data.name}\n` +
        `<b>🏢 Компания:</b> ${data.company}\n` +
        `<b>📞 Телефон:</b> ${data.phone}\n` +
        `<b>💬 Telegram:</b> ${data.telegram}\n` +
        `<b>📅 Мероприятие:</b> ${data.event}\n`,
    )
  }

  const { data } = useGetClubImagesQuery({
    lang,
    section: "form",
  })

  return (
    <div className={cx(s.container, "container")} id={"eventForm"}>
      <div
        data-aos="fade-up"
        className={s.sectionWrapper}
        style={{
          background: data
            ? `#0076FE url('${data[0]?.url}') no-repeat right center`
            : "#0076FE",
        }}
      >
        <Box className={s.formWrapper}>
          <Box className={s.box}>
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
                    <Input.Wrapper className={cx(s.inputWrapper, s.event)}>
                      <Input
                        required
                        className={s.input}
                        placeholder={t("club.signup.select_event_placeholder")}
                        {...field}
                      />
                    </Input.Wrapper>
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
        </Box>
      </div>
    </div>
  )
}
