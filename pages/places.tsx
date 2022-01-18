import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Inspirations from "../components/Inspirations";
import MainBanner from "../components/MainBanner";
import Spacing from "../components/Spacing";

const Places: NextPage = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <Header />
      </div>
    </div>
  );
};

export default Places;
