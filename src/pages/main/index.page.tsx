import Head from "next/head"

import { Books, ConsultingService, MainBanner } from "@/features/main"

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Inrerise Group</title>
      </Head>
      <MainBanner />
      <main className={"container"}>
        <ConsultingService />
        <Books />
        {/*<MainGallery />*/}
        {/*<MainMarkets />*/}
        {/*<MainRecipes />*/}
      </main>
      {/*<Contacts />*/}
    </>
  )
}

export default HomePage
