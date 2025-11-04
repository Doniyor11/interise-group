import { Button, Checkbox, Flex, Input, Select } from "@mantine/core"
import { useRouter } from "next/router"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { IMaskInput } from "react-imask"

import { useSendMessageQuery } from "@/features/contact-forms/api/query"
import { IEmailFormTypes } from "@/features/contact-forms/email-form/types"

import s from "../styles.module.scss"

export const EmailForm = () => {
  const router = useRouter()
  const pathMap: Record<string, string> = {
    "/": "Главная",
    "/main": "Главная",
    "/about": "О нас",
    "/case": "Кейсы",
    "/research": "Исследования",
  }
  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm<IEmailFormTypes>()

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
    mutate(
      `<b>📩 Новая заявка с сайта!</b>\n` +
        `<b>🌐 Страница:</b> ${
          pathMap[router.pathname] ? pathMap[router.pathname] : "Главная"
        }\n` +
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
          render={({ field }) => (
            <Input.Wrapper className={s.inputWrapper}>
              <Input required placeholder={"Ваше имя"} {...field} />
            </Input.Wrapper>
          )}
        />

        <Controller
          name={"surname"}
          control={control}
          render={({ field }) => (
            <Input.Wrapper className={s.inputWrapper}>
              <Input required placeholder={"Фамилия"} {...field} />
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
          render={({ field }) => (
            <Input.Wrapper className={s.inputWrapper}>
              <Select
                required
                placeholder="Как с вами связаться"
                {...field}
                data={["Telegram", "What’s App", "Звонок"]}
              />
            </Input.Wrapper>
          )}
        />

        <Controller
          name={"check"}
          control={control}
          render={({ field }) => (
            <Checkbox
              required
              m={"20px 0 16px"}
              classNames={{
                root: s.checkboxRoot,
                label: s.checkboxLabel,
                input: s.checkboxInput,
              }}
              label="Я ознакомлен и согласен с условиями обработки данных"
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
        disabled={!isDirty || !isValid}
      >
        Отправить
      </Button>
    </form>
  )
}
