import { Input } from "@mantine/core"
import React from "react"

import IconSearch from "@/shared/assets/images/icons/icon-search.svg"

import s from "./styles.module.scss"

export const SearchInput = () => {
  return (
    <>
      <Input
        leftSection={<IconSearch />}
        className={s.input}
        placeholder={"Поиск..."}
      />
    </>
  )
}
