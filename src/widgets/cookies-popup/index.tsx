import { Button, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Link from "next/link"
import React, { useEffect, useState } from "react"

import s from "./styles.module.scss"

export const CookiesPopup = () => {
  const matches = useMediaQuery("(max-width: 576px)")
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent")
    if (!accepted) {
      const timer = setTimeout(() => {
        setVisible(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all")
    setVisible(false)
  }

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", "necessary")
    setVisible(false)
  }

  if (!visible) return null
  return (
    <div className={s.card}>
      <h3>Использование файлов cookie</h3>
      <Text>
        Мы используем cookie-файлы, необходимые для работы сайта, а также
        аналитические и маркетинговые cookie. Это помогает улучшать
        функциональность сайта и показывать релевантный контент. Подробнее — в
        нашей{" "}
        <Link
          href="/cookies-policy"
          style={{ color: "#7c4dff", textDecoration: "underline" }}
        >
          Политике использования cookie
        </Link>
        <Flex
          gap={matches ? 8 : 24}
          mt={matches ? 24 : 32}
          direction={matches ? "column" : "row"}
        >
          <Button className={s.btn} onClick={acceptAll}>
            Принять все
          </Button>
          <Button className={s.btn} onClick={acceptNecessary}>
            Только необходимые
          </Button>
        </Flex>
      </Text>
    </div>
  )
}
