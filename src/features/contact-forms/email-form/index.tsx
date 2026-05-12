import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button, Checkbox, Flex, Input } from "@mantine/core"
import Trans from "next-translate/Trans"
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { IMaskInput } from "react-imask"

import { useSubmitFormQuery } from "@/features/contact-forms/api/query"
import { IEmailFormTypes } from "@/features/contact-forms/email-form/types"

import s from "../styles.module.scss"

export const EmailForm = () => {
  const { t, lang } = useTranslation("common")
  const router = useRouter()
  const pathMap: Record<string, string> = {
    "/research": t("forms.page.research"),
    "/interise-club": "InteriseClub",
    "/about": t("forms.page.about"),
    "/case": t("forms.page.cases"),
    "/main": t("forms.page.home"),
    "/": t("forms.page.home"),
  }

  const emailFormSchema = yup.object().shape({
    name: yup.string().required(t("forms.validation.name_required")),
    phone: yup.string().required(t("forms.validation.phone_required")),
    message: yup
      .string()
      .required(t("forms.validation.email_required"))
      .email(t("forms.validation.email_invalid")),
    check: yup.boolean().oneOf([true], t("forms.validation.privacy_required")),
    newsletterConsent: yup.boolean(),
  })

  const {
    reset,
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<any>({
    mode: "onSubmit",
    resolver: yupResolver(emailFormSchema),
    defaultValues: {
      message: "",
    },
  })

  const { mutate, isPending } = useSubmitFormQuery(() => {
    reset({
      name: "",
      surname: "",
      message: "",
      phone: "",
      check: false,
      newsletterConsent: false,
    })
  })
  const onSubmit = (data: IEmailFormTypes) => {
    const currentPath = router.asPath

    const matchedKey = Object.keys(pathMap)
      .sort((a, b) => b.length - a.length)
      .find((key) => currentPath.startsWith(key))

    const pageText = matchedKey ? pathMap[matchedKey] : t("forms.page.home")

    mutate({
      message:
        `<b>📩 Новая заявка с сайта!</b>\n\n` +
        `<b>🌐 Страница:</b> ${pageText}\n` +
        `<b>👤 Имя:</b> ${data.name}\n` +
        `<b>👥 Фамилия:</b> ${data.surname || "-"}\n` +
        `<b>📞 Телефон:</b> ${data.phone}\n` +
        `<b>💬 Способ связи:</b> ${data.message}\n` +
        `<b>📧 Согласие на рассылку:</b> ${
          data.newsletterConsent ? "Да" : "Нет"
        }\n`,
      formData: {
        name: data.name,
        surname: data.surname,
        phone: data.phone,
        contactMethod: data.message,
        source: pageText,
        newsletterConsent: data.newsletterConsent,
      },
    })
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Flex gap={"8px"} wrap={"wrap"}>
        <Controller
          name={"name"}
          control={control}
          render={({ field, fieldState }) => (
            <Input.Wrapper
              className={s.inputWrapper}
              error={fieldState.error?.message}
            >
              <Input placeholder={t("forms.name_placeholder")} {...field} />
            </Input.Wrapper>
          )}
        />

        <Controller
          name={"surname"}
          control={control}
          render={({ field, fieldState }) => (
            <Input.Wrapper
              className={s.inputWrapper}
              error={fieldState.error?.message}
            >
              <Input placeholder={t("forms.surname_placeholder")} {...field} />
            </Input.Wrapper>
          )}
        />

        <Controller
          name={"phone"}
          control={control}
          render={({ field, fieldState }) => (
            <Input.Wrapper
              className={s.inputWrapper}
              error={fieldState.error?.message}
            >
              <Input
                inputMode="tel"
                autoComplete="off"
                value={field.value}
                component={IMaskInput}
                mask="+7 (000) 000 00 00"
                placeholder={"+7 (000) 000 00 00"}
                onAccept={(value: any) => {
                  field.onChange?.(value)
                }}
                onChange={(value: any) => {
                  field.onChange?.(value)
                }}
              />
            </Input.Wrapper>
          )}
        />

        <Controller
          name={"message"}
          control={control}
          render={({ field, fieldState }) => (
            <Input.Wrapper
              className={s.inputWrapper}
              error={fieldState.error?.message}
            >
              <Input
                type="email"
                placeholder={t("forms.email_placeholder")}
                {...field}
              />
            </Input.Wrapper>
          )}
        />

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
                    link1: (
                      <a
                        href={
                          lang === "en"
                            ? "/Privacy_Policy.pdf"
                            : "/Политика_конфиденциальности.pdf"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    ),
                    link2: (
                      <a
                        href={
                          lang === "en"
                            ? "/User_Agreement.pdf"
                            : "/Пользовательское_соглашения.pdf"
                        }
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
                        href={
                          lang === "en"
                            ? "/Consent_to_Receive_Newsletters.pdf"
                            : "/Согласие_на_получение_рассылок.pdf"
                        }
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
      </Flex>

      <Button
        h={44}
        w={233}
        type={"submit"}
        className={"btn-filled__black"}
        loading={isPending}
        disabled={!isDirty}
      >
        {t("forms.submit_button")}
      </Button>
    </form>
  )
}
