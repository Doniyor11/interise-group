import { Box } from "@mantine/core"
import React from "react"

import { Footer } from "@/widgets/layouts/footer"

import { ResearchMainBanner, ResearchTypes } from "@/features/research"

const ResearchPage = () => {
  return (
    <>
      <ResearchMainBanner />
      <ResearchTypes />
      <Box pb={65} className={"container"}>
        <Footer />
      </Box>
    </>
  )
}

export default ResearchPage
