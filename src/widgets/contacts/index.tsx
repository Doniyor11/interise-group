import { Box, Flex, Grid, List, Text } from "@mantine/core"
import cx from "clsx"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import React, { ComponentType, FC, SVGProps } from "react"

import { EmailForm } from "@/features/contact-forms"

import IconLogo from "@/shared/assets/images/interise-group/footer_logo.svg"
import Imaga1 from "@/shared/assets/images/interise-group/formbg.png"
import IconTg from "@/shared/assets/images/interise-group/linkedin.svg"
import IconMap from "@/shared/assets/images/interise-group/map.png"
import Icon1 from "@/shared/assets/images/interise-group/partner/icon1.svg"
import Icon2 from "@/shared/assets/images/interise-group/partner/icon2.svg"
import Icon3 from "@/shared/assets/images/interise-group/partner/icon3.svg"
import Icon4 from "@/shared/assets/images/interise-group/partner/icon4.svg"
import Icon5 from "@/shared/assets/images/interise-group/partner/icon5.svg"
import Icon6 from "@/shared/assets/images/interise-group/partner/icon6.svg"
import Icon7 from "@/shared/assets/images/interise-group/partner/icon7.svg"
import Icon8 from "@/shared/assets/images/interise-group/partner/icon8.svg"
import User1 from "@/shared/assets/images/interise-group/partner/user1.png"
import User2 from "@/shared/assets/images/interise-group/partner/user2.png"
import IconVk from "@/shared/assets/images/interise-group/tg 2.svg"
import IconYoutube from "@/shared/assets/images/interise-group/yu.svg"

import s from "./index.module.scss"

// Типы
type SocialLink = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  href: string
}

type TextStyle = {
  fz: string
  fw: string
  c: string
  lh: string
  lts: string
}

type ExperienceSection = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description: string
}

type PartnerCardProps = {
  image: StaticImageData
  name: string
  role: string
  achievements: string[]
}

type ExperienceCardProps = {
  sections: ExperienceSection[][]
}

type ContactInfoProps = {
  title: string
  items: string[]
}

type PartnerData = PartnerCardProps & {
  experience: ExperienceSection[][]
}

// Константы
const SOCIAL_LINKS: SocialLink[] = [
  { Icon: IconTg, href: "/" },
  { Icon: IconVk, href: "/" },
  { Icon: IconYoutube, href: "/" },
]

const TEXT_STYLES: Record<string, TextStyle> = {
  title: { fz: "32px", fw: "400", c: "#535E6B", lh: "120%", lts: "-0.64px" },
  subtitle: { fz: "16px", fw: "400", c: "#0076FE", lh: "120%", lts: "-0.32px" },
  sectionTitle: {
    fz: "24px",
    fw: "400",
    c: "#535E6B",
    lh: "120%",
    lts: "-0.48px",
  },
  body: { fz: "16px", fw: "400", c: "#566677", lh: "120%", lts: "-0.32px" },
}

// Компоненты
const SocialLinks: FC = () => (
  <Flex gap="12px" mt={"20px"}>
    {SOCIAL_LINKS.map(({ Icon, href }, idx) => (
      <Link key={idx} href={href}>
        <Icon />
      </Link>
    ))}
  </Flex>
)

const PartnerCard: FC<PartnerCardProps> = ({
  image,
  name,
  role,
  achievements,
}) => (
  <Box className={s.partnerBox} p="25px">
    <Box>
      <Box className={s.image}>
        <Image src={image} alt={name} width={342} height={257} />
      </Box>
      <Text {...TEXT_STYLES.title}>{name}</Text>
      <Text {...TEXT_STYLES.subtitle} mb="20px">
        {role}
      </Text>
      <List w={"290px"} className={s.listWrapper}>
        {achievements.map((achievement, idx) => (
          <List.Item key={idx} mb="10px">
            <Text
              {...TEXT_STYLES.body}
              dangerouslySetInnerHTML={{ __html: achievement }}
            />
          </List.Item>
        ))}
      </List>
    </Box>
    <SocialLinks />
  </Box>
)

const ExperienceSection: FC<ExperienceSection> = ({
  icon: Icon,
  title,
  description,
}) => (
  <Box w="100%">
    <Flex gap="12px" mb="12px" align="flex-start">
      <Icon />
      <Text
        {...TEXT_STYLES.sectionTitle}
        mb="12px"
        dangerouslySetInnerHTML={{ __html: title }} //
      />
    </Flex>
    <Text {...TEXT_STYLES.body}>{description}</Text>
  </Box>
)

