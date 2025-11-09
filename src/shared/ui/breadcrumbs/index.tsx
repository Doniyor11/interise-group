import {
  Anchor,
  Breadcrumbs as BreadcrumbsComponent,
  MantineStyleProps,
} from "@mantine/core"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import Link from "next/link"
import React, { FC } from "react"

import IconArrowRight from "@/shared/assets/images/icons/icon-arrow-right.svg"

import s from "./styles.module.scss"

interface IBreadcrumbsProps extends MantineStyleProps {
  data: any[]
  className?: string
}

export const Breadcrumbs: FC<IBreadcrumbsProps> = ({
  data,
  className,
  ...props
}) => {
  const { t } = useTranslation()
  const items = data.map((item: any, index: number) => (
    <Anchor
      key={index}
      className={cx(s.link)}
      href={item.href}
      component={Link}
    >
      {t(item.title)}
    </Anchor>
  ))

  return (
    <>
      <BreadcrumbsComponent
        className={className}
        separator={<IconArrowRight />}
        {...props}
      >
        {items}
      </BreadcrumbsComponent>
    </>
  )
}
