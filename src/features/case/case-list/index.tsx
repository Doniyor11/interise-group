import {
  Accordion,
  AccordionControl,
  Box,
  Button,
  Center,
  Flex,
  Text,
} from "@mantine/core"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import React, { useState } from "react"

import { FilterKeys } from "@/features/case/case-list/libs.ts"
import { RequestPresentation } from "@/features/contact-forms"
import { useContactFormsStore } from "@/features/contact-forms/model"

import Icon1 from "@/shared/assets/images/interise-group/geo-alt.svg"
import Icon2 from "@/shared/assets/images/interise-group/graph-up.svg"
import IconArrow from "@/shared/assets/images/interise-group/icon-arrow-down.svg"
import Image1 from "@/shared/assets/images/interise-group/idea-1.png"
import Image2 from "@/shared/assets/images/interise-group/idea-2.png"
import Image3 from "@/shared/assets/images/interise-group/idea-3.png"
import { SearchInput } from "@/shared/ui"

import s from "./styles.module.scss"

export const CaseList = () => {
  const { t } = useTranslation("common")
  const { setRequestPresentation } = useContactFormsStore()
  const [category, setCategory] = useState(0)
  return (
    <>
      <div className={cx(s.sectionWrapper, "container")}>
        <h3>{t("case.list.title")}</h3>
        <Text className={s.label}>{t("case.list.select_category")}</Text>
        <Flex className={s.filtersWrapper}>
          <div className={s.categories}>
            {FilterKeys?.map((i, index) => (
              <Text
                key={index}
                onClick={() => setCategory(index)}
                className={cx(s.item, { [s.active]: category === index })}
              >
                {t(i?.key)}
              </Text>
            ))}
          </div>
          <SearchInput />
        </Flex>
        <div className={s.cards}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Box className={s.ideaBox} key={i}>
              <Box className={s.ideaBoxTop}>
                <Flex gap={"26px"} justify={"space-between"}>
                  <Text className={s.ideaBoxTitle}>
                    {t("case.card.rank_top3")}
                    <br />
                    <span>{t("case.card.company_in_country")}</span>
                  </Text>
                  <Flex direction="column" gap="6px">
                    <Flex
                      className={s.ideaBoxInfoCountry}
                      gap={"12px"}
                      align={"center"}
                    >
                      <Icon1 />
                      <Flex direction={"column"}>
                        <Text className={s.ideaBoxCountry}>
                          {t("case.card.country")}
                        </Text>
                        <Text className={s.ideaBoxCity}>
                          {t("case.card.kazakhstan")}
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex
                      className={s.ideaBoxInfoCountry}
                      gap={"12px"}
                      align={"center"}
                    >
                      <Icon2 />
                      <Flex direction={"column"}>
                        <Text className={s.ideaBoxCountry}>
                          {t("case.card.industry")}
                        </Text>
                        <Text className={s.ideaBoxCity}>
                          {t("case.card.banking")}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Text className={s.ideaBoxDescription}>
                  {t("case.card.description")}
                </Text>
              </Box>

              <Accordion
                w={"100%"}
                unstyled
                key={i}
                chevron={<IconArrow />}
                multiple={false}
              >
                <Accordion.Item value="item-1" className={s.collapseWrapper}>
                  <AccordionControl className={s.collapseBtn}>
                    {t("case.card.task")}
                  </AccordionControl>
                  <Accordion.Panel>
                    <Text className={s.collapseText}>
                      {t("case.card.task_text")}
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="item-2" className={s.collapseWrapper}>
                  <AccordionControl className={s.collapseBtn}>
                    {t("case.card.solution")}
                  </AccordionControl>
                  <Accordion.Panel>
                    <Text className={s.collapseText}>
                      {t("case.card.solution_text")}
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>

              <Box>
                <Text className={s.ideaBoxResult}>{t("case.card.result")}</Text>
                <Flex direction={"column"} gap={"12px"}>
                  <Flex
                    gap={"24px"}
                    align={"center"}
                    p={"13px 18px"}
                    className={s.ideaItem}
                  >
                    <Image src={Image1} alt={""} width={44} height={44} />
                    <Text component={"p"}>{t("case.card.result1")}</Text>
                  </Flex>
                  <Flex
                    gap={"24px"}
                    align={"center"}
                    p={"13px 18px"}
                    className={s.ideaItem}
                  >
                    <Image src={Image2} alt={""} width={44} height={44} />
                    <Text component={"p"}>{t("case.card.result2")}</Text>
                  </Flex>
                  <Flex
                    gap={"24px"}
                    align={"center"}
                    p={"13px 18px"}
                    className={s.ideaItem}
                  >
                    <Image src={Image3} alt={""} width={44} height={44} />
                    <Text component={"p"}>{t("case.card.result3")}</Text>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          ))}
        </div>
        <Center mt={24}>
          <Button
            className={s.btnRequest}
            onClick={() => setRequestPresentation(true)}
          >
            {t("case.request_presentation_button")}
          </Button>
        </Center>
      </div>
      <RequestPresentation />
    </>
  )
}
