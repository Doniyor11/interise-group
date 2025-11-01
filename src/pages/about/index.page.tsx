import { Box } from "@mantine/core"
import React from "react"

import { Footer } from "@/widgets/layouts/footer"

import { AboutDirection, AboutMainBanner, TeamSection } from "@/features/about"

const AboutPage = () => {
  return (
    <>
      <AboutMainBanner />
      <AboutDirection />
      <TeamSection />
      <Box pb={65} className={"container"}>
        <Footer />
      </Box>
    </>
  )
}

export default AboutPage
