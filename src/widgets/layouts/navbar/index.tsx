import { ActionIcon, Burger, Button, Drawer, Flex, Select } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"

import { MenuData } from "@/widgets/layouts/navbar/libs.ts"

import IconClose from "@/shared/assets/images/icons/icon-close.svg"
import IconLangArrow from "@/shared/assets/images/interise-group/lang-arrow.svg"
import IconGlobal from "@/shared/assets/images/interise-group/language.svg"
import IconLogo from "@/shared/assets/images/interise-group/logo.svg"
import { onLinkClick } from "@/shared/libs/scroll.ts"

import s from "./styles.module.scss"

export const Navbar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const matches = useMediaQuery("(max-width: 1040px)")

  return (
    <>
      <div className={cx(s.navbarWrapper)}>
        <Link href={"/"} className={s.logo}>
          <IconLogo />
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
                <Link href={item?.path}>{item?.text}</Link>
              </li>
            )
          })}
        </ul>

        {!matches && (
          <Flex gap={5} align={"center"}>
            <Select
              className={s.lang}
              defaultValue={"Ru"}
              data={["Ru", "Eng"]}
              leftSection={<IconGlobal />}
              rightSection={<IconLangArrow />}
              classNames={{
                option: s.selectOption,
              }}
            />
            <Button
              bg={"#0076FE"}
              color={"#FFF"}
              radius={8}
              h={"44px"}
              onClick={() => onLinkClick("contacts")}
            >
              Связаться с нами
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
              className={s.lang}
              defaultValue={"Uz"}
              data={["Ru", "Uz"]}
              leftSection={<IconGlobal />}
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
                  {item?.text}
                </Link>
              )
            })}
          </div>
        </div>
      </Drawer>
    </>
  )
}
