import { Box, Button, Flex, Text } from "@mantine/core"
import cx from "clsx"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

import IconArrow from "@/shared/assets/images/interise-group/arrow-up-right.svg"
import VideoBanner from "@/shared/assets/images/interise-group/output10.webp"

import s from "./styles.module.scss"

export const MainBanner = () => {
  const router = useRouter()
  return (
    <div className={s.sectionWrapper}>
      <div className={"container"}>
        <Box className={s.bannerWrapper}>
          <Box className={s.sectionLeft}>
            <Text className={s.bannerTitle}>
              Стратегии, которые <br /> <span>меняют рынки</span>
            </Text>
            <Box w={"455px"}>
              <Text className={s.bannerDescription}>
                InteriseGroup — международная консалтинговая группа с
                экспертизой в стратегическом развитии и комплексном
                преобразовании бизнеса
              </Text>
            </Box>
            <Flex align={"center"} gap={5}>
              <Button
                onClick={() => router.push("/")}
                className={cx(s.buttonBanner, "btn-filled__back")}
              >
                Оставить заявку
                <Flex
                  bg={"#0076FE"}
                  w={"32px"}
                  h={"32px"}
                  ml={"10px"}
                  className={s.buttonBannerIcon}
                >
                  <IconArrow />
                </Flex>
              </Button>

              <Button
                w={192}
                h={"44px"}
                className={"btn-outline"}
                onClick={() => router.push("/")}
              >
                Узнать больше
              </Button>
            </Flex>
          </Box>
          <Box className={s.sectionRight}>
            <img
              src={VideoBanner.src || VideoBanner}
              alt="InteriseGroup Banner"
              className={s.bannerVideo}
            />
            <Flex bg={"#FFF"} p={"23px"} className={s.stats}>
              <Flex direction={"column"} align={"center"} className={s.item}>
                <AnimatedNumber value={300} className={s.number} />
                <Text className={s.info}>проектов</Text>
              </Flex>
              <Flex direction={"column"} align={"center"} className={s.item}>
                <AnimatedNumber value={30} className={s.number} />
                <Text className={s.info}>стран</Text>
              </Flex>
              <Flex direction={"column"} align={"center"} className={s.item}>
                <AnimatedNumber value={15} className={s.number} />
                <Text className={s.info}>отраслей</Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </div>
    </div>
  )
}

interface AnimatedNumberProps {
  value: number
  duration?: number // ms
  className?: string
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 3000,
  className,
}) => {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = value / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setDisplay(value)
        clearInterval(timer)
      } else {
        setDisplay(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [value, duration])

  return <span className={className}>{display}+</span>
}
