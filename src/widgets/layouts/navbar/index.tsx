import { ActionIcon, Burger, Button, Drawer, Flex, Select } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import dayjs from "dayjs"
import "dayjs/locale/en"
import "dayjs/locale/ru"
import setLanguage from "next-translate/setLanguage"
import useTranslation from "next-translate/useTranslation"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

import { MenuData } from "@/widgets/layouts/navbar/libs.ts"

import IconClose from "@/shared/assets/images/icons/icon-close.svg"
import IconLangArrow from "@/shared/assets/images/interise-group/lang-arrow.svg"
import IconGlobal from "@/shared/assets/images/interise-group/language.svg"
import IconLogo from "@/shared/assets/images/interise-group/logo.svg"
import IconLogoRu from "@/shared/assets/images/interise-group/logo_ru.svg"
import { onLinkClick } from "@/shared/libs/scroll.ts"

import s from "./styles.module.scss"

export const Navbar = () => {
  const router = useRouter()
  const { lang, t } = useTranslation("common")
  const [isOpen, setIsOpen] = useState(false)
  const [isLang, setIsLang] = useState("ru")

  const matches = useMediaQuery("(max-width: 1040px)")

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") || "ru"
    if (storedLang !== lang) {
      setLanguage(storedLang)
    }

    setIsLang(storedLang)
  }, [lang])

  useEffect(() => {
    dayjs.locale(isLang)
  }, [isLang])

  return (
    <>
      <div className={cx(s.navbarWrapper)}>
        <Link href={"/"} className={s.logo}>
          {lang === "ru" ? <IconLogoRu /> : <IconLogo />}
        </Link>
        <ul className={s.menu}>
          {MenuData?.map((item, index) => {
            const pathName = router.pathname
            return (
              <li
                key={index}
                className={cx(s.link, {
                  [s.active]: item?.path === pathName,
                })}
              >
                <Link href={item?.path}>{t(item?.key)}</Link>
              </li>
            )
          })}
        </ul>

        {!matches && (
          <Flex gap={5} align={"center"}>
            <Select
              allowDeselect={false}
              className={s.lang}
              defaultValue={"ru"}
              data={["ru", "en"]}
              rightSection={<IconLangArrow />}
              classNames={{
                option: s.selectOption,
              }}
              value={isLang}
              onChange={(e: any) => {
                setLanguage(e)
                setIsLang(e)
                localStorage.setItem("lang", e)
                dayjs.locale(e)
              }}
            />
            <Button
              bg={"#0076FE"}
              color={"#FFF"}
              radius={8}
              h={"44px"}
              onClick={() => onLinkClick("contacts")}
            >
              {t("navbar.contact_us")}
            </Button>
          </Flex>
        )}
        {matches && (
          <Burger
            color={"#0076FE"}
            opened={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>

      <Drawer
        padding={0}
        size={"90%"}
        opened={isOpen}
        position={"right"}
        withCloseButton={false}
        onClose={() => setIsOpen(false)}
      >
        <div className={s.mobileDrawer}>
          <div className={s.drawerHead}>
            <Select
              allowDeselect={false}
              className={s.lang}
              defaultValue={"ru"}
              data={["ru", "en"]}
              leftSection={<IconGlobal />}
              rightSection={<IconLangArrow />}
              classNames={{
                option: s.selectOption,
              }}
              value={isLang}
              onChange={(e: any) => {
                setLanguage(e)
                setIsLang(e)
                localStorage.setItem("lang", e)
                dayjs.locale(e)
              }}
            />
            <ActionIcon
              variant={"transparent"}
              onClick={() => setIsOpen(false)}
            >
              <IconClose />
            </ActionIcon>
          </div>
          <div className={s.drawerBody}>
            {MenuData?.map((item, index) => {
              const pathName = router.pathname
              return (
                <Link
                  key={index}
                  className={cx(s.link, { [s.active]: item.path === pathName })}
                  href={item?.path}
                  onClick={() => {
                    setIsOpen(false)
                  }}
                >
                  {t(item?.key)}
                </Link>
              )
            })}
          </div>
        </div>
      </Drawer>
    </>
  )
}
