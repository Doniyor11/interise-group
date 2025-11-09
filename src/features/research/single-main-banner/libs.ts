import useTranslation from "next-translate/useTranslation"

export const useBreadcrumbs = () => {
  const { t } = useTranslation("common")
  return [
    { title: t("breadcrumbs.home"), href: "/" },
    { title: t("breadcrumbs.research"), href: "/research" },
    { title: t("breadcrumbs.research_page"), href: "#" },
  ]
}

// Keep old export for backward compatibility
export const DataBreadcrumbs = [
  { title: "Главная", href: "/" },
  { title: "Исследования", href: "/research" },
  { title: "Страница исследования", href: "#" },
]
