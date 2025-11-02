import { Box } from "@mantine/core"
import React from "react"

import { Footer } from "@/widgets/layouts/footer"

import { SingleResearchBanner } from "@/features/research"

const SingleResearch = () => {
  return (
    <>
      <SingleResearchBanner />

      <Box pb={65} className={"container"}>
        <Footer />
      </Box>
    </>
  )
}

export default SingleResearch
