import { AppProps } from "next/app"
import Head from "next/head"
import React from "react"

import { Layout } from "@/widgets"

import "@/shared/styles/app.scss"

import { withHocs } from "./lib/with-hocs"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Inrerise Group</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
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
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default withHocs(App)
