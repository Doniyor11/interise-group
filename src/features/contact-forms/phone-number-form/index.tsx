import { Button, Flex, Input, Textarea } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { IMaskInput } from "react-imask"

import { useSendMessageQuery } from "@/features/contact-forms/api/query"

import s from "../styles.module.scss"
import { IPhoneNumberFormTypes } from "./types.ts"

export const PhoneNumberForm = () => {
  const matches = useMediaQuery("(max-width: 576px)")

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm<IPhoneNumberFormTypes>()

  const { mutate, isPending } = useSendMessageQuery(() => {
    reset({
      fullName: "",
      phoneNumber: "",
      message: "",
    })
  })

  const onSubmit = (data: IPhoneNumberFormTypes) => {
    mutate(
      `<b>Ma’lumot:</b>\n` +
        `<b>Ism:</b> ${data.fullName}\n` +
        `<b>Telefon raqam:</b> ${data.phoneNumber}\n` +
        `<b>Message:</b> ${data.message}\n`,
    )
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Flex
        gap={matches ? 16 : 20}
        mb={16}
        direction={matches ? "column" : "row"}
      >
        <Controller
          name={"fullName"}
          control={control}
          render={({ field }) => (
            <Input.Wrapper label={"Ism"} className={s.inputWrapper}>
              <Input required placeholder={"Enter your name"} {...field} />
            </Input.Wrapper>
          )}
        />

        <Controller
          name={"phoneNumber"}
          control={control}
          render={({ field }) => (
            <Input.Wrapper label={"Telefon raqam"} className={s.inputWrapper}>
              <Input
                required
                inputMode="tel"
                autoComplete="off"
                value={field.value}
                component={IMaskInput}
                mask="+998 00 000 0000"
                placeholder={"+998 00 000 0000"}
                onAccept={(value: any) => {
                  field.onChange?.(value)
                }}
              />
            </Input.Wrapper>
          )}
        />
      </Flex>

      <Controller
        name={"message"}
        control={control}
        render={({ field }) => (
          <Textarea
            required
            label={"Message"}
            placeholder={"Type your message here"}
            className={s.textarea}
            {...field}
          />
        )}
      />

      <Flex justify={"flex-end"} mt={32}>
        <Button
          w={160}
          type={"submit"}
          className={"btn-filled__back"}
          loading={isPending}
          disabled={!isDirty || !isValid}
        >
          Send
        </Button>
      </Flex>
    </form>
  )
}
