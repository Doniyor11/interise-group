import { Box, Button, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import React, { useEffect, useState } from "react"

import IconArrow from "@/shared/assets/images/interise-group/arrow-up-right.svg"
import { onLinkClick } from "@/shared/libs/scroll.ts"

import s from "./styles.module.scss"

export const MainBanner = () => {
  // const router = useRouter()
  const matches = useMediaQuery("(max-width: 1040px)")

  return (
    <div className={s.sectionWrapper}>
      <Box className={"container"} w={"100%"}>
        <Box className={s.bannerWrapper}>
          <Box className={s.sectionLeft}>
            <Text className={s.bannerTitle}>
              Стратегии, которые <br /> меняют рынки
            </Text>
            <Box w={matches ? "100%" : "514px"}>
              <Text className={s.bannerDescription}>
                InteriseGroup — международная консалтинговая группа с
                экспертизой в стратегическом развитии и комплексном
                преобразовании бизнеса
              </Text>
            </Box>
            <Flex
              p={matches ? "8px" : "18px 19px 17px 20px"}
              className={s.stats}
            >
              <Flex direction={"column"} align={"center"} className={s.item}>
                <AnimatedNumber value={115} className={s.number} />
                <Text className={s.info}>
                  благодарных <br /> клиентов
                </Text>
              </Flex>
              <Flex direction={"column"} align={"center"} className={s.item}>
                <AnimatedNumber value={35} className={s.number} />
                <Text className={s.info}>
                  результат <br /> внедрения
                </Text>
              </Flex>
              <Flex direction={"column"} align={"center"} className={s.item}>
                <AnimatedNumber value={311} className={s.number} />
                <Text className={s.info}>
                  завершенных <br /> проектов
                </Text>
              </Flex>
              <Flex
                direction={"column"}
                align={"center"}
                className={s.item}
                pl={matches ? "10px" : "28px"}
              >
                <AnimatedNumber value={30} className={s.number} />
                <Text className={s.info}>
                  стран для международной <br /> экспансии
                </Text>
              </Flex>
            </Flex>
            <Flex align={"center"} gap={5} w={matches ? "100%" : "fit-content"}>
              <Button
                onClick={() => onLinkClick("navbar5")}
                className={cx(s.buttonBanner, "btn-filled__back")}
              >
                Связаться
                <Flex
                  bg={"#0076FE"}
                  w={"32px"}
                  h={"32px"}
                  ml={"10px"}
                  className={s.buttonBannerIcon}
                  onClick={() => onLinkClick("navbar5")}
                >
                  <IconArrow />
                </Flex>
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
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
