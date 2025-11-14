import { Box } from "@mantine/core"
import React from "react"

import { Footer } from "@/widgets/layouts/footer"

import {
  ClubMedia,
  ClubValues,
  EventSection,
  InteriseClubMain,
  SignupEvent,
} from "@/features/interise-club"

const InteriseClubPage = () => {
  return (
    <>
      <InteriseClubMain />
      <EventSection />
      <ClubValues />
      <SignupEvent />
      <ClubMedia />
      <Box pb={65} className={"container"}>
        <Footer />
      </Box>
    </>
  )
}

export default InteriseClubPage
