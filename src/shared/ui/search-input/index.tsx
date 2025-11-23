import { Input, InputProps, MantineStyleProps } from "@mantine/core"
import React, { FC } from "react"

import IconSearch from "@/shared/assets/images/icons/icon-search.svg"

import s from "./styles.module.scss"

type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  MantineStyleProps &
  InputProps

export const SearchInput: FC<SearchInputProps> = ({ ...props }) => {
  return (
    <>
      <Input
        leftSection={<IconSearch />}
        className={s.input}
        placeholder={"Поиск..."}
        {...props}
      />
    </>
  )
}
