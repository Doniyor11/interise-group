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
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import { useRouter } from "next/router"
import React, { FC } from "react"

import Icon1 from "@/shared/assets/images/interise-group/geo-alt.svg"
import Icon2 from "@/shared/assets/images/interise-group/graph-up.svg"
import IconArrow from "@/shared/assets/images/interise-group/icon-arrow-down.svg"
import Image1 from "@/shared/assets/images/interise-group/idea-1.png"
import Image2 from "@/shared/assets/images/interise-group/idea-2.png"
import Image3 from "@/shared/assets/images/interise-group/idea-3.png"
import Image4 from "@/shared/assets/images/interise-group/idea-4.svg"
import Image5 from "@/shared/assets/images/interise-group/idea-5.svg"
import Image6 from "@/shared/assets/images/interise-group/idea-6.svg"
import Image7 from "@/shared/assets/images/interise-group/idea-7.svg"
import Image8 from "@/shared/assets/images/interise-group/idea-8.svg"
import { onLinkClick } from "@/shared/libs/scroll.ts"

// import { onLinkClick } from "@/shared/libs/scroll.ts"
import s from "./styles.module.scss"

const getIdeasData = (t: any) => [
  {
    rank: t("main.results.card.rank_top3"),
    rankDesc: t("main.results.card.company_in_country"),
    info: [
      {
        icon: Icon1,
        label: t("main.results.card.country"),
        value: t("main.results.card.central_asia"),
      },
      {
        icon: Icon2,
        label: t("main.results.card.industry"),
        value: t("main.results.card.fintech"),
      },
    ],
    description: t("main.results.card1.description"),
    results: [
      { icon: Image1, text: t("main.results.card1.result1") },
      { icon: Image2, text: t("main.results.card1.result2") },
      { icon: Image3, text: t("main.results.card1.result3") },
    ],
  },
  {
    rank: t("main.results.card.rank_top3"),
    rankDesc: t("main.results.card.company_in_country"),
    info: [
      {
        icon: Icon1,
        label: t("main.results.card.country"),
        value: t("main.results.card.transcaucasia"),
      },
      {
        icon: Icon2,
        label: t("main.results.card.industry"),
        value: t("main.results.card.aviation"),
      },
    ],
    description: t("main.results.card2.description"),
    results: [
      {
        icon: Image1,
        text: t("main.results.card2.result1"),
      },
      {
        icon: Image2,
        text: t("main.results.card2.result2"),
      },
      { icon: Image3, text: t("main.results.card2.result3") },
    ],
  },
  {
    rank: t("main.results.card.rank_top1"),
    rankDesc: t("main.results.card.company_in_medicine"),
    info: [
      {
        icon: Icon1,
        label: t("main.results.card.country"),
        value: t("main.results.card.russia"),
      },
      {
        icon: Icon2,
        label: t("main.results.card.industry"),
        value: t("main.results.card.medicine"),
      },
    ],
    description: t("main.results.card3.description"),
    results: [
      {
        icon: Image1,
        text: t("main.results.card3.result1"),
      },
      { icon: Image2, text: t("main.results.card3.result2") },
      {
        icon: Image3,
        text: t("main.results.card3.result3"),
      },
    ],
  },
]

const IdeaInfoItem: FC<{ icon: any; label: string; value: string }> = ({
  icon: Icon,
  label,
  value,
}) => (
  <Flex className={s.ideaBoxInfoCountry} gap={"12px"} align={"center"}>
    <Icon />
    <Flex direction={"column"}>
      <Text className={s.ideaBoxCountry}>{label}</Text>
      {value && <Text className={s.ideaBoxCity}>{value}</Text>}
    </Flex>
  </Flex>
)

const IdeaResultItem: FC<{ icon: any; text: string }> = ({ icon, text }) => (
  <Flex gap={"24px"} align={"center"} p={"13px 18px"} className={s.ideaItem}>
    <Image src={icon} alt={""} width={44} height={44} />
    <Text component={"p"}>{text}</Text>
  </Flex>
)

