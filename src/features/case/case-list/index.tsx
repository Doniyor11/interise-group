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
  const { setRequestPresentation } = useContactFormsStore()
  const [category, setCategory] = useState(0)
  return (
    <>
      <div className={cx(s.sectionWrapper, "container")}>
        <h3>Кейсы:</h3>
        <Text className={s.label}>Выберите категорию:</Text>
        <Flex className={s.filtersWrapper}>
          <div className={s.categories}>
            {FilterKeys?.map((i, index) => (
              <Text
                key={index}
                onClick={() => setCategory(index)}
                className={cx(s.item, { [s.active]: category === index })}
              >
                {i?.text}
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
                    Топ-3
                    <br />
                    <span>компания в стране</span>
                  </Text>
                  <Flex direction="column" gap="6px">
                    <Flex
                      className={s.ideaBoxInfoCountry}
                      gap={"12px"}
                      align={"center"}
                    >
                      <Icon1 />
                      <Flex direction={"column"}>
                        <Text className={s.ideaBoxCountry}>Страна:</Text>
                        <Text className={s.ideaBoxCity}>Казахстан</Text>
                      </Flex>
                    </Flex>
                    <Flex
                      className={s.ideaBoxInfoCountry}
                      gap={"12px"}
                      align={"center"}
                    >
                      <Icon2 />
                      <Flex direction={"column"}>
                        <Text className={s.ideaBoxCountry}>Отрасль:</Text>
                        <Text className={s.ideaBoxCity}>Банкинг</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Text className={s.ideaBoxDescription}>
                  Интеграция ведущих банков и запуск крупнейшей трансформации на
                  рынке
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
                    Задача:
                  </AccordionControl>
                  <Accordion.Panel>
                    <Text className={s.collapseText}>
                      Провести интеграцию с другим банком и полномасштабная
                      трансформация операционной модели
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="item-2" className={s.collapseWrapper}>
                  <AccordionControl className={s.collapseBtn}>
                    Решение:
                  </AccordionControl>
                  <Accordion.Panel>
                    <Text className={s.collapseText}>
                      Разработана и реализована стратегия изменений, запущено в
                      работу 52 проекта, сформированы новые подходы к
                      клиентскому опыту, 500+ сотрудников прошли обучение
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>

              <Box>
                <Text className={s.ideaBoxResult}>Результат:</Text>
                <Flex direction={"column"} gap={"12px"}>
                  <Flex
                    gap={"24px"}
                    align={"center"}
                    p={"13px 18px"}
                    className={s.ideaItem}
                  >
                    <Image src={Image1} alt={""} width={44} height={44} />
                    <Text component={"p"}>
                      Операционная прибыль выросла ×6 за 2 года
                    </Text>
                  </Flex>
                  <Flex
                    gap={"24px"}
                    align={"center"}
                    p={"13px 18px"}
                    className={s.ideaItem}
                  >
                    <Image src={Image2} alt={""} width={44} height={44} />
                    <Text component={"p"}>Ускорен вывод новых продуктов</Text>
                  </Flex>
                  <Flex
                    gap={"24px"}
                    align={"center"}
                    p={"13px 18px"}
                    className={s.ideaItem}
                  >
                    <Image src={Image3} alt={""} width={44} height={44} />
                    <Text component={"p"}>500+ сотрудников обучены</Text>
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
            Запросить презентацию
          </Button>
        </Center>
      </div>
      <RequestPresentation />
    </>
  )
}
