import { Box, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import { useGetMediaImagesQuery } from "@/entities/club-images/query.ts"
import { IMediaImages } from "@/entities/club-images/types.ts"

import s from "./styles.module.scss"

const getRandomWidth = () => Math.floor(Math.random() * (400 - 200 + 1)) + 200

export const ClubMedia = () => {
  return (
    <div className={cx(s.sectionWrapper, "container")}>
      <h3>Медиа</h3>
      <Text>Фотографии с наших мероприятий</Text>
      <BoxOne />
      <BoxTwo />
    </div>
  )
}

export const BoxOne = () => {
  const matches = useMediaQuery("(max-width: 700px)")
  const { data } = useGetMediaImagesQuery({
    section: "line1",
  })

  const shouldAnimate = (data?.length ?? 0) >= (matches ? 2 : 5)

  return (
    <div
      className={cx(s.boxImages, {
        [s.leftToRight]: shouldAnimate,
      })}
    >
      {data?.map((item: IMediaImages, i: number) => {
        const randomWidth = getRandomWidth()
        return (
          <Image
            key={i}
            src={item?.url}
            alt={item?.name}
            className={s.image}
            width={randomWidth}
            height={293}
          />
        )
      })}
    </div>
  )
}
export const BoxTwo = () => {
  const matches = useMediaQuery("(max-width: 700px)")
  const { data } = useGetMediaImagesQuery({
    section: "line2",
  })

  const shouldAnimate = (data?.length ?? 0) >= (matches ? 2 : 5)

  return (
    <Box
      mt={20}
      className={cx(s.boxImages, {
        [s.rightToLeft]: shouldAnimate,
      })}
    >
      {data?.map((item: IMediaImages, i: number) => {
        const randomWidth = getRandomWidth()
        return (
          <Image
            key={i}
            src={item?.url}
            alt={item?.name}
            className={s.image}
            width={randomWidth}
            height={293}
          />
        )
      })}
    </Box>
  )
}
