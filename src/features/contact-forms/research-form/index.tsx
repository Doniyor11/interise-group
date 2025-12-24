import { Box, Button, Checkbox, Flex, Input, Modal, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Trans from "next-translate/Trans"
import useTranslation from "next-translate/useTranslation"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { IMaskInput } from "react-imask"

import { useSubmitFormQuery } from "@/features/contact-forms/api/query"
import { useContactFormsStore } from "@/features/contact-forms/model"
import { IResearchForm } from "@/features/contact-forms/research-form/types.ts"

import Logo from "@/shared/assets/images/interise-group/logo.svg"

import s from "../styles.module.scss"

export const ResearchForm = () => {
  const { t, lang } = useTranslation("common")
  const matches = useMediaQuery("(max-width: 720px)")

  const { researchForm, setResearchForm } = useContactFormsStore()
  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm<IResearchForm>()

  const onClose = () => {
    reset({
      name: "",
      phone: "",
      check: false,
    })
  }

  const {
    mutate,
    isPending,
    isSuccess,
    reset: resetQuery,
  } = useSubmitFormQuery(() => onClose)

  const onSubmit = (data: IResearchForm) => {
    mutate({
      message:
        `<b>${t("forms.research_form.telegram.title")}</b>\n` +
        `<b>${researchForm}</b>\n` +
        `<b>${t("forms.research_form.telegram.name")}</b> ${data.name}\n` +
        `<b>${t("forms.research_form.telegram.phone")}</b> ${data.phone}\n`,
      formData: {
        name: data.name,
        phone: data.phone,
        source: researchForm || t("forms.page.research"),
      },
    })
  }

  return (
    <Modal
      centered
      size={657}
      padding={0}
      radius={24}
      withCloseButton={false}
      opened={!!researchForm}
      onClose={() => {
        onClose()
        resetQuery()
        setResearchForm(null)
      }}
    >
      {!isSuccess ? (
        <div className={s.modalWrapper}>
          <Flex mb={20} className={s.head}>
            <Box maw={490}>
              <Text className={s.modalLabel}>
                {t("forms.research_form.label")}
              </Text>
              <Text className={s.modalTitle}>{researchForm}</Text>
              <Text className={s.modalSubtitle}>
                {t("forms.research_form.subtitle")}
              </Text>
            </Box>
            <Logo />
          </Flex>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <Flex gap={12} direction={matches ? "column" : "row"}>
              <Controller
                name={"name"}
                control={control}
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
            </Flex>
            <Flex className={s.footer}>
              <Controller
                name={"check"}
                control={control}
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
                w={290}
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
