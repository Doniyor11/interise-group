import { Loader } from "@mantine/core"
import AOS from "aos"
import React, { ReactNode, useEffect } from "react"

import { CookiesPopup } from "@/widgets"
import { Navbar } from "@/widgets/layouts/navbar"

interface ILayout {
  children?: ReactNode
}

export const Layout = ({ children }: ILayout) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])
  return (
    <>
      <Navbar />
      {children ? children : <Loader />}
      <CookiesPopup />
    </>
  )
}
