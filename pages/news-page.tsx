import type { NextPage } from "next";
import FrameWithText from "../components/frame-with-text";
import Navbar from "../components/navbar";
import { useEffect } from "react";
import getNews from "../api/getNews";

const NewsPage: NextPage = () => {
  return (
    <div className="w-full relative rounded-13xl bg-whitesmoke-100 overflow-hidden flex flex-col items-end justify-start pt-[0.688rem] pb-[16.938rem] pr-[4.75rem] pl-[0rem] box-border gap-[4rem] tracking-[normal] mq975:gap-[2rem_4rem] mq975:pr-[2.375rem] mq975:box-border mq725:gap-[1rem_4rem]">
      <Navbar />
      <div className="w-[57.563rem] h-[4.813rem] relative hidden max-w-full" />
      <FrameWithText />
    </div>
  );
};

export default NewsPage;
