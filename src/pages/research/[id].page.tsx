import { Box } from "@mantine/core"
import React from "react"

import { Footer } from "@/widgets/layouts/footer"

import {
  CustomersChoice,
  InteractiveDashboard,
  PurchasingAccess,
  ScopeResearch,
  SingleResearchBanner,
  WhyCustomersLeaving,
} from "@/features/research"

const SingleResearch = () => {
  return (
    <>
      <SingleResearchBanner />
      <WhyCustomersLeaving />
      <CustomersChoice />
      <ScopeResearch />
      <InteractiveDashboard />
      <PurchasingAccess />
      <Box pb={65} className={"container"}>
        <Footer />
      </Box>
    </>
  )
}

export default SingleResearch
