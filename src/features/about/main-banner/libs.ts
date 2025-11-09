import useTranslation from "next-translate/useTranslation"

export const useBreadcrumbs = () => {
  const { t } = useTranslation("common")

  return [
    { title: t("breadcrumbs.home"), href: "/" },
    { title: t("breadcrumbs.about"), href: "/about" },
  ]
}

export const DataBreadcrumbs = [
  { title: "Главная", href: "/" },
  { title: "О нас", href: "/about" },
]