const ExperienceCard: FC<ExperienceCardProps> = ({ sections }) => (
  <Box
    className={cx(s.partnerBox, s.partnerBoxRight)}
    p="45px 28px"
    mb={"32px"}
  >
    <Text {...TEXT_STYLES.title} mb="40px">
      Проектный опыт:
    </Text>
    <Flex gap="70px">
      {sections.map((column, idx) => (
        <Flex
          key={idx}
          gap={idx === 0 ? "40px" : "32px"}
          direction="column"
          w="50%"
        >
          {column.map((section, sIdx) => (
            <ExperienceSection key={sIdx} {...section} />
          ))}
        </Flex>
      ))}
    </Flex>
  </Box>
)

const ContactInfo: FC<ContactInfoProps> = ({ title, items }) => (
  <Flex direction="column" gap="6px">
    <Text component="p" className={s.infoTitle} mb="3px">
      {title}
    </Text>
    {items.map((item, idx) => (
      <Text
        key={idx}
        component="p"
        className={s.infoText}
        dangerouslySetInnerHTML={{ __html: item }}
      />
    ))}
  </Flex>
)

// Данные партнеров

const PARTNERS_DATA: PartnerData[] = [
  {
    image: User1,
    name: "Дмитрий Вакин",
    role: "Сооснователь, InteriseGroup",
    achievements: [
      "Инвестор и совладелец daily и tech проектов",
      "Top-100 Forbes 30 under 30",
      "Член делового совета BRICS, Мьянмы",
    ],
    experience: [
      [
        {
          icon: Icon1,
          title: "Международные позиции",
          description:
            "Сооснователь InteriseGroup. Инвестор и совладелец daily- и tech-проектов. Член делового совета BRICS (Мьянма). Вошел в топ-100 Forbes «30 до 30» в категории «Финансы и инвестиции» (2020).",
        },
        {
          icon: Icon3,
          title: "Опыт и карьерные <br /> результаты", // ✅ Исправлено
          description:
            "15+ лет опыта в инвестиционной, банковской, финансовой и IT-отраслях. Только в 2021 году участвовал в 30 проектах. Работал стратегом и консультантом в банковской сфере, ритейле и телекоме. Руководил развитием инноваций и перспективных проектов в Альфа-Банк Россия, разрабатывал стратегию для розничного и цифрового бизнеса, МСБ и СРКБ. Разработал инновационную стратегию развития банка и группы ABH Holding и реализовал её, участвовал в запуске инвестиционного фонда группы (€500 млн) и выстроил работу между банком и фондом для интеграции портфельных компаний.",
        },
      ],
      [
        {
          icon: Icon2,
          title: "Компетенции и ключевые экспертизы",
          description:
            "Эксперт в стратегии и трансформации, управлении системно значимыми проектами и изменениями. Имеет опыт формирования кросс-индустриальных стратегий и O2O-партнерств в соответствии с концепцией Industry 4.0 (крупнейшие кейсы в РФ на стыке банк+ритейл, банк+телеком).",
        },
        {
          icon: Icon4,
          title: "Текущая деятельность",
          description:
            "Сегодня консультирует и входит в советы директоров ряда компаний как директор программ трансформации, а также является инвестором и совладельцем международного консалтинга, проектов в области нейросенсорики, metaverse, производства и дистрибуции инновационной пищевой продукции, медиасети, проектов по работе с данными и аналитикой. Жил и работал в Китае, знаком с работой крупных финансовых и экосистемных компаний изнутри.",
        },
      ],
    ],
  },
  {
    image: User2,
    name: "Алексей Веретенов",
    role: "Сооснователь, InteriseGroup",
    achievements: [
      "Управляющий партнер, Senteo & CEO Сентео Восток",
      "Председатель правления, банк <br /> и международная P2P платежная система", // ✅ Исправлено
      "Инвестор и совладелец daily и venture проектов",
    ],
    experience: [
      [
        {
          icon: Icon5,
          title: "Международный опыт",
          description:
            "Эксперт по трансформации, цифровизации и управлению изменениями с 20-летним опытом работы в 26 странах, 150+ компаниях и более чем 300 проектах.",
        },
        {
          icon: Icon6,
          title: "Фокус на стратегиях <br /> и внедрении", // ✅ Исправлено
          description:
            "Разрабатывал стратегии с фокусом на внедрение, реализовывал проекты по управлению трансформацией, цифровизации, развитию корпоративной культуры, системному ценообразованию, клиентоориентированной аналитике и внедрению CRM-систем.",
        },
      ],
      [
        {
          icon: Icon7,
          title: "Профессиональный путь",
          description:
            "Работал в Альфа-Банке (Россия, Беларусь, Украина), Райффайзенбанке, Импэксбанке, розничной сети «Евросеть», инвестиционном фонде ANIF и консультантом в банковской сфере, розничной торговле, страховании, тяжёлой промышленности, автомобилестроении и телекоммуникациях.",
        },
        {
          icon: Icon8,
          title: "Глобальные проекты",
          description:
            "Опыт охватывает США, Европу и Центральную Азию; среди компаний — BNP Paribas, Atlant-M, Societe Generale, Росбанк, Росинтер, 360 Federal Credit Union, MasterCard, Альфа-Банк, ВТБ, Мегафон, ЧТПЗ, TBC Bank, Ак Барс, Yelo Bank, Societe Generale Group и другие.",
        },
      ],
    ],
  },
]

