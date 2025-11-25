import useTranslation from "next-translate/useTranslation"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

interface SEOHeadProps {
  titleKey: string
  descriptionKey: string
  keywordsKey: string
  ogType?: "website" | "article"
  ogImage?: string
  noindex?: boolean
  structuredData?: object
}

const BASE_URL = "https://interisegroup.com"

export const SEOHead: React.FC<SEOHeadProps> = ({
  titleKey,
  descriptionKey,
  keywordsKey,
  ogType = "website",
  ogImage,
  noindex = false,
  structuredData,
}) => {
  const { t, lang } = useTranslation("seo")
  const router = useRouter()

  const title = t(titleKey)
  const description = t(descriptionKey)
  const keywords = t(keywordsKey)

  // Generate canonical URL
  const canonicalUrl = `${BASE_URL}${router.asPath.split("?")[0]}`

  // Alternate language URLs
  const alternateUrl =
    lang === "ru"
      ? router.asPath.replace("/ru/", "/en/")
      : router.asPath.replace("/en/", "/ru/")
  const alternateLang = lang === "ru" ? "en" : "ru"

  // OG image URL if provided
  const ogImageUrl = ogImage ? `${BASE_URL}${ogImage}` : undefined

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang Tags */}
      <link rel="alternate" hrefLang={lang} href={canonicalUrl} />
      <link
        rel="alternate"
        hrefLang={alternateLang}
        href={`${BASE_URL}${alternateUrl}`}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${BASE_URL}/ru${router.pathname}`}
      />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      {ogImageUrl && (
        <>
          <meta property="og:image" content={ogImageUrl} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </>
      )}
      <meta property="og:locale" content={lang === "ru" ? "ru_RU" : "en_US"} />
      <meta property="og:site_name" content="InteriseGroup" />

      {/* Twitter Card Meta Tags */}
      <meta
        name="twitter:card"
        content={ogImageUrl ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImageUrl && <meta name="twitter:image" content={ogImageUrl} />}

      {/* Robots Meta Tag */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  )
}
