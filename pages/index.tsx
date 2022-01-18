import type { NextPage } from "next";

import Header from "../components/Header";
import Inspirations from "../components/Inspirations";
import MainBanner from "../components/MainBanner";
import Spacing from "../components/Spacing";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen ">
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <Header />
          <MainBanner />
          <Spacing space={24} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Spacing space={24} />
        <Inspirations />
        <Spacing space={24} />
      </div>
    </div>
  );
};

export default Home;
