import { Box, Button, Input, Select, Text } from "@mantine/core"
import cx from "clsx"
import React from "react"
import { IMaskInput } from "react-imask"

import s from "./styles.module.scss"

export const SignupEvent = () => {
  return (
    <div className={cx(s.container, "container")}>
      <div className={s.sectionWrapper}>
        <Box maw={472}>
          <Text className={s.title}>Отправить запрос</Text>
          <Text className={s.subtitle}>
            На приглашение практиков и экспертов компании для выступления на
            вашем событии или проведения стратегической сессии.
          </Text>
          <form className={s.form}>
            <div className={s.inputs}>
              <Input className={s.input} placeholder={"Ваше имя"} />
              <Input className={s.input} placeholder={"Компания"} />
              <Input
                inputMode="tel"
                autoComplete="off"
                component={IMaskInput}
                mask="+7 (000) 000 00 00"
                placeholder={"+7 (000) 000 00 00"}
                className={s.input}
              />
              <Input className={s.input} placeholder={"Ваш Telegram"} />
              <Select
                className={s.select}
                placeholder={"Выберите мероприятие"}
                data={[
                  "Демо-день с Дмитрием Вакиным Масштабирование и Go-Global",
                ]}
              />
            </div>
            <Button className={s.btn}>Записаться</Button>
          </form>
        </Box>
      </div>
    </div>
  )
}
