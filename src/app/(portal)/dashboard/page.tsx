"use client";

import PortfolioSneakPeek from "@components/PortfolioSneakPeek";
import ProfilePill from "@components/ProfilePill";
import Search from "@components/Search";
import ThoughtOfTheDay from "@components/ThoughtOfTheDay";
import EmblaCarousel from "@components/carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";

const OPTIONS: EmblaOptionsType = {
  align: "start",
  dragFree: true,
  loop: true,
};

const randomIntegers = Array.from({ length: 50 }, () =>
  Math.floor(Math.random() * 100)
);

const Dashboard = () => {
  const SLIDE_COUNT = 50;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <div className=" flex justify-between px-4 gap-6">
        <Search />
        <ProfilePill />
      </div>
      <div className="flex mt-12 px-4 gap-6 ">
        <EmblaCarousel
          className={"w-[55vw]"}
          slides={SLIDES}
          options={OPTIONS}
        />
      </div>
      <PortfolioSneakPeek />
      <ThoughtOfTheDay />
    </>
  );
};

export default Dashboard;
