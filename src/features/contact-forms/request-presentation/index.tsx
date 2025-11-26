import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Modal,
  Select,
  Text,
} from "@mantine/core"
import Trans from "next-translate/Trans"
import useTranslation from "next-translate/useTranslation"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { IMaskInput } from "react-imask"

import { useSendMessageQuery } from "@/features/contact-forms/api/query"
import { IEmailFormTypes } from "@/features/contact-forms/email-form/types"
import { useContactFormsStore } from "@/features/contact-forms/model"

import Logo from "@/shared/assets/images/interise-group/logo.svg"

import s from "../styles.module.scss"

export const RequestPresentation = () => {
  const { t, lang } = useTranslation("common")
  const { requestPresentation, setRequestPresentation } = useContactFormsStore()

  const {
    reset,
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<IEmailFormTypes>({
    mode: "onChange",
  })

  const onClose = () => {
    reset({
      name: "",
      surname: "",
      message: "",
      phone: "",
      check: false,
    })
    setRequestPresentation(false)
  }

  const {
    mutate,
    isPending,
    isSuccess,
    reset: queryReset,
  } = useSendMessageQuery(() => onClose)

  const onSubmit = (data: IEmailFormTypes) => {
    mutate(
      `<b>📩 Новая заявка с сайта!</b>\n\n` +
        `<b>🌐 Страница:</b> ${
          t("forms.page.cases") +
          " " +
          t("forms.presentation.requestPresentation")
        }\n` +
        `<b>👤 Имя:</b> ${data.name}\n` +
        `<b>👥 Фамилия:</b> ${data.surname}\n` +
        `<b>📞 Телефон:</b> ${data.phone}\n` +
        `<b>💬 Способ связи:</b> ${data.message}\n`,
    )
  }

  return (
    <Modal
      centered
      size={657}
      padding={0}
      radius={24}
      withCloseButton={false}
      opened={requestPresentation}
      onClose={() => {
        onClose()
        queryReset()
      }}
    >
      {!isSuccess ? (
        <div className={s.modalWrapper}>
          <Flex mb={20} className={s.head}>
            <Box maw={372}>
              <Text className={s.modalTitle}>
                {t("forms.presentation.title")}
              </Text>
              <Text className={s.modalSubtitle}>
                {t("forms.presentation.subtitle")}
              </Text>
            </Box>
            <Logo />
          </Flex>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <Flex gap={"8px"} wrap={"wrap"}>
              <Controller
                name={"name"}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input.Wrapper className={s.inputWrapper}>
                    <Input
                      required
                      placeholder={t("forms.name_placeholder")}
                      {...field}
                    />
                  </Input.Wrapper>
                )}
              />

              <Controller
                name={"surname"}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input.Wrapper className={s.inputWrapper}>
                    <Input
                      required
                      placeholder={t("forms.surname_placeholder")}
                      {...field}
                    />
                  </Input.Wrapper>
                )}
              />

              <Controller
                name={"phone"}
                control={control}
                rules={{ required: true }}
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
                rules={{ required: true }}
                render={({ field }) => (
                  <Input.Wrapper className={s.inputWrapper}>
                    <Select
                      required
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
            </Flex>
            <Flex className={s.footer}>
              <Controller
                name={"check"}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Checkbox
                    size={"md"}
                    required
                    className={s.checkbox}
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
                  />
                )}
              />

              <Button
                h={44}
                w={233}
                type={"submit"}
                className={"btn-filled__black"}
                loading={isPending}
                disabled={!isDirty || !isValid}
              >
                {t("forms.submit_button")}
              </Button>
            </Flex>
          </form>
        </div>
      ) : (
        <div className={s.modalWrapper}>
          <Flex className={s.head}>
            <Box maw={400}>
              <Text className={s.modalTitle}>
                {t("forms.research_form.success_title")}
              </Text>
              <Text className={s.modalSubtitle}>
                {t("forms.research_form.success_subtitle")}
              </Text>
            </Box>
            <Logo />
          </Flex>
        </div>
      )}
    </Modal>
  )
}
