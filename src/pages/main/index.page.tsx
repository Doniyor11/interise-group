import { Box } from "@mantine/core"
import useTranslation from "next-translate/useTranslation"

import { Contacts } from "@/widgets"

import {
  Banner,
  Books,
  ConsultingService,
  MainBanner,
  MainGallery,
  MainRecipes,
} from "@/features/main"

import { SEOHead } from "@/shared/components/seo-head"
import {
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/shared/utils/structured-data"

const HomePage = () => {
  const { t, lang } = useTranslation("seo")

  const structuredData = [
    generateOrganizationSchema(lang),
    generateWebPageSchema(
      t("main.title"),
      t("main.description"),
      `/${lang}/main`,
    ),
  ]

  return (
    <>
      <SEOHead
        titleKey="main.title"
        descriptionKey="main.description"
        keywordsKey="main.keywords"
        ogType="website"
        structuredData={structuredData}
      />
      <Box maw={1920} m={"0 auto"}>
        <MainBanner />
        <Box
          bg={"#fff"}
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <main className={"container"}>
            <ConsultingService />
          </main>
          <Banner />
          <main className={"container"}>
            <Books />
          </main>
          <MainGallery />
          <main className={"container"}>
            <MainRecipes />
          </main>
          <Contacts />
        </Box>
      </Box>
    </>
  )
}

export default HomePage
