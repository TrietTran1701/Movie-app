import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/common/Header";
import useScreenSize from "../hooks/useScreenSize";
import Homepage from "./Homepage";
const Home: NextPage = () => {
  const [isMobile] = useScreenSize();
  return (
    <div className="h-screen dark:bg-dark-theme bg-light-theme">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isMobile && <Header />}
      <Homepage />
    </div>
  );
};

export default Home;
