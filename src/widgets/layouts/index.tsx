import { Loader } from "@mantine/core"
import React, { ReactNode } from "react"

import { CookiesPopup } from "@/widgets"
import { Navbar } from "@/widgets/layouts/navbar"

interface ILayout {
  children?: ReactNode
}

export const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Navbar />
      {children ? children : <Loader />}
      <CookiesPopup />
    </>
  )
}
