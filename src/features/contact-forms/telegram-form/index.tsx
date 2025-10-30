import { Button, Flex, Input, Textarea } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React from "react"
import { Controller, useForm } from "react-hook-form"

import { useSendMessageQuery } from "@/features/contact-forms/api/query"
import { ITelegramFormTypes } from "@/features/contact-forms/telegram-form/types.ts"

import s from "../styles.module.scss"

export const TelegramForm = () => {
  const matches = useMediaQuery("(max-width: 576px)")

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm<ITelegramFormTypes>()

  const { mutate, isPending } = useSendMessageQuery(() => {
    reset({
      fullName: "",
      telegramUsername: "",
      message: "",
    })
  })

  const onSubmit = (data: ITelegramFormTypes) => {
    mutate(
      `<b>Ma’lumot:</b>\n` +
        `<b>Ism:</b> ${data.fullName}\n` +
        `<b>Username:</b> ${data.telegramUsername}\n` +
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
          name={"telegramUsername"}
          control={control}
          render={({ field }) => (
            <Input.Wrapper label={"Username"} className={s.inputWrapper}>
              <Input
                required
                placeholder="@username"
                minLength={5}
                {...field}
                value={field.value}
                onChange={(e) => {
                  let v = e.target.value.replace(/[^a-zA-Z0-9_@]/g, "")
                  if (v.includes("@")) {
                    v = "@" + v.replace(/@/g, "").replace(/^@+/, "")
                  }
                  field.onChange(v)
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
