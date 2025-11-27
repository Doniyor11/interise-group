import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button, Checkbox, Flex, Input, Select } from "@mantine/core"
import Trans from "next-translate/Trans"
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { IMaskInput } from "react-imask"

import { useSendMessageQuery } from "@/features/contact-forms/api/query"
import { IEmailFormTypes } from "@/features/contact-forms/email-form/types"

import s from "../styles.module.scss"

export const EmailForm = () => {
  const { t, lang } = useTranslation("common")
  const router = useRouter()
  const pathMap: Record<string, string> = {
    "/research": t("forms.page.research"),
    "/interise-club": "Interise Club",
    "/about": t("forms.page.about"),
    "/case": t("forms.page.cases"),
    "/main": t("forms.page.home"),
    "/": t("forms.page.home"),
  }

  const emailFormSchema = yup.object().shape({
    name: yup.string().required(t("forms.validation.name_required")),
    surname: yup.string().required(t("forms.validation.surname_required")),
    phone: yup.string().required(t("forms.validation.phone_required")),
    message: yup
      .string()
      .required(t("forms.validation.contact_method_required")),
    check: yup.boolean().oneOf([true], t("forms.validation.privacy_required")),
  })

  const {
    reset,
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<any>({
    mode: "onSubmit",
    resolver: yupResolver(emailFormSchema),
  })

  const { mutate, isPending } = useSendMessageQuery(() => {
    reset({
      name: "",
      surname: "",
      message: "",
      phone: "",
      check: false,
    })
  })
  const onSubmit = (data: IEmailFormTypes) => {
    const currentPath = router.asPath

    const matchedKey = Object.keys(pathMap)
      .sort((a, b) => b.length - a.length)
      .find((key) => currentPath.startsWith(key))

    const pageText = matchedKey ? pathMap[matchedKey] : t("forms.page.home")

    mutate(
      `<b>📩 Новая заявка с сайта!</b>\n\n` +
        `<b>🌐 Страница:</b> ${pageText}\n` +
        `<b>👤 Имя:</b> ${data.name}\n` +
        `<b>👥 Фамилия:</b> ${data.surname}\n` +
        `<b>📞 Телефон:</b> ${data.phone}\n` +
        `<b>💬 Способ связи:</b> ${data.message}\n`,
    )
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
              <Select
                placeholder={t("forms.contact_method_placeholder")}
                {...field}
                data={[
                  t("forms.contact_method.telegram"),
                  t("forms.contact_method.whatsapp"),
                  t("forms.contact_method.call"),
                ]}
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
