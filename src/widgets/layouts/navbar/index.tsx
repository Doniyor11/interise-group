import {
  ActionIcon,
  Burger,
  Button,
  Collapse,
  Drawer,
  Flex,
  Menu,
  Select,
  Text,
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

import { MenuData } from "@/widgets/layouts/navbar/libs.ts"

import IconDown from "@/shared/assets/images/icons/icon-chevron-down.svg"
import IconClose from "@/shared/assets/images/icons/icon-close.svg"
import IconGlobal from "@/shared/assets/images/interise-group/language.svg"
import IconLogo from "@/shared/assets/images/interise-group/logo.svg"

import s from "./styles.module.scss"

export const Navbar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [childMenu, setChildMenu] = useState<string>("")
  const matches = useMediaQuery("(max-width: 576px)")
  return (
    <>
      <div className={cx(s.navbarWrapper, "container")}>
        <Link href={"/"} className={s.logo}>
          <IconLogo />
        </Link>

        <ul className={s.menu}>
          {MenuData?.map((item, index) => {
            const pathName = router.pathname

            return item.children.length === 0 ? (
              <li
                key={index}
                className={cx(s.link, {
                  [s.active]: item?.path === pathName,
                })}
              >
                <Link href={item?.path}>{item?.text}</Link>
              </li>
            ) : (
              <Menu
                trigger={"hover"}
                position={"bottom"}
                radius={12}
                offset={16}
              >
                <Menu.Target>
                  <Text
                    className={cx(s.parentLink, {
                      [s.active]: pathName.split("/")[1] === item?.path,
                    })}
                  >
                    {item?.text} <IconDown />
                  </Text>
                </Menu.Target>
                <Menu.Dropdown>
                  {item?.children?.map((child, index) => (
                    <Menu.Item
                      className={cx(s.menuItem, {
                        [s.active]: child.path === pathName,
                      })}
                      key={index}
                      component={Link}
                      href={child.path}
                    >
                      {child.text}
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
            )
          })}
        </ul>

        {/*<Select*/}
        {/*  className={s.lang}*/}
        {/*  defaultValue={"Uz"}*/}
        {/*  data={["Ru", "Uz"]}*/}
        {/*  leftSection={<IconGlobal />}*/}
        {/*/>*/}
        <Flex gap={5} align={"center"}>
          <Button
            leftSection={<IconGlobal />}
            bg={"#2C2C2C"}
            color={"#FFF"}
            radius={8}
            h={"44px"}
          >
            RU/ENG
          </Button>
          <Button bg={"#0076FE"} color={"#FFF"} radius={8} h={"44px"}>
            Связаться с нами
          </Button>
        </Flex>
        {matches && (
          <Burger opened={isOpen} onClick={() => setIsOpen(!isOpen)} />
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
              return item.children.length === 0 ? (
                <Link
                  key={index}
                  className={cx(s.link, { [s.active]: item.path === pathName })}
                  href={item?.path}
                  onClick={() => {
                    setChildMenu("")
                    setIsOpen(false)
                  }}
                >
                  {item?.text}
                </Link>
              ) : (
                <>
                  <Text
                    key={index}
                    onClick={() =>
                      setChildMenu(childMenu === item.path ? "" : item.path)
                    }
                    className={cx(s.link, {
                      [s.active]: pathName.split("/")[1] === item?.path,
                    })}
                  >
                    {item?.text}
                    <IconDown />
                  </Text>
                  <Collapse
                    in={
                      childMenu === item.path ||
                      pathName.split("/")[1] === item?.path
                    }
                    className={s.collapse}
                  >
                    {item?.children?.map((child, index) => (
                      <Link
                        key={index}
                        href={child?.path}
                        className={cx(s.link, {
                          [s.active]: child.path === pathName,
                        })}
                        onClick={() => {
                          setChildMenu("")
                          setIsOpen(false)
                        }}
                      >
                        {child?.text}
                      </Link>
                    ))}
                  </Collapse>
                </>
              )
            })}
          </div>
        </div>
      </Drawer>
    </>
  )
}
