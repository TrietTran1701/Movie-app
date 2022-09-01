import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/common/Header"
const Home: NextPage = () => {

  return (
    <div className="dark:bg-dark-theme bg-light-theme">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header/>
    <main>
    </main>
    </div>
  )
}

export default Home
