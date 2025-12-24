import { Box, Modal, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import Image from "next/image"
import React, { useMemo, useState } from "react"

import { useGetMediaImagesQuery } from "@/entities/club-images/query.ts"
import { IMediaImages } from "@/entities/club-images/types.ts"

import s from "./styles.module.scss"

const getRandomWidth = () => Math.floor(Math.random() * (400 - 200 + 1)) + 200

export const ClubMedia = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className={cx(s.sectionWrapper, "container")}>
      <h3>Медиа</h3>
      <Text>Фотографии с наших мероприятий</Text>
      <BoxOne onImageClick={setSelectedImage} />
      <BoxTwo onImageClick={setSelectedImage} />

      {/* Image Modal */}
      <Modal
        opened={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        size="auto"
        centered
        radius={16}
        withCloseButton
      >
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Full size"
            width={500}
            height={500}
            style={{
              width: "500px",
              height: "500px",
              objectFit: "contain",
            }}
          />
        )}
      </Modal>
    </div>
  )
}

export const BoxOne = ({
  onImageClick,
}: {
  onImageClick: (url: string) => void
}) => {
  const matches = useMediaQuery("(max-width: 700px)")
  const { data } = useGetMediaImagesQuery({
    section: "line1",
  })

  const shouldAnimate = (data?.length ?? 0) >= (matches ? 2 : 5)

  // Memoize random widths so they don't change on re-render
  const imageWidths = useMemo(() => {
    return data?.map(() => getRandomWidth()) ?? []
  }, [data])

  return (
    <div
      className={cx(s.boxImages, {
        [s.leftToRight]: shouldAnimate,
      })}
    >
      {data?.map((item: IMediaImages, i: number) => {
        return (
          <Image
            key={i}
            src={item?.url}
            alt={item?.name}
            className={s.image}
            width={imageWidths[i]}
            height={293}
            onClick={() => onImageClick(item?.url)}
            style={{ cursor: "pointer" }}
          />
        )
      })}
    </div>
  )
}
export const BoxTwo = ({
  onImageClick,
}: {
  onImageClick: (url: string) => void
}) => {
  const matches = useMediaQuery("(max-width: 700px)")
  const { data } = useGetMediaImagesQuery({
    section: "line2",
  })

  const shouldAnimate = (data?.length ?? 0) >= (matches ? 2 : 5)

  // Memoize random widths so they don't change on re-render
  const imageWidths = useMemo(() => {
    return data?.map(() => getRandomWidth()) ?? []
  }, [data])

  return (
    <Box
      mt={20}
      className={cx(s.boxImages, {
        [s.rightToLeft]: shouldAnimate,
      })}
    >
      {data?.map((item: IMediaImages, i: number) => {
        return (
          <Image
            key={i}
            src={item?.url}
            alt={item?.name}
            className={s.image}
            width={imageWidths[i]}
            height={293}
            onClick={() => onImageClick(item?.url)}
            style={{ cursor: "pointer" }}
          />
        )
      })}
    </Box>
  )
}
