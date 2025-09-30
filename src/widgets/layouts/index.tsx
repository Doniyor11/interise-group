import { Loader } from "@mantine/core"
import React, { ReactNode } from "react"

import { FormModal } from "@/widgets/form-modal/ui"
import { Navbar } from "@/widgets/layouts/navbar"

interface ILayout {
  children?: ReactNode
}

export const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Navbar />
      {children ? children : <Loader />}
      {/*<Footer />*/}
      <FormModal />
    </>
  )
}
