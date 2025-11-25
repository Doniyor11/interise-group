import { Box } from "@mantine/core"
import useTranslation from "next-translate/useTranslation"
import React from "react"

import { Footer } from "@/widgets/layouts/footer"

import {
  ClubMedia,
  ClubValues,
  EventSection,
  InteriseClubMain,
  SignupEvent,
} from "@/features/interise-club"

import { SEOHead } from "@/shared/components/seo-head"
import {
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/shared/utils/structured-data"

const InteriseClubPage = () => {
  const { t, lang } = useTranslation("seo")

  const structuredData = [
    generateOrganizationSchema(lang),
    generateWebPageSchema(
      t("interise_club.title"),
      t("interise_club.description"),
      `/${lang}/interise-club`,
    ),
  ]

  return (
    <>
      <SEOHead
        titleKey="interise_club.title"
        descriptionKey="interise_club.description"
        keywordsKey="interise_club.keywords"
        ogType="website"
        structuredData={structuredData}
      />
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
