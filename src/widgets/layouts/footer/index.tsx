import { Anchor, Box, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import dayjs from "dayjs"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { EmailForm } from "@/features/contact-forms"

import IconLogo from "@/shared/assets/images/interise-group/footer_logo.svg"
import Imaga1 from "@/shared/assets/images/interise-group/formbg.png"
import IconLin from "@/shared/assets/images/interise-group/linkedin.svg"
import IconLocation from "@/shared/assets/images/interise-group/location-outline.svg"
import IconLogoRu from "@/shared/assets/images/interise-group/logo_ru.svg"
import IconEmail from "@/shared/assets/images/interise-group/mail-outline.svg"
import IconTg from "@/shared/assets/images/interise-group/tg 2.svg"

import s from "./styles.module.scss"

export const Footer = () => {
  const { t, lang } = useTranslation("common")
  const matches = useMediaQuery("(max-width: 1040px)")

  return (
    <>
      <div className={s.footerWrapper}>
        <Flex
          mb="40px"
          gap="32px"
          id={"contacts"}
          mt={"30px"}
          align={"stretch"}
          direction={matches ? "column" : "row"}
        >
          <Box className={s.boxForm} data-aos="fade-right">
            <Text component="h2">{t("footer.write_to_us")}</Text>
            <Text component="p">{t("footer.we_will_contact_you")}</Text>
            <EmailForm />
          </Box>
          <Box className={s.boxFormImage} data-aos="fade-left">
            <Image src={Imaga1} alt="Imaga1" width={751} height={331} />
          </Box>
        </Flex>

        <Flex gap="30px" align="stretch" direction={matches ? "column" : "row"}>
          <Box data-aos="fade-right" className={s.mapLeft}>
            {/* 1 */}
            <Flex
              direction={"column"}
              gap={matches ? "15px" : "50px"}
              h={"100%"}
              justify={"space-between"}
            >
              <Flex
                gap={"35px"}
                direction={matches ? "row" : "column"}
                align={matches ? "center" : "flex-end"}
                mb="20px"
              >
                {lang === "ru" ? (
                  <IconLogoRu className={s.logo} />
                ) : (
                  <IconLogo className={s.logo} />
                )}
                <Flex gap="18px" className={s.messengers}>
                  <Anchor
                    h={71}
                    target={"_blank"}
                    href={"https://www.linkedin.com/company/interise-group"}
                  >
                    <IconLin />
                  </Anchor>
                  <Anchor h={71} target={"_blank"} href={"https://t.me/Di_VC"}>
                    <IconTg />
                  </Anchor>
                </Flex>
              </Flex>
              <Flex direction={"column"} gap="8px">
                <Link href={"/about"} className={cx(s.infoText, s.menu)}>
                  {t("footer.menu.about")}
                </Link>
                <Link href={"/case"} className={cx(s.infoText, s.menu)}>
                  {t("footer.menu.cases")}
                </Link>
                <Link href={"/research"} className={cx(s.infoText, s.menu)}>
                  {t("navbar.menu.research")}
                </Link>
                <Link
                  href={"/interise-club"}
                  className={cx(s.infoText, s.menu)}
                >
                  {t("footer.menu.interise_club")}
                </Link>
                <Link href={"/#directions"} className={cx(s.infoText, s.menu)}>
                  {t("footer.menu.work_directions")}
                </Link>
              </Flex>
            </Flex>
            <span className={s.line} />
            {/* 2 */}
            <Flex
              direction={"column"}
              gap={matches ? "15px" : "50px"}
              h={"100%"}
              justify={"space-between"}
            >
              <Flex
                gap="19px"
                direction="column"
                align="flex-start"
                justify={"space-between"}
              >
                <Flex direction="column" gap="6px">
                  <Flex
                    align={"center"}
                    gap={"8px"}
                    className={s.infoTitle}
                    mb="24px"
                  >
                    <IconEmail />
                    {t("footer.contact.write_to_us")}
                  </Flex>
                  <Flex direction="column" mb={"16px"}>
                    <Text component="p" className={s.infoText}>
                      {t("footer.contact.pr_and_media")}
                    </Text>
                    <Anchor
                      className={s.infoText}
                      c={"#535E6B"}
                      fz={"24px"}
                      href={"mailto:pr@interisegroup.com"}
                    >
                      pr@interisegroup.com
                    </Anchor>
                  </Flex>
                  <Flex direction="column">
                    <Text component="p" className={s.infoText}>
                      {t("footer.contact.cooperation")}
                    </Text>
                    <Anchor
                      className={s.infoText}
                      c={"#535E6B"}
                      fz={"24px"}
                      href={"mailto:request@interisegroup.com"}
                    >
                      request@interisegroup.com
                    </Anchor>
                  </Flex>
                </Flex>
              </Flex>
              <Flex direction={"column"} gap="8px">
                <Anchor
                  target={"_blank"}
                  href={
                    lang === "en"
                      ? "/Privacy_Policy.pdf"
                      : "/Политика_конфиденциальности.pdf"
                  }
                  className={cx(s.infoText, s.menu)}
                >
                  {t("footer.legal.privacy_policy")}
                </Anchor>
                <Anchor
                  target={"_blank"}
                  href={
                    lang === "en"
                      ? "/User_Agreement.pdf"
                      : "/Пользовательское_соглашение.pdf"
                  }
                  className={cx(s.infoText, s.menu)}
                >
                  {t("footer.legal.user_agreement")}
                </Anchor>
                <Anchor
                  target={"_blank"}
                  href={
                    lang === "en"
                      ? "/Consent_to_Receive_Newsletters.pdf"
                      : "/Согласие_на_получение_рассылок.pdf"
                  }
                  className={cx(s.infoText, s.menu)}
                >
                  {t("footer.legal.mailing_consent")}
                </Anchor>
              </Flex>
            </Flex>
            <span className={s.line} />
            {/* 3/3 */}
            <Flex
              h={"100%"}
              direction={"column"}
              gap={matches ? "15px" : "50px"}
              justify={"flex-end"}
            >
              <Flex direction="column" gap="18px" justify={"space-between"}>
                <Flex align={"center"} gap={"8px"} className={s.infoTitle}>
                  <IconLocation />
                  {t("footer.contact.our_office")}
                </Flex>
                <Flex direction="column">
                  <Text component="p" className={s.infoText}>
                    {t("footer.contact.address")}
                  </Text>
                  <Text component="p" className={cx(s.infoText, s.address)}>
                    {t("footer.contact.office_address")}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>
          <Box data-aos="fade-left" className={s.mapRight}>
            <iframe
              src="https://yandex.com/map-widget/v1/?um=constructor%3A42c9af928a64586089fec4baa8e2113d4c45085dfbda73f148aca3da4fddc4a3&amp;source=constructor"
              width="100%"
              height="100%"
            />
          </Box>
        </Flex>

        <Flex justify={"center"}>
          <Text
            c={"#8696A9"}
            fz={"16px"}
            fw={"400"}
            lh={"121.2%"}
            mt={matches ? 20 : 60}
          >
            {lang === "en"
              ? "© «InteriseGroup» Limited Liability Company · "
              : "© Общество с ограниченной ответственностью «ИнтерайзГрупп» · "}
            {dayjs(new Date()).format("YYYY")}
          </Text>
        </Flex>
      </div>
    </>
  )
}
