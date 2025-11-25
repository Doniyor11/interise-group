// Structured Data (JSON-LD) generators for SEO

const BASE_URL = "https://interisegroup.com"

export const generateOrganizationSchema = (locale: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "InteriseGroup",
  alternateName: locale === "ru" ? "Интерайз Групп" : "Interise Group",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.png`,
  description:
    locale === "ru"
      ? "Международная консалтинговая группа с экспертизой в стратегическом развитии и комплексном преобразовании бизнеса"
      : "International consulting group with expertise in strategic development and comprehensive business transformation",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Ostozhenka 37/7 bld.2, Conversation Cafe mansion, 4th floor",
    addressLocality: "Moscow",
    addressCountry: "RU",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "request@interisegroup.com",
    contactType: "Customer Service",
  },
  sameAs: [
    // Add social media links here when available
    // "https://www.linkedin.com/company/interisegroup",
    // "https://www.facebook.com/interisegroup",
  ],
})

export const generateBreadcrumbSchema = (
  items: { name: string; url: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${BASE_URL}${item.url}`,
  })),
})

export const generateArticleSchema = (
  title: string,
  description: string,
  publishDate: string,
  modifiedDate: string,
  author: string,
  imageUrl: string,
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description: description,
  image: `${BASE_URL}${imageUrl}`,
  datePublished: publishDate,
  dateModified: modifiedDate,
  author: {
    "@type": "Organization",
    name: author,
  },
  publisher: {
    "@type": "Organization",
    name: "InteriseGroup",
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/favicon.png`,
    },
  },
})

export const generateWebPageSchema = (
  name: string,
  description: string,
  url: string,
) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: name,
  description: description,
  url: `${BASE_URL}${url}`,
  inLanguage: url.includes("/ru/") ? "ru" : "en",
  isPartOf: {
    "@type": "WebSite",
    name: "InteriseGroup",
    url: BASE_URL,
  },
})

export const generateServiceSchema = (locale: string) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "InteriseGroup",
  description:
    locale === "ru"
      ? "Консалтинговые услуги по стратегическому развитию и цифровой трансформации бизнеса"
      : "Consulting services for strategic development and digital business transformation",
  url: BASE_URL,
  areaServed: [
    {
      "@type": "Country",
      name: "Russia",
    },
    {
      "@type": "Country",
      name: "Kazakhstan",
    },
    {
      "@type": "Country",
      name: "Uzbekistan",
    },
    // Add more countries as needed
  ],
  serviceType: [
    locale === "ru" ? "Цифровая трансформация" : "Digital Transformation",
    locale === "ru"
      ? "Стратегическое консультирование"
      : "Strategic Consulting",
    locale === "ru" ? "Управление изменениями" : "Change Management",
    locale === "ru" ? "Бизнес аналитика" : "Business Analytics",
  ],
})
