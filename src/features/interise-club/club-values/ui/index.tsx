import { Center, Flex, Skeleton, Text } from "@mantine/core"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import React from "react"

import {
  useGetCompanyValuesQuery,
  useGetExpertsFocusingQuery,
} from "@/features/interise-club/club-values/api/query.ts"
import {
  ICompanyValues,
  IExpertsFocusing,
} from "@/features/interise-club/club-values/api/types.ts"

import s from "./styles.module.scss"

export const ClubValues = () => {
  const { t, lang } = useTranslation("common")
  const { data: DataCompanyValues, isLoading: isLoadingValues } =
    useGetCompanyValuesQuery()
  const { data: DataExpertsFocusing, isLoading: isLoadingExperts } =
    useGetExpertsFocusingQuery()

  return (
    <div className={"container"}>
      <div className={s.valuesSection}>
        <h3
          className={s.sectionTitle}
          dangerouslySetInnerHTML={{ __html: t("club.values.title") }}
        />
        <div className={s.cards}>
          {isLoadingValues ? (
            <>
              <Skeleton width={"100%"} height={180} radius={16} />
              <Skeleton width={"100%"} height={180} radius={16} />
              <Skeleton width={"100%"} height={180} radius={16} />
            </>
          ) : DataCompanyValues && DataCompanyValues.length > 0 ? (
            DataCompanyValues.map((item: ICompanyValues, i: number) => (
              <div key={i} data-aos="zoom-in-up" className={s.card}>
                <Flex align="center" gap={12}>
                  <div className={s.icon}>
                    <Image
                      src={item?.icon}
                      alt={item?.title}
                      width={40}
                      height={40}
                    />
                  </div>
                  <Text className={s.cardTitle}>{item?.title}</Text>
                </Flex>
                <Text className={s.cardText}>{item?.description}</Text>
              </div>
            ))
          ) : (
            <Center w="100%" py={40}>
              <Text size="lg" c="dimmed">
                {lang === "ru"
                  ? "Нет данных о ценностях компании"
                  : "No company values data available"}
              </Text>
            </Center>
          )}
        </div>
      </div>
      <div className={s.expertsSection}>
        <h3
          className={s.sectionTitle}
          dangerouslySetInnerHTML={{ __html: t("club.values.experts.title") }}
        />
        <div className={s.cards}>
          {isLoadingExperts ? (
            <>
              <Skeleton width={"100%"} height={160} radius={16} />
              <Skeleton width={"100%"} height={160} radius={16} />
              <Skeleton width={"100%"} height={160} radius={16} />
            </>
          ) : DataExpertsFocusing && DataExpertsFocusing.length > 0 ? (
            DataExpertsFocusing.map((item: IExpertsFocusing, i: number) => (
              <div key={i} data-aos="zoom-in-up" className={s.card}>
                <Flex gap={12}>
                  <div className={s.point} />
                  <Text className={s.cardTitle}>{item?.title}</Text>
                </Flex>
                <Text className={s.cardText}>{item?.description}</Text>
              </div>
            ))
          ) : (
            <Center w="100%" py={40}>
              <Text size="lg" c="dimmed">
                {lang === "ru"
                  ? "Нет данных об экспертах"
                  : "No experts data available"}
              </Text>
            </Center>
          )}
        </div>
      </div>
    </div>
  )
}
