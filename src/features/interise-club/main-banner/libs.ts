import useTranslation from "next-translate/useTranslation"

export const useBreadcrumbs = () => {
  const { t } = useTranslation("common")
  return [
    { title: t("breadcrumbs.home"), href: "/" },
    { title: t("breadcrumbs.interise_club"), href: "/interise-club" },
  ]
}

// Keep old export for backward compatibility
export const DataBreadcrumbs = [
  { title: "Главная", href: "/" },
  { title: "InteriseClub", href: "/interise-club" },
]
