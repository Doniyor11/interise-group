import { Button, Checkbox, Flex, Input, Select } from "@mantine/core"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { IMaskInput } from "react-imask"

import { useSendMessageQuery } from "@/features/contact-forms/api/query"
import { IEmailFormTypes } from "@/features/contact-forms/email-form/types"

import s from "../styles.module.scss"

export const EmailForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm<IEmailFormTypes>()

  const { mutate, isPending } = useSendMessageQuery(() => {
    reset({
      fullName: "",
      email: "",
      message: "",
      phone: "",
    })
  })

  const onSubmit = (data: IEmailFormTypes) => {
    mutate(
      `<b>Ma’lumot:</b>\n` +
        `<b>Ism:</b> ${data.fullName}\n` +
        `<b>Email:</b> ${data.email}\n` +
        `<b>Message:</b> ${data.message}\n`,
    )
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Flex gap={"8px"} wrap={"wrap"}>
        <Controller
          name={"fullName"}
          control={control}
          render={({ field }) => (
            <Input.Wrapper className={s.inputWrapper}>
              <Input
                required
                type={"fullName"}
                placeholder={"Ваше имя"}
                {...field}
              />
            </Input.Wrapper>
          )}
        />

        <Controller
          name={"fullName"}
          control={control}
          render={({ field }) => (
            <Input.Wrapper className={s.inputWrapper}>
              <Input required placeholder={"Компания"} {...field} />
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
              />
            </Input.Wrapper>
          )}
        />

        <Controller
          name={"email"}
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

        <Checkbox
          defaultChecked
          classNames={{
            root: s.checkboxRoot,
            label: s.checkboxLabel,
            input: s.checkboxInput,
          }}
          label="Я ознакомлен и согласен с условиями обработки данных"
        />
      </Flex>

      <Flex justify={"flex-end"} mt={32}>
        <Button
          fullWidth
          type={"submit"}
          className={"btn-filled__black"}
          loading={isPending}
          disabled={!isDirty || !isValid}
        >
          Записаться
        </Button>
      </Flex>
    </form>
  )
}
