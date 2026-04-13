import { Box } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import useTranslation from "next-translate/useTranslation"
import React from "react"

import { Footer } from "@/widgets/layouts/footer"

import {
  AboutDirection,
  AboutMainBanner,
  Partners,
  TeamSection,
} from "@/features/about"

import { SEOHead } from "@/shared/components/seo-head"
import {
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/shared/utils/structured-data"

const AboutPage = () => {
  const matches = useMediaQuery("(max-width: 1040px)")
  const { t, lang } = useTranslation("seo")

  const structuredData = [
    generateOrganizationSchema(lang),
    generateWebPageSchema(
      t("about.title"),
      t("about.description"),
      `/${lang}/about`,
    ),
  ]

  return (
    <>
      <SEOHead
        titleKey="about.title"
        descriptionKey="about.description"
        keywordsKey="about.keywords"
        ogType="website"
        structuredData={structuredData}
      />
      <AboutMainBanner />
      <AboutDirection />
      <Partners />
      <TeamSection />
      <Box p={matches ? "0 16px 60px" : "0 64px 65px"} className={"container"}>
        <Footer />
      </Box>
    </>
  )
}

export default AboutPage
