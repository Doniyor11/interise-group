import { ColorSchemeScript } from "@mantine/core"
import { Head, Html, Main, NextScript } from "next/document"
import React from "react"

export default function Document(props: any) {
  const locale = props.__NEXT_DATA__?.locale || "ru"

  return (
    <Html lang={locale}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"anonymous"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <ColorSchemeScript />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
