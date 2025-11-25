import { Box } from "@mantine/core"
import useTranslation from "next-translate/useTranslation"
import React from "react"

import { Footer } from "@/widgets/layouts/footer"

import { CaseList, CaseMainBanner } from "@/features/case"

import { SEOHead } from "@/shared/components/seo-head"
import {
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/shared/utils/structured-data"

const CasePage = () => {
  const { t, lang } = useTranslation("seo")

  const structuredData = [
    generateOrganizationSchema(lang),
    generateWebPageSchema(
      t("case.title"),
      t("case.description"),
      `/${lang}/case`,
    ),
  ]

  return (
    <>
      <SEOHead
        titleKey="case.title"
        descriptionKey="case.description"
        keywordsKey="case.keywords"
        ogType="website"
        structuredData={structuredData}
      />
      <CaseMainBanner />
      <CaseList />
      <Box pb={65} className={"container"}>
        <Footer />
      </Box>
    </>
  )
}

export default CasePage
