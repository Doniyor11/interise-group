import {
  Anchor,
  Breadcrumbs as BreadcrumbsComponent,
  MantineStyleProps,
} from "@mantine/core"
import Link from "next/link"
import React, { FC } from "react"

import IconArrowRight from "@/shared/assets/images/icons/icon-arrow-right.svg"

import s from "./styles.module.scss"

interface IBreadcrumbsProps extends MantineStyleProps {
  data: any[]
}

export const Breadcrumbs: FC<IBreadcrumbsProps> = ({ data, ...props }) => {
  const items = data.map((item: any, index: number) => (
    <Anchor key={index} className={s.link} href={item.href} component={Link}>
      {item.title}
    </Anchor>
  ))

  return (
    <>
      <BreadcrumbsComponent separator={<IconArrowRight />} {...props}>
        {items}
      </BreadcrumbsComponent>
    </>
  )
}
