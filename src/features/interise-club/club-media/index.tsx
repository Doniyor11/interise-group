import { Text } from "@mantine/core"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import ImageFour from "@/shared/assets/images/interise-group/image-event-1.png"
import ImageTwo from "@/shared/assets/images/interise-group/image-event-2.png"
import ImageOne from "@/shared/assets/images/interise-group/image-media.png"
import ImageThree from "@/shared/assets/images/interise-group/partneruser1.png"

import s from "./styles.module.scss"

export const ClubMedia = () => {
  return (
    <div className={cx(s.sectionWrapper, "container")}>
      <h3>Медиа</h3>
      <Text>Фотографии с наших мероприятий</Text>
      <div className={cx(s.boxImages, s.leftToRight)}>
        <Image
          src={ImageOne}
          alt={"media-image"}
          className={s.image}
          width={391}
        />
        <Image
          src={ImageTwo}
          alt={"media-image"}
          className={s.image}
          width={233}
        />
        <Image
          src={ImageThree}
          alt={"media-image"}
          className={s.image}
          width={391}
        />
        <Image
          src={ImageFour}
          alt={"media-image"}
          className={s.image}
          width={235}
        />
        <Image
          src={ImageOne}
          alt={"media-image"}
          className={s.image}
          width={391}
        />
        <Image
          src={ImageTwo}
          alt={"media-image"}
          className={s.image}
          width={233}
        />
        <Image
          src={ImageThree}
          alt={"media-image"}
          className={s.image}
          width={391}
        />
        <Image
          src={ImageFour}
          alt={"media-image"}
          className={s.image}
          width={235}
        />
      </div>
      <div className={cx(s.boxImages, s.rightToLeft)}>
        <Image
          src={ImageOne}
          alt={"media-image"}
          className={s.image}
          width={391}
        />
        <Image
          src={ImageTwo}
          alt={"media-image"}
          className={s.image}
          width={233}
        />
        <Image
          src={ImageThree}
          alt={"media-image"}
          className={s.image}
          width={391}
        />
        <Image
          src={ImageFour}
          alt={"media-image"}
          className={s.image}
          width={235}
        />
        <Image
          src={ImageOne}
          alt={"media-image"}
          className={s.image}
          width={391}
        />
        <Image
          src={ImageTwo}
          alt={"media-image"}
          className={s.image}
          width={233}
        />
        <Image
          src={ImageThree}
          alt={"media-image"}
          className={s.image}
          width={391}
        />
        <Image
          src={ImageFour}
          alt={"media-image"}
          className={s.image}
          width={235}
        />
      </div>
    </div>
  )
}
