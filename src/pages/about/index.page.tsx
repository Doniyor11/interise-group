import { Box } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React from "react"

import { Footer } from "@/widgets/layouts/footer"

import { AboutDirection, AboutMainBanner, TeamSection } from "@/features/about"

const AboutPage = () => {
  const matches = useMediaQuery("(max-width: 1040px)")

  return (
    <>
      <AboutMainBanner />
      <AboutDirection />
      <TeamSection />
      <Box p={matches ? "0 16px 60px" : "0 64px 65px"} className={"container"}>
        <Footer />
      </Box>
    </>
  )
}

export default AboutPage
