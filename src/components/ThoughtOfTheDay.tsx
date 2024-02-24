import Image from "next/image";
import React from "react";

const ThoughtOfTheDay = () => {
  return (
    <div className="bg-[#19001966] relative px-4 pt-6 pb-4 mx-4 w-1/4 aspect-square mt-10 rounded-lg">
      <div className="bg-[#19001966] w-[100px] aspect-[2/1] rounded-t-full absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[100%]"></div>
      <Image
        src={"/../assets/icons/ThoughtOfTheDay.png"}
        width={50}
        height={50}
        alt="bulb"
        className="mx-auto"
      />
      <div className="text-xs text-center">Thoughts Time</div>
      <div className="mt-4">
        <p className="text-xs text-center">
          “The best way to predict the future is to create it.” – Abraham
          Lincoln
        </p>
      </div>
    </div>
  );
};

export default ThoughtOfTheDay;