const IdeaCard: FC<{ data: any; onClick?: () => void; t: any }> = ({
  data,
  onClick,
  t,
}) => (
  <Box onClick={onClick} className={s.ideaBox}>
    <Box className={s.ideaBoxTop}>
      <Flex gap={"26px"} justify={"space-between"}>
        <Text className={s.ideaBoxTitle}>
          {data.rank} <br />
          <span dangerouslySetInnerHTML={{ __html: data.rankDesc }} />
        </Text>
        <Flex direction="column" gap="6px">
          {data.info.map((info: any, i: number) => (
            <IdeaInfoItem key={i} {...info} />
          ))}
        </Flex>
      </Flex>
      <Text
        className={s.ideaBoxDescription}
        dangerouslySetInnerHTML={{ __html: data.description }}
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
          <Text className={s.collapseText}>
            {t("main.results.card.task_text")}
          </Text>
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
          <Text className={s.collapseText}>
            {t("main.results.card.solution_text")}
          </Text>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>

    <Box>
      <Text className={s.ideaBoxResult}>{t("main.results.card.result")}</Text>
      <Flex direction={"column"} gap={"12px"}>
        {data.results.map((result: any, i: number) => (
          <IdeaResultItem key={i} {...result} />
        ))}
      </Flex>
    </Box>
  </Box>
)

export const Books: FC = () => {
  const { t } = useTranslation("common")
  const router = useRouter()
  const matches = useMediaQuery("(max-width: 1040px)")
  const IDEAS_DATA = getIdeasData(t)

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
        {IDEAS_DATA.map((idea, idx) => (
          <Grid.Col span={matches ? 12 : 4} key={idx}>
            <IdeaCard data={idea} onClick={() => router.push("/case")} t={t} />
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

      <Grid gutter={"32px"} pt={"100px"} id={"directions"}>
        <Grid.Col span={matches ? 12 : 4}>
          <Box h={"100%"}>
            <Text className={s.ideaInfoBoxTitleOne}>
              {t("main.directions.title")}
            </Text>
            <Text className={s.ideaInfoBoxDescriptionOne}>
              {t("main.directions.description")}
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={matches ? 12 : 4}>
          <Box className={s.ideaInfoBox}>
            <Flex justify={"flex-end"} mb={"45px"}>
              <div className={s.icon}>
                <Image4 />
              </div>
            </Flex>
            <Text className={s.ideaInfoBoxTitle}>
              {t("main.directions.diagnostics.title")}
            </Text>
            <Text className={s.ideaInfoBoxDescription}>
              {t("main.directions.diagnostics.description")}
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={matches ? 12 : 4}>
          <Box className={s.ideaInfoBox}>
            <Flex justify={"flex-end"} mb={"45px"}>
              <div className={s.icon}>
                <Image5 />
              </div>
            </Flex>
            <Text className={s.ideaInfoBoxTitle}>
              {t("main.directions.strategy.title")}
            </Text>
            <Text className={s.ideaInfoBoxDescription}>
              {t("main.directions.strategy.description")}
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={matches ? 12 : 4}>
          <Box className={s.ideaInfoBox}>
            <Flex justify={"flex-end"} mb={"45px"}>
              <div className={s.icon}>
                <Image6 />
              </div>
            </Flex>
            <Text className={s.ideaInfoBoxTitle}>
              {t("main.directions.digital_transformation.title")}
            </Text>
            <Text className={s.ideaInfoBoxDescription}>
              {t("main.directions.digital_transformation.description")}
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={matches ? 12 : 4}>
          <Box className={s.ideaInfoBox}>
            <Flex justify={"flex-end"} mb={"45px"}>
              <div className={s.icon}>
                <Image7 />
              </div>
            </Flex>
            <Text className={s.ideaInfoBoxTitle}>
              {t("main.directions.investment.title")}
            </Text>
            <Text className={s.ideaInfoBoxDescription}>
              {t("main.directions.investment.description")}
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={matches ? 12 : 4}>
          <Box className={s.ideaInfoBox}>
            <Flex justify={"flex-end"} mb={"45px"}>
              <div className={s.icon}>
                <Image8 />
              </div>
            </Flex>
            <Text className={s.ideaInfoBoxTitle}>
              {t("main.directions.new_markets.title")}
            </Text>
            <Text className={s.ideaInfoBoxDescription}>
              {t("main.directions.new_markets.description")}
            </Text>
          </Box>
        </Grid.Col>
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
          onClick={() => onLinkClick("contacts")}
        >
          {t("main.directions.contact_button")}
        </Button>
      </Flex>
    </div>
  )
}
