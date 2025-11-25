import {
  Accordion,
  AccordionControl,
  Box,
  Button,
  Center,
  Flex,
  Skeleton,
  Text,
} from "@mantine/core"
import { useDebouncedValue } from "@mantine/hooks"
import MarkdownPreview from "@uiw/react-markdown-preview"
import cx from "clsx"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import React, { useState } from "react"

import { RequestPresentation } from "@/features/contact-forms"
import { useContactFormsStore } from "@/features/contact-forms/model"

import {
  useCaseCategoriesQuery,
  useGetCasesQuery,
} from "@/entities/cases/query.ts"
import { ICategory, IGetCases } from "@/entities/cases/types.ts"

import Icon1 from "@/shared/assets/images/interise-group/geo-alt.svg"
import Icon2 from "@/shared/assets/images/interise-group/graph-up.svg"
import IconArrow from "@/shared/assets/images/interise-group/icon-arrow-down.svg"
import Image1 from "@/shared/assets/images/interise-group/idea-1.png"
import Image2 from "@/shared/assets/images/interise-group/idea-2.png"
import Image3 from "@/shared/assets/images/interise-group/idea-3.png"
import { SearchInput } from "@/shared/ui"

import s from "./styles.module.scss"

const ResultsIcons = [Image1, Image2, Image3]

export const CaseList = () => {
  const { t, lang } = useTranslation("common")
  const { setRequestPresentation } = useContactFormsStore()
  const [category, setCategory] = useState(0)
  const [search, setSearch] = useState("")

  const [debounced] = useDebouncedValue(search, 200)

  const { data: categories, isLoading: CategoryLoading } =
    useCaseCategoriesQuery()
  const { data, isLoading } = useGetCasesQuery({
    lang,
    category: category === 0 ? undefined : category,
    search: debounced === "" ? undefined : debounced,
  })

  return (
    <>
      <div className={cx(s.sectionWrapper, "container")}>
        <h3>{t("case.list.title")}</h3>
        <Text className={s.label}>{t("case.list.select_category")}</Text>
        <Flex className={s.filtersWrapper}>
          <div className={s.categories}>
            {!CategoryLoading ? (
              <>
                <Text
                  onClick={() => setCategory(0)}
                  className={cx(s.item, { [s.active]: category === 0 })}
                >
                  {t("case.filter.all_industries")}
                </Text>
                {categories?.map((i: ICategory, idx: number) => (
                  <Text
                    key={idx}
                    onClick={() => setCategory(i?.id)}
                    className={cx(s.item, { [s.active]: category === i?.id })}
                  >
                    {t(i?.name)}
                  </Text>
                ))}
              </>
            ) : (
              <>
                <Skeleton width={110} height={41} radius={35} />
                <Skeleton width={140} height={41} radius={35} />
                <Skeleton width={120} height={41} radius={35} />
                <Skeleton width={130} height={41} radius={35} />
              </>
            )}
          </div>
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Flex>
        <div className={s.cards}>
          {!isLoading ? (
            <>
              {data && data.length > 0 ? (
                data.map((i: IGetCases, idx: number) => (
                  <Box className={s.ideaBox} key={idx}>
                    <Box className={s.ideaBoxTop}>
                      <Flex gap={"26px"} justify={"space-between"}>
                        <MarkdownPreview
                          source={i?.companyRank}
                          className={s.ideaBoxTitle}
                        />
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
                                {i?.country}
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
                                {i?.industry}
                              </Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Text className={s.ideaBoxDescription}>{i?.title}</Text>
                    </Box>

                    <Accordion
                      w={"100%"}
                      unstyled
                      key={idx}
                      chevron={<IconArrow />}
                      multiple={false}
                    >
                      <Accordion.Item
                        value="item-1"
                        className={s.collapseWrapper}
                      >
                        <AccordionControl className={s.collapseBtn}>
                          {t("case.card.task")}
                        </AccordionControl>
                        <Accordion.Panel>
                          <Text className={s.collapseText}>{i?.task}</Text>
                        </Accordion.Panel>
                      </Accordion.Item>
                      <Accordion.Item
                        value="item-2"
                        className={s.collapseWrapper}
                      >
                        <AccordionControl className={s.collapseBtn}>
                          {t("case.card.solution")}
                        </AccordionControl>
                        <Accordion.Panel>
                          <Text className={s.collapseText}>{i?.solution}</Text>
                        </Accordion.Panel>
                      </Accordion.Item>
                    </Accordion>

                    <Box>
                      <Text className={s.ideaBoxResult}>
                        {t("case.card.result")}
                      </Text>
                      <Flex direction={"column"} gap={"12px"}>
                        {i?.results?.map((r, rIdx) => (
                          <Flex
                            key={rIdx}
                            gap={"24px"}
                            align={"center"}
                            p={"13px 18px"}
                            className={s.ideaItem}
                          >
                            <Image
                              src={ResultsIcons[rIdx] || Image1}
                              alt={r?.text}
                              width={44}
                              height={44}
                            />
                            <Text component={"p"}>{r?.text}</Text>
                          </Flex>
                        ))}
                      </Flex>
                    </Box>
                  </Box>
                ))
              ) : (
                <Center w="100%" py={40}>
                  <Text size="lg" c="dimmed">
                    {t("case.list.no_results")}
                  </Text>
                </Center>
              )}
            </>
          ) : (
            <>
              <Skeleton width={"100%"} height={690} radius={24} />
              <Skeleton width={"100%"} height={690} radius={24} />
              <Skeleton width={"100%"} height={690} radius={24} />
            </>
          )}
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
