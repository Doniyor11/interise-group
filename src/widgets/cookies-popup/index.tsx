import { Button, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import useTranslation from "next-translate/useTranslation"
import Link from "next/link"
import React, { useEffect, useState } from "react"

import s from "./styles.module.scss"

export const CookiesPopup = () => {
  const { t } = useTranslation("common")
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
      <h3>{t("cookies.title")}</h3>
      <Text>
        {t("cookies.description")}{" "}
        <Link
          href="/cookies-policy"
          style={{ color: "#7c4dff", textDecoration: "underline" }}
        >
          {t("cookies.policy_link")}
        </Link>
        <Flex
          gap={matches ? 8 : 24}
          mt={matches ? 24 : 32}
          direction={matches ? "column" : "row"}
        >
          <Button className={s.btn} onClick={acceptAll}>
            {t("cookies.accept_all")}
          </Button>
          <Button className={s.btn} onClick={acceptNecessary}>
            {t("cookies.accept_necessary")}
          </Button>
        </Flex>
      </Text>
    </div>
  )
}
