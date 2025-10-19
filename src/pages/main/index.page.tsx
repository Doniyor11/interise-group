import Head from "next/head"

import { Contacts } from "@/widgets"

import {
  Banner,
  Books,
  ConsultingService,
  MainBanner,
  MainGallery,
  MainRecipes,
} from "@/features/main"

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Inrerise Group</title>
      </Head>
      <MainBanner />
      <main className={"container"}>
        <ConsultingService />
      </main>
      <Banner />
      <main className={"container"}>
        <Books />
      </main>
      <MainGallery />
      <main className={"container"}>
        <MainRecipes />
      </main>
      <Contacts />
    </>
  )
}

export default HomePage
