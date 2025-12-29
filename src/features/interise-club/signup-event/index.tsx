import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Button, Checkbox, Input, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import Trans from "next-translate/Trans"
import useTranslation from "next-translate/useTranslation"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { IMaskInput } from "react-imask"

import { useSubmitFormQuery } from "@/features/contact-forms/api/query.ts"
import { IEventFormTypes } from "@/features/contact-forms/email-form/types.ts"

import { useGetClubImagesQuery } from "@/entities/club-images/query.ts"

import s from "./styles.module.scss"

export const SignupEvent = () => {
  const { t, lang } = useTranslation("common")
  const matchesSmall = useMediaQuery("(max-width: 845px)")

  const eventFormSchema = yup.object().shape({
    name: yup.string().required(t("forms.validation.name_required")),
    company: yup.string().required(t("forms.validation.company_required")),
    phone: yup.string().required(t("forms.validation.phone_required")),
    telegram: yup.string().required(t("forms.validation.telegram_required")),
    event: yup.string().required(t("forms.validation.event_required")),
    check: yup.boolean().oneOf([true], t("forms.validation.privacy_required")),
    newsletterConsent: yup.boolean().default(false),
  })

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm<any>({
    mode: "onSubmit",
    resolver: yupResolver(eventFormSchema),
  })

  const { mutate, isPending } = useSubmitFormQuery(() => {
    reset({
      name: "",
      company: "",
      phone: "",
      telegram: "",
      event: "",
      check: false,
      newsletterConsent: false,
    })
  })

  const onSubmit = (data: IEventFormTypes) => {
    mutate({
      message:
        `<b>📩 Новая заявка с сайта!</b>\n\n` +
        `<b>🌐 Страница:</b> InteriseClub\n` +
        `<b>👤 Имя:</b> ${data.name}\n` +
        `<b>🏢 Компания:</b> ${data.company}\n` +
        `<b>📞 Телефон:</b> ${data.phone}\n` +
        `<b>💬 Telegram:</b> ${data.telegram}\n` +
        `<b>📅 Мероприятие:</b> ${data.event}\n`,
      formData: {
        name: data.name,
        phone: data.phone,
        company: data.company,
        telegram: data.telegram,
        event: data.event,
        source: "InteriseClub",
      },
    })
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
          backgroundSize: matchesSmall ? "cover" : "60% 470px",
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

              <Controller
                name={"check"}
                control={control}
                render={({ field, fieldState }) => (
                  <Checkbox
                    m={"20px 0 16px"}
                    classNames={{
                      root: s.checkboxRoot,
                      label: s.checkboxLabel,
                      input: s.checkboxInput,
                    }}
                    label={
                      <Trans
                        i18nKey="common:forms.privacy_agreement"
                        components={{
                          link: (
                            <a
                              href={`/Политика_конфединциальности_${lang}.pdf`}
                              target="_blank"
                              rel="noopener noreferrer"
                            />
                          ),
                        }}
                      />
                    }
                    checked={field.value}
                    onChange={(value: any) => field.onChange?.(value)}
                    error={fieldState.error?.message}
                  />
                )}
              />

              <Controller
                name={"newsletterConsent"}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    m={"0 0 16px"}
                    classNames={{
                      root: s.checkboxRoot,
                      label: s.checkboxLabel,
                      input: s.checkboxInput,
                    }}
                    label={
                      <Trans
                        i18nKey="common:forms.newsletter_consent"
                        components={{
                          link: (
                            <a
                              href={`/Согласие_на_получение_рассылок_${lang}.pdf`}
                              target="_blank"
                              rel="noopener noreferrer"
                            />
                          ),
                        }}
                      />
                    }
                    checked={field.value}
                    onChange={(value: any) => field.onChange?.(value)}
                  />
                )}
              />

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
