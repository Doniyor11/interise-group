import useTranslation from "next-translate/useTranslation"

export const useBreadcrumbs = () => {
  const { t } = useTranslation("common")

  return [
    { title: t("breadcrumbs.home"), href: "/" },
    { title: t("breadcrumbs.cases"), href: "/case" },
  ]
}
