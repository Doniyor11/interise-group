import { Box, Button, Flex, Progress, RingProgress, Text } from "@mantine/core"
import cx from "clsx"
import React, { useState } from "react"
import {
  CartesianGrid,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
} from "recharts"

import IconRecommendationsTwo from "@/shared/assets/images/interise-group/icon-customer-experience.svg"
import IconArrow from "@/shared/assets/images/interise-group/icon-double-arrow.svg"
import IconRecommendationsOne from "@/shared/assets/images/interise-group/icon-segmentation.svg"
import IconRecommendationsThree from "@/shared/assets/images/interise-group/icon-working-data.svg"
import LogoKaspi from "@/shared/assets/images/interise-group/logo-kaspi.svg"

import s from "./styles.module.scss"

export const InteractiveDashboard = () => {
  const [tab, setTab] = useState<"all" | "retail" | "sme">("retail")

  // Customer Journey Data
  const journeyData = [
    { name: "Поиск и выбор", bankA: 4.2, product: 4.2, payment: 4.2 },
    { name: "Покупка", bankA: 4.0, product: 4.0, payment: 4.0 },
    { name: "Продукт и сайты", bankA: 4.2, product: 4.2, payment: 4.2 },
    { name: "Оплата", bankA: 4.2, product: 4.2, payment: 4.2 },
    { name: "Доставка", bankA: 3.9, product: 3.9, payment: 3.9 },
    { name: "Возврат", bankA: 4.0, product: 4.0, payment: 4.0 },
    { name: "Консультация", bankA: 4.0, product: 4.0, payment: 4.0 },
  ]

  // Bank Rankings Data
  const bankRankings = [
    { name: "Банк A", score: "4.0" },
    { name: "Банк B", score: "3.8" },
    { name: "Банк C", score: "3.6" },
    { name: "Банк D", score: "3.4" },
    { name: "Банк E", score: "3.1" },
  ]

  // Index Criteria Data
  const criteriaData = [
    { name: "Онлайн", value: " 4.3", color: "#ff4757" },
    { name: "Офлайн", value: " 4.5", color: "#0076fe" },
    { name: "Опыт", value: " 4.0", color: "#ffa502" },
    { name: "Связи", value: " 3.6", color: "#2ed573" },
    { name: "Культура", value: " 3.6", color: "#ff6348" },
  ]

  // Scatter Data for "Совокупный опыт"
  const scatterData = [
    { x: 1.5, y: 3, z: 40 },
    { x: 2.5, y: 2, z: 60 },
    { x: 2, y: 2.5, z: 80 },
    { x: 1.5, y: 1.5, z: 50 },
  ]

  // Radar Chart Data
  const radarData = [
    { subject: "Онлайн-заявка", A: 4.5, fullMark: 5 },
    { subject: "Продукт сайта", A: 4.2, fullMark: 5 },
    { subject: "Онлайн-связь", A: 4.0, fullMark: 5 },
  ]

  // Recommendations
  const recommendations = [
    {
      title: "Сегментация",
      description: "Углубление сегментации и внедрение предиктивных моделей.",
      icon: <IconRecommendationsOne />,
    },
    {
      title: "Клиентский опыт",
      description:
        "Создание Phygital-среды, где цифровые инструменты обогащают визит.",
      icon: <IconRecommendationsTwo />,
    },
    {
      title: "Работа с данными",
      description: "Переход к проактивному сервису на базе GenAI.",
      icon: <IconRecommendationsThree />,
    },
  ]

  return (
    <div className={cx(s.sectionWrapper, "container")}>
      <h2>
        Все данные — в одном <span>интерактивном дашборде</span>
      </h2>
      <Text className={s.subtitle}>
        Вы получаете не просто отчет, а живой инструмент для анализа. Ниже
        представлена главная страница дашборда. Сравнивайте себя с конкурентами,
        находите точки роста и принимайте решения на основе реальных данных. В
        полной версии вы сможете изучить детальную оценку каждого шага на
        клиентском пути.
      </Text>
      <Text className={s.tabLabel}>Выберите сегмент</Text>
      <Flex className={s.tabWrapper} m={"12px auto 32px"}>
        <Button
          className={cx(s.tabBtn, { [s.active]: tab === "all" })}
          onClick={() => setTab("all")}
        >
          All
        </Button>
        <Button
          className={cx(s.tabBtn, { [s.active]: tab === "retail" })}
          onClick={() => setTab("retail")}
        >
          Retail
        </Button>
        <Button
          className={cx(s.tabBtn, { [s.active]: tab === "sme" })}
          onClick={() => setTab("sme")}
        >
          SME
        </Button>
      </Flex>
      <Box className={s.cards}>
        <div className={s.leftSide}>
          {/* Customer Choice Index Card */}
          <Box mih={220} className={cx(s.card, s.cardOne)}>
            <Flex
              align="center"
              gap={12}
              mb={8}
              w={"100%"}
              justify="space-between"
            >
              <Flex align={"center"}>
                <LogoKaspi />
                <Box className={s.bankName}>
                  <Text className={s.bank}>Банк A</Text>
                  <Text className={s.text}>Retail Clients</Text>
                </Box>
              </Flex>

              <Box className={s.rating}>
                <Text className={s.number}>
                  <span>1</span> место
                </Text>
                <Text className={s.text}>общий рейтинг</Text>
              </Box>
            </Flex>
            <Flex direction="column" align="center" justify="center" mt={20}>
              <RingProgress
                size={120}
                thickness={12}
                roundCaps
                sections={[{ value: 80, color: "#0076FE" }]}
                classNames={{
                  curve: s.progressCurve,
                }}
                label={<Text className={s.progressValue}>4.0</Text>}
              />
              <Text className={s.progressLabel}>Customer Choice Index</Text>
            </Flex>
          </Box>

          {/* Bank Rankings Card */}
          <Box mih={343} className={cx(s.card, s.cardTwo)}>
            <Text className={s.cardTitle}>Рейтинг банков</Text>
            <Flex className={s.tabWrapper} mt={12} mb={16}>
              <Button className={cx(s.tabBtn, s.active)}>По индексу</Button>
              <Button className={s.tabBtn}>По компонентам</Button>
            </Flex>
            <div className={s.cardBody}>
              {bankRankings.map((bank, idx) => (
                <Flex key={idx} align="center" gap={8} h={20} mb={12}>
                  <Text className={s.label}>{bank.name}</Text>
                  <Progress
                    value={(Number(bank.score) / 5) * 100}
                    color="#0076fe"
                    style={{ flex: 1 }}
                    radius="xl"
                    h={9}
                    classNames={{
                      root: s.progressRoot,
                    }}
                  />
                  <Text className={s.value}>{bank.score}</Text>
                  <Text size="xs" c="#76777a">
                    <IconArrow /> 0.{idx}
                  </Text>
                </Flex>
              ))}
            </div>
          </Box>

          {/* Recommendations Card */}
          <Box mih={317} className={s.card}>
            <Text className={s.cardTitle}>Рекомендации</Text>
            <div className={s.cardBody}>
              {recommendations.map((rec, idx) => (
                <Flex key={idx} className={s.recommendations}>
                  {rec.icon}
                  <Box style={{ flex: 1 }}>
                    <Text size="sm" fw={600} c="#0076fe" mb={4}>
                      {rec.title}
                    </Text>
                    <Text size="xs" c="#535e6b" lh={1.4}>
                      {rec.description}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </div>
          </Box>
        </div>
        <div className={s.rightSide}>
          {/* Customer Journey Line Chart */}
          <Box className={cx(s.card, s.firstCard)}>
            <Flex justify="space-between" align="center" mb={8}>
              <Text className={s.cardTitle}>Путь клиента</Text>
              <Flex gap={16}>
                <Flex align="center" gap={4}>
                  <Box
                    w={8}
                    h={8}
                    style={{ borderRadius: "50%", background: "#0076fe" }}
                  />
                  <Text size="xs" c="#76777a">
                    Банк А
                  </Text>
                </Flex>
                <Flex align="center" gap={4}>
                  <Box
                    w={8}
                    h={8}
                    style={{ borderRadius: "50%", background: "#a855f7" }}
                  />
                  <Text size="xs" c="#76777a">
                    Продукт
                  </Text>
                </Flex>
                <Flex align="center" gap={4}>
                  <Box
                    w={8}
                    h={8}
                    style={{ borderRadius: "50%", background: "#94a3b8" }}
                  />
                  <Text size="xs" c="#76777a">
                    Платеж
                  </Text>
                </Flex>
                <Text size="xs" c="#76777a">
                  Конкуренты
                </Text>
              </Flex>
            </Flex>
            <ResponsiveContainer width="100%" height={"95%"}>
              <LineChart data={journeyData}>
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 10, fill: "#76777a" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis hide domain={[3.5, 4.5]} />
                <Line
                  type="monotone"
                  dataKey="bankA"
                  stroke="#0076fe"
                  strokeWidth={2}
                  dot={{ fill: "#0076fe", r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="product"
                  stroke="#a855f7"
                  strokeWidth={2}
                  dot={{ fill: "#a855f7", r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="payment"
                  stroke="#94a3b8"
                  strokeWidth={2}
                  dot={{ fill: "#94a3b8", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>

          {/* Index Criteria Card */}
          <Box className={cx(s.card, s.cardFive)}>
            <Text className={s.cardTitle}>Критерии индекса</Text>
            <div className={s.cardBody}>
              {criteriaData.map((item, idx) => (
                <Flex key={idx} align="center" gap={8} mb={8} h={20}>
                  <Text className={s.label}>{item.name}</Text>
                  <Progress
                    value={(Number(item.value) / 5) * 100}
                    color={item.color}
                    style={{ flex: 1 }}
                    radius="xl"
                    size="sm"
                    h={8}
                    classNames={{ root: s.progressRoot }}
                  />
                  <Text className={s.value}>{item.value}</Text>
                </Flex>
              ))}
              <Text className={s.description}>
                <span>Вывод</span>
                Банк А лидирует в базовом клиентском опыте (Онлайн+Офлайн).
                Однако его отстают от (Online) и коммуникационных (ТехПод)
                аспектах обслуживания.
              </Text>
            </div>
          </Box>

          {/* Scatter Chart Card */}
          <Box className={s.card} mah={346}>
            <Text className={s.cardTitle}>Совокупный опыт</Text>

            <ResponsiveContainer width="100%" height={250}>
              <ScatterChart
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              >
                <CartesianGrid stroke="#d1d5db" />

                <XAxis
                  type="number"
                  dataKey="x"
                  domain={[2, 5]}
                  tick={{ fontSize: 12, fill: "#76777a" }}
                  axisLine={{ stroke: "#d1d5db" }}
                  label={{
                    value: "Онлайн опыт",
                    position: "bottom",
                    offset: 10,
                    style: { fontSize: 12, fill: "#76777a" },
                  }}
                />

                <YAxis
                  type="number"
                  dataKey="y"
                  domain={[2, 5]}
                  tick={{ fontSize: 12, fill: "#76777a" }}
                  axisLine={{ stroke: "#d1d5db" }}
                  label={{
                    value: "Офлайн опыт",
                    angle: -90,
                    position: "insideLeft",
                    offset: 0,
                    style: { fontSize: 12, fill: "#76777a" },
                  }}
                />

                <Scatter data={scatterData} fill="#3b82f6" />
              </ScatterChart>
            </ResponsiveContainer>
          </Box>

          {/* Radar Chart Card */}
          <Box className={s.card}>
            <Text className={s.cardTitle}>Сравнение каналов</Text>
            <ResponsiveContainer width="100%" height={"100%"}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#d1d5db" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fontSize: 9, fill: "#76777a" }}
                />
                <PolarRadiusAxis
                  domain={[0, 5]}
                  tick={false}
                  axisLine={false}
                />
                <Radar
                  name="Score"
                  dataKey="A"
                  stroke="#0076fe"
                  fill="#60a5fa"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </Box>

          {/* Sales Effectiveness Card */}
          <Box className={s.card}>
            <Text className={s.cardTitle}>Эффективность продаж</Text>
            <Flex direction="column" align="center" justify="center" mt={20}>
              <RingProgress
                size={100}
                thickness={10}
                sections={[{ value: 88, color: "#0076fe" }]}
                label={
                  <Text
                    ta="center"
                    size="xl"
                    fw={700}
                    c="#0076fe"
                    style={{ fontSize: 28 }}
                  >
                    4.4
                  </Text>
                }
              />
              <Text size="xs" c="#0076fe" mt={8} fw={600}>
                Вывод
              </Text>
              <Text size="xs" c="#535e6b" mt={4} ta="center" lh={1.3}>
                Высокая эффективность продаж – прямое следствие совокупного
                опыта. Это доказывает, что инвестиции в клиентский сервис
                окупаются.
              </Text>
            </Flex>
          </Box>

          {/* Digital Activity Card */}
          <Box className={cx(s.card, s.lastCard)}>
            <Text className={s.cardTitle}>Цифровая активность</Text>
            <Flex gap={16} mt={16}>
              <Box style={{ flex: 1 }}>
                <Text size="xs" c="#76777a" mb={8}>
                  Активных пользователей
                </Text>
                <Flex align="baseline" gap={4} mb={4}>
                  <Text size="xl" fw={700} c="#0076fe">
                    125k
                  </Text>
                  <Text size="xs" c="#76777a">
                    / МЕС
                  </Text>
                </Flex>
                <Text size="xs" c="#535e6b" mb={8}>
                  (2026 потенциальный клиент)
                </Text>
                <Flex align="center" gap={8}>
                  <Text size="xs" c="#76777a">
                    Доля зеленой лишка
                  </Text>
                  <Text size="sm" fw={600} c="#2ed573">
                    10.4%
                  </Text>
                </Flex>
              </Box>
              <Box style={{ flex: 1 }}>
                <Flex direction="column" gap={12}>
                  <Box>
                    <Flex justify="space-between" mb={4}>
                      <Text size="xs" c="#76777a">
                        DAU
                      </Text>
                      <Text size="sm" fw={700} c="#0076fe">
                        32k
                      </Text>
                    </Flex>
                    <Progress
                      value={65}
                      color="#0076fe"
                      radius="xl"
                      size="sm"
                    />
                  </Box>
                  <Box>
                    <Flex justify="space-between" mb={4}>
                      <Text size="xs" c="#76777a">
                        MAU
                      </Text>
                      <Text size="sm" fw={700} c="#a855f7">
                        48k
                      </Text>
                    </Flex>
                    <Progress
                      value={45}
                      color="#a855f7"
                      radius="xl"
                      size="sm"
                    />
                  </Box>
                </Flex>
                <Text size="xs" c="#0076fe" mt={8} fw={600}>
                  Вывод
                </Text>
                <Text size="xs" c="#535e6b" mt={4} lh={1.3}>
                  Высокая (посещать, всем/активно (DAU/MAU) и EDS) подтверждает
                  эффективность транзакционного бизнес-модели банка
                </Text>
              </Box>
            </Flex>
          </Box>
        </div>
      </Box>
    </div>
  )
}
