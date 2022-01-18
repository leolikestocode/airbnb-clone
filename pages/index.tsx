import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Inspirations from "../components/Inspirations";
import MainBanner from "../components/MainBanner";
import Spacing from "../components/Spacing";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen ">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <Header />

          <MainBanner />
          <Spacing space={24} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Spacing space={24} />
        {/* Inspiration section */}
        <Inspirations />

        {/* Experiences section */}

        {/* Footer */}
      </div>
    </div>
  );
};

export default Home;
