import { Box } from "@mantine/core"
import useTranslation from "next-translate/useTranslation"
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

import { SEOHead } from "@/shared/components/seo-head"
import {
  generateArticleSchema,
  generateOrganizationSchema,
} from "@/shared/utils/structured-data"

const SingleResearch = () => {
  const { t, lang } = useTranslation("seo")

  const structuredData = [
    generateOrganizationSchema(lang),
    generateArticleSchema(
      t("research.title"),
      t("research.description"),
      "2024-01-01",
      "2025-11-25",
      "InteriseGroup",
      "/og-images/research.jpg",
    ),
  ]

  return (
    <>
      <SEOHead
        titleKey="research.title"
        descriptionKey="research.description"
        keywordsKey="research.keywords"
        ogType="article"
        structuredData={structuredData}
      />
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
