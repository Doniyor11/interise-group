import { Box } from "@mantine/core"
import useTranslation from "next-translate/useTranslation"
import React from "react"

import { Footer } from "@/widgets/layouts/footer"

import { ResearchMainBanner, ResearchTypes } from "@/features/research"

import { SEOHead } from "@/shared/components/seo-head"
import {
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/shared/utils/structured-data"

const ResearchPage = () => {
  const { t, lang } = useTranslation("seo")

  const structuredData = [
    generateOrganizationSchema(lang),
    generateWebPageSchema(
      t("research.title"),
      t("research.description"),
      `/${lang}/research`,
    ),
  ]

  return (
    <>
      <SEOHead
        titleKey="research.title"
        descriptionKey="research.description"
        keywordsKey="research.keywords"
        ogType="website"
        structuredData={structuredData}
      />
      <ResearchMainBanner />
      <ResearchTypes />
      <Box pb={65} className={"container"}>
        <Footer />
      </Box>
    </>
  )
}

export default ResearchPage
