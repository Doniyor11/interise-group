import { Box } from "@mantine/core"
import React from "react"

import { Footer } from "@/widgets/layouts/footer"

export default function CookiesPolicyPage() {
  return (
    <>
      <Box p={"150px 64px 100px"} className={"container"}>
        <h1>Политика использования файлов cookie</h1>
        <p>
          Мы используем файлы cookie для обеспечения корректной работы сайта,
          аналитики и персонализации.
        </p>

        <h2>Какие cookie мы используем</h2>
        <ul style={{ paddingLeft: "20px", margin: "20px 0" }}>
          <li>
            <strong>Необходимые</strong> — обеспечивают базовые функции (сессии,
            безопасность, навигация).
          </li>
          <li>
            <strong>Аналитические</strong> — помогают понять, как пользователи
            взаимодействуют с сайтом.
          </li>
          <li>
            <strong>Маркетинговые</strong> — используются для
            персонализированной рекламы.
          </li>
        </ul>

        <h2>Как управлять cookie</h2>
        <p>
          Вы можете изменить или отозвать своё согласие в настройках браузера
          или через баннер cookie.
        </p>

        <h2>Контакты</h2>
        <p>
          Если у вас есть вопросы о нашей политике cookie, свяжитесь с нами по
          адресу:{" "}
          <a href="mailto:request@interisegroup.com">
            request@interisegroup.com
          </a>
        </p>
      </Box>
      <Box pb={65} className={"container"}>
        <Footer />
      </Box>
    </>
  )
}
