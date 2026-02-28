import {
  Accordion,
  AccordionControl,
  Box,
  Button,
  Flex,
  Grid,
  Text,
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import MarkdownPreview from "@uiw/react-markdown-preview"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import { useRouter } from "next/router"
import React, { FC } from "react"

import { useGetCasesQuery } from "@/entities/cases/query.ts"
import { IGetCases } from "@/entities/cases/types.ts"
import { useGetMainSprintsQuery } from "@/entities/main/query.ts"
import { IMainSprints } from "@/entities/main/types.ts"

import Icon1 from "@/shared/assets/images/interise-group/geo-alt.svg"
import Icon2 from "@/shared/assets/images/interise-group/graph-up.svg"
import IconArrow from "@/shared/assets/images/interise-group/icon-arrow-down.svg"
import Image1 from "@/shared/assets/images/interise-group/idea-1.png"
import Image2 from "@/shared/assets/images/interise-group/idea-2.png"
import Image3 from "@/shared/assets/images/interise-group/idea-3.png"

import s from "./styles.module.scss"

const ResultIcons = [Image1, Image2, Image3]

const IdeaCard: FC<{ data: IGetCases; onClick?: () => void; t: any }> = ({
  data,
  onClick,
  t,
}) => (
  <Box data-aos="zoom-in" onClick={onClick} className={s.ideaBox}>
    <Box className={s.ideaBoxTop}>
      <Flex gap={"26px"} justify={"space-between"}>
        <MarkdownPreview source={data.companyRank} className={s.ideaBoxTitle} />

        <Flex direction="column" gap="6px">
          <Flex className={s.ideaBoxInfoCountry} gap={"12px"} align={"center"}>
            <Icon1 />
            <Flex direction={"column"}>
              <Text className={s.ideaBoxCountry}>
                {t("main.results.card.country")}
              </Text>
              {data?.country && (
                <Text className={s.ideaBoxCity}>{data?.country}</Text>
              )}
            </Flex>
          </Flex>
          <Flex className={s.ideaBoxInfoCountry} gap={"12px"} align={"center"}>
            <Icon2 />
            <Flex direction={"column"}>
              <Text className={s.ideaBoxCountry}>
                {t("main.results.card.industry")}
              </Text>
              {data?.industry && (
                <Text className={s.ideaBoxCity}>{data?.industry}</Text>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Text
        className={s.ideaBoxDescription}
        dangerouslySetInnerHTML={{ __html: data.title }}
      />
    </Box>

    <Accordion
      unstyled
      w={"100%"}
      key={"card-1"}
      chevron={<IconArrow />}
      multiple={false}
      m={"8px 0 18px"}
    >
      <Accordion.Item value="item-1" className={s.collapseWrapper}>
        <AccordionControl
          onClick={(e) => e.stopPropagation()}
          className={s.collapseBtn}
        >
          {t("main.results.card.task")}
        </AccordionControl>
        <Accordion.Panel>
          <Text className={s.collapseText}>{data?.task}</Text>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item-2" className={s.collapseWrapper}>
        <AccordionControl
          onClick={(e) => e.stopPropagation()}
          className={s.collapseBtn}
        >
          {t("main.results.card.solution")}
        </AccordionControl>
        <Accordion.Panel>
          <Text className={s.collapseText}>{data?.solution}</Text>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>

    <Box>
      <Text className={s.ideaBoxResult}>{t("main.results.card.result")}</Text>
      <Flex direction={"column"} gap={"12px"}>
        {data.results.map((result, i: number) => (
          <Flex
            key={i}
            gap={"24px"}
            align={"center"}
            p={"13px 18px"}
            className={s.ideaItem}
          >
            <Image
              src={ResultIcons[i] || Image3}
              alt={""}
              width={44}
              height={44}
            />
            <Text component={"p"}>{result?.text}</Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  </Box>
)

export const Books: FC = () => {
  const { t, lang } = useTranslation("common")
  const router = useRouter()
  const matches = useMediaQuery("(max-width: 1040px)")

  const { data } = useGetCasesQuery({
    lang: lang,
    for_main: true,
  })
  if (data?.length === 0) return null
  return (
    <div className={s.sectionWrapper}>
      <Flex
        direction="column"
        align={matches ? "flex-start" : "center"}
        gap={"20px"}
      >
        <Text className={s.ideaTitle}>{t("main.results.title")}</Text>
        <Text className={s.ideaDescription} maw={matches ? "100%" : "512px"}>
          {t("main.results.description")}
        </Text>
      </Flex>
      <Grid gutter={32}>
        {data?.map((i: IGetCases, idx: number) => (
          <Grid.Col span={matches ? 12 : 4} key={idx}>
            <IdeaCard data={i} onClick={() => router.push("/case")} t={t} />
          </Grid.Col>
        ))}
      </Grid>
      <Flex justify={"center"} mt={"24px"}>
        <Button
          bg={"#0076FE"}
          color={"#FFF"}
          radius={8}
          h={"44px"}
          w={matches ? "100%" : "233px"}
          fz={"16px"}
          fw={400}
          lh={"100%"}
          onClick={() => router.push("/case")}
        >
          {t("main.results.all_projects_button")}
        </Button>
      </Flex>
      {/* ----- */}
      <MainSprints />
    </div>
  )
}

export const MainSprints = () => {
  const matches = useMediaQuery("(max-width: 1040px)")
  const { data, isLoading } = useGetMainSprintsQuery()
  if (isLoading) return null
  return (
    <>
      <Grid gutter={"32px"} pt={"100px"} id={"directions"}>
        <Grid.Col span={matches ? 12 : 4}>
          <Box h={"100%"} data-aos="fade-down-right">
            <Text className={s.ideaInfoBoxTitleOne}>{data?.title}</Text>
            <Text className={s.ideaInfoBoxDescriptionOne}>
              {data?.description}
            </Text>
          </Box>
        </Grid.Col>
        {data?.sprints?.map((item: IMainSprints, i: number) => (
          <Grid.Col span={matches ? 12 : 4} key={i}>
            <Box data-aos="zoom-in" className={s.ideaInfoBox}>
              <Flex justify={"flex-end"} mb={"45px"}>
                <div className={s.icon}>
                  <Image
                    src={item?.image}
                    alt={item?.title}
                    width={30}
                    height={30}
                    unoptimized
                  />
                </div>
              </Flex>
              <Text className={s.ideaInfoBoxTitle}>{item?.title}</Text>
              <Text className={s.ideaInfoBoxDescription}>
                {item?.description}
              </Text>
            </Box>
          </Grid.Col>
        ))}
      </Grid>
      {/*<Flex justify={"center"} mt={"24px"}>*/}
      {/*  <Button*/}
      {/*    bg={"#0076FE"}*/}
      {/*    color={"#FFF"}*/}
      {/*    radius={8}*/}
      {/*    h={"44px"}*/}
      {/*    w={matches ? "100%" : "233px"}*/}
      {/*    fz={"16px"}*/}
      {/*    fw={400}*/}
      {/*    lh={"100%"}*/}
      {/*    onClick={() => onLinkClick("contacts")}*/}
      {/*  >*/}
      {/*    {t("main.directions.contact_button")}*/}
      {/*  </Button>*/}
      {/*</Flex>*/}
    </>
  )
}
