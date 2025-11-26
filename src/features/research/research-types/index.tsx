import { Box, Loader, Text } from "@mantine/core"
import cx from "clsx"
import dayjs from "dayjs"
import "dayjs/locale/en"
import "dayjs/locale/ru"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

import { ResearchForm } from "@/features/contact-forms"
import { useContactFormsStore } from "@/features/contact-forms/model"

import { useGetResearchesQuery } from "@/entities/research/query.ts"
import { IGetResearches } from "@/entities/research/types.ts"

// import IconClear from "@/shared/assets/images/icons/icon-close.svg"
// import IconArrow from "@/shared/assets/images/interise-group/icon-arrow-down-2.svg"
// import IconCalendar from "@/shared/assets/images/interise-group/icon-calendar-2.svg"
import s from "./styles.module.scss"

export const ResearchTypes = () => {
  const { t, lang } = useTranslation("common")
  const router = useRouter()
  const { setResearchForm } = useContactFormsStore()

  const [selectMonth, _] = useState<Date | null>(null)
  const { data, isLoading } = useGetResearchesQuery({
    lang,
    month: selectMonth ? dayjs(selectMonth).format("MM") : undefined,
    year: selectMonth ? dayjs(selectMonth).format("YYYY") : undefined,
  })

  useEffect(() => {
    dayjs.locale(lang)
  }, [lang])

  return (
    <>
      <div className={cx(s.sectionWrapper, "container")}>
        <div className={s.filters}>
          <Text
            className={s.title}
            dangerouslySetInnerHTML={{ __html: t("research.types.title") }}
          />

          {/*<MonthPickerInput*/}
          {/*  locale={lang}*/}
          {/*  // @ts-ignore*/}
          {/*  placeholder={t("ui.placeholderDate")}*/}
          {/*  value={selectMonth}*/}
          {/*  className={s.filterBtn}*/}
          {/*  valueFormat={"MMMM"}*/}
          {/*  onChange={setSelectMonth as any}*/}
          {/*  leftSection={<IconCalendar />}*/}
          {/*  rightSection={*/}
          {/*    selectMonth ? (*/}
          {/*      <IconClear*/}
          {/*        className={s.clear}*/}
          {/*        onClick={() => setSelectMonth(null)}*/}
          {/*      />*/}
          {/*    ) : (*/}
          {/*      <IconArrow />*/}
          {/*    )*/}
          {/*  }*/}
          {/*  popoverProps={{*/}
          {/*    position: "bottom-end",*/}
          {/*  }}*/}
          {/*/>*/}
        </div>
        <div className={s.cards}>
          {isLoading ? (
            <div className={s.loaderWrapper}>
              <Loader size="lg" />
              <Text className={s.loadingText}>
                {t("research.types.loading")}
              </Text>
            </div>
          ) : data && data.length > 0 ? (
            data.map((item: IGetResearches, i: number) => (
              <div
                key={i}
                className={s.card}
                onClick={() => {
                  if (item?.disabled) return

                  if (item?.link) {
                    router.push(item.link)
                  } else {
                    setResearchForm(item?.title)
                  }
                }}
              >
                <Box>
                  <Image
                    src={item?.image}
                    alt={item?.title}
                    className={s.image}
                    width={370}
                    height={152}
                  />
                  <Text className={s.cardTitle}>{item?.title}</Text>
                  <Text className={s.description}>{item?.description}</Text>
                </Box>
                {item?.disabled && (
                  <div className={s.disabledWrapper}>
                    <Text className={s.label}>
                      {t("research.card.release_planned")}
                    </Text>
                    <Text className={s.date}>
                      {dayjs(item?.disable_date).format("DD.MM.YY")}
                    </Text>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className={s.emptyState}>
              <Text className={s.emptyText}>
                {t("research.types.no_results")}
              </Text>
            </div>
          )}
        </div>
      </div>
      <ResearchForm />
    </>
  )
}