export const Contacts = () => {
  return (
    <div className={s.sectionWrapper}>
      <div className="container">
        <div className={s.box}>
          <Text className="section-title" ta="center" mb={"11px"}>
            Партнёры
          </Text>
          <Text className="section-subtitle" c="#fff" ta="center" mb="40px">
            <span>Команда</span> InteriseGroup
          </Text>

          <Flex direction={"column"} gap={"22px"} mb={"32px"}>
            {PARTNERS_DATA.map((partner, idx) => (
              <Grid key={idx}>
                <Grid.Col span={3}>
                  <PartnerCard {...partner} />
                </Grid.Col>
                <Grid.Col span={9}>
                  <ExperienceCard sections={partner.experience} />
                </Grid.Col>
              </Grid>
            ))}
          </Flex>

          <Flex mb="40px" gap="32px" id={"navbar5"} mt={"30px"}>
            <Box className={s.boxForm}>
              <Flex direction="column" gap="8px" mb="32px">
                <Text component="h2">Записаться на консультацию</Text>
                <Text component="p">
                  Получите персональные рекомендации и ответы <br /> на ваши
                  вопросы.
                </Text>
              </Flex>
              <EmailForm />
            </Box>
            <Box className={s.boxFormImage}>
              <Image src={Imaga1} alt="Imaga1" width={751} height={331} />
            </Box>
          </Flex>

          <Flex gap="30px" align="stretch">
            <Box className={s.mapLeft}>
              <Flex direction="column">
                <Flex direction="column" gap="8px" mb="31px">
                  <IconLogo />
                </Flex>
                <Flex gap="18px" mb="20px">
                  <IconYoutube />
                  <IconTg />
                  <IconVk />
                </Flex>
                <ContactInfo
                  title="Email:"
                  items={[
                    "PR и СМИ: <span>pr@interisegroup.com</span>",
                    "Запросы бизнеса: <br /><span>request@interisegroup.com</span>",
                  ]}
                />
              </Flex>

              <Flex
                direction="column"
                gap="18px"
                align="flex-start"
                justify={"space-between"}
              >
                <Flex direction="column" gap="6px">
                  <Text component="p" className={s.infoTitle} mb="23px">
                    Контакты партнёров:
                  </Text>
                  <Text component="p" className={s.infoText}>
                    Дмитрий Вакин <br /> Со-основатель, Управляющий
                    <br /> партнер +79652877590
                  </Text>
                </Flex>
                <Flex direction="column" gap="6px">
                  <Text component="p" className={s.infoTitle} mb="34px">
                    Наш офис:
                  </Text>
                  <Text component="p" className={s.infoText}>
                    Остоженка 37/7 с.2, особняк <br /> Conversation Cafe, 4 этаж
                  </Text>
                </Flex>
              </Flex>

              <Flex direction="column" gap="18px" h={"100%"}>
                <Text component="p" className={s.infoText} mt={"50px"}>
                  Алексей Веретенов <br /> Со-основатель, Управляющий <br />{" "}
                  партнер +79032846834
                </Text>
              </Flex>
            </Box>
            <Box className={s.mapRight}>
              <Image src={IconMap} alt="IconMap" width={415} height={353} />
            </Box>
          </Flex>

          <Flex justify={"center"}>
            <Text
              c={"#8696A9"}
              fz={"16px"}
              fw={"400"}
              lh={"121.2%"}
              mt={"60px"}
            >
              InteriseGroup · 2025
            </Text>
          </Flex>
        </div>
      </div>
    </div>
  )
}
