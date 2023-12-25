"use client";

import ProfilePill from "@components/ProfilePill";
import Search from "@components/Search";
import EmblaCarousel from "@components/carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";

const OPTIONS: EmblaOptionsType = {
  align: "start",
  dragFree: true,
  loop: true,
};

const Dashboard = () => {
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <div className=" flex justify-between px-4 gap-6">
        <Search />
        <ProfilePill />
      </div>
      <div className="flex mt-12 px-4 gap-6">
        <EmblaCarousel className={"w-4/6"} slides={SLIDES} options={OPTIONS} />
      </div>
    </>
  );
};

export default Dashboard;
