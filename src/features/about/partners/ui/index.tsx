import { Box, Text } from "@mantine/core"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import { useGetPartnersQuery } from "@/features/about/partners/api/query.ts"
import { IGetPartners } from "@/features/about/partners/api/types.ts"

import Logo from "@/shared/assets/images/interise-group/logo-ru-white.svg"

import s from "./styles.module.scss"

export const Partners = () => {
  const { data } = useGetPartnersQuery()

  return (
    <Box className={"container"}>
      <Text className={s.title} data-aos="fade-up">
        Партнеры
      </Text>
      <div className={s.box} data-aos="fade-up">
        <Logo className={s.logo} data-aos="fade-right" />
        <Box className={cx(s.cards, { [s.maxTwo]: data?.length <= 2 })}>
          {data?.map((item: IGetPartners, i: number) => (
            <div
              key={i}
              data-aos="fade-up"
              className={cx(s.card, {
                [s.full]:
                  data?.length > 1 &&
                  data?.length % 2 !== 0 &&
                  i === data?.length - 1,
              })}
            >
              <div className={s.icon}>
                <Image
                  src={item?.icon}
                  alt={item?.title}
                  unoptimized
                  width={32}
                  height={32}
                />
              </div>
              <Text className={s.cardTitle}>{item?.title}</Text>
              <Box
                className={s.cardText}
                dangerouslySetInnerHTML={{ __html: item?.description }}
              />
            </div>
          ))}
        </Box>
      </div>
    </Box>
  )
}
