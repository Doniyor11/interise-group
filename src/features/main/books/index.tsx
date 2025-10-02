import { Carousel } from "@mantine/carousel"
import { Box, Button, Flex, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import ImageRight from "@/shared/assets/images/interise-group/imgright.svg"
import ImageSlider1 from "@/shared/assets/images/interise-group/slider1.png"
import ImageSlider2 from "@/shared/assets/images/interise-group/slider2.png"
import ImageSlider3 from "@/shared/assets/images/interise-group/slider3.png"

import s from "./styles.module.scss"

export const Books = () => {
  return (
    <div className={s.sectionWrapper}>
      <Flex>
        <Flex direction={"column"} w={"50%"}>
          <Text className={"section-title sm"}>
            От идей к результатам: реальные кейсы
          </Text>
          <Text className={"section-subtitle"}>
            Эффективность нашего подхода лучше всего демонстрируют конкретные
            результаты —
            <span>рост выручки, доли рынка и операционной эффективности.</span>
          </Text>
        </Flex>
        <Flex
          direction={"column"}
          w={"50%"}
          justify={"center"}
          align={"flex-end"}
        >
          <Text
            className={s.infoNumber}
            mb={"13px"}
            fz={"24px"}
            c={"#0076FE"}
            fw={400}
            lts={"-0.48px"}
            lh={"120%"}
          >
            300+ проектов · 30+ стран · 15 отраслей
          </Text>
          <Text
            fz={"16px"}
            c={"#566677"}
            fw={400}
            lts={"-0.32px"}
            lh={"120%"}
            maw={"438px"}
          >
            Здесь представлены проекты из разных стран и отраслей, реализованные
            в тесном партнерстве с клиентами.
          </Text>
        </Flex>
      </Flex>

      <Carousel
        slideGap={16}
        slideSize={485}
        align={"start"}
        height={"auto"}
        slidesToScroll={"auto"}
        classNames={{
          controls: s.carouselControls,
          control: s.carouselControl,
        }}
        mt={"35px"}
        nextControlIcon={<ImageRight />}
        previousControlIcon={<ImageRight />}
      >
        <Carousel.Slide>
          <div className={s.card}>
            <Box>
              <Text className={s.cardNumber}>№1</Text>
              <Text className={s.cardInfo}>
                <b>Страна:</b> Казахстан
              </Text>
              <Text>
                <b>Отрасль: </b>Банковский сектор
              </Text>
              <Image className={s.image} src={ImageSlider1} alt={"ImageBook"} />
              <Flex direction={"column"} gap={"4px"}>
                <Text className={s.cardInfo} mb={"4px"}>
                  <b> Задача:</b> Провести интеграцию с другим банком и
                  полномасштабная трансформация операционной модели
                </Text>
                <Text className={s.cardInfo}>
                  <b>Решение:</b>Разработана и реализована стратегия изменений,
                  запущено в работу 52 проекта, сформированы новые подходы к
                  клиентскому опыту, 500+ сотрудников прошли обучение
                </Text>
                <Text className={s.cardInfo}>
                  <b>Результат: </b>Операционная прибыль выросла в 6 раз за два
                  года, ускорен вывод новых продуктов
                </Text>
              </Flex>
            </Box>
            <Button
              bg={"#0076FE"}
              color={"#FFF"}
              radius={8}
              h={"44px"}
              w={"192px"}
              mt={"60px"}
            >
              Подробнее
            </Button>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={s.card}>
            <Text className={s.cardNumber}>№2</Text>
            <Text className={s.cardInfo}>
              <b>Страна:</b> Армения
            </Text>
            <Text>
              <b>Отрасль: </b> Государственные инвестиции / авиация
            </Text>
            <Image className={s.image} src={ImageSlider2} alt={"ImageBook"} />
            <Flex direction={"column"} gap={"4px"}>
              <Text className={s.cardInfo} mb={"4px"}>
                <b> Задача:</b> Разработать национальную инвестиционную
                платформу и подготовить условия для запуска нового
                авиаперевозчика.
              </Text>
              <Text className={s.cardInfo}>
                <b>Решение:</b>Сформирован инвестиционный план, создана
                платформа, проработана модель авиакомпании, подготовлен запуск и
                внедрены ESG-практики.
              </Text>
              <Text className={s.cardInfo}>
                <b>Результат: </b>Перевозчик выполняет регулярные рейсы,
                привлечено 210+ млн $ инвестиций, создано 800+ рабочих мест,
                выплачено 14+ млн $ налогов.
              </Text>
            </Flex>
            <Button
              bg={"#0076FE"}
              color={"#FFF"}
              radius={8}
              h={"44px"}
              w={"192px"}
              mt={"60px"}
            >
              Подробнее
            </Button>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={s.card}>
            <Text className={s.cardNumber}>№3</Text>
            <Text className={s.cardInfo}>
              <b>Страна:</b> Россия
            </Text>
            <Text>
              <b>Отрасль: </b> Частная сеть медицининских клиник
            </Text>
            <Image className={s.image} src={ImageSlider3} alt={"ImageBook"} />
            <Flex direction={"column"} gap={"4px"}>
              <Text className={s.cardInfo} mb={"4px"}>
                <b> Задача:</b> Увеличить выручку и подготовить компанию к
                международной экспансии
              </Text>
              <Text className={s.cardInfo}>
                <b>Решение:</b> Проведена комплексная диагностика,
                discovery-анализ, выявлено 46 инициатив для роста, сформирован
                план запуска новых программ и выхода на рынки СНГ, Южной Кореи и
                MENA.
              </Text>
              <Text className={s.cardInfo}>
                <b>Результат: </b>Запущены новые направления, начата экспансия,
                подготовлен пилот в Южной Корее.
              </Text>
            </Flex>
            <Button
              bg={"#0076FE"}
              color={"#FFF"}
              radius={8}
              h={"44px"}
              w={"192px"}
              mt={"60px"}
            >
              Подробнее
            </Button>
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  )
}
