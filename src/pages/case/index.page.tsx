import { Box } from "@mantine/core"
import React from "react"

import { Footer } from "@/widgets/layouts/footer"

import { CaseList, CaseMainBanner } from "@/features/case"

const CasePage = () => {
  return (
    <>
      <CaseMainBanner />
      <CaseList />
      <Box pb={65} className={"container"}>
        <Footer />
      </Box>
    </>
  )
}

export default CasePage
