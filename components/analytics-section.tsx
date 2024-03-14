import type { NextPage } from "next";

const AnalyticsSection: NextPage = () => {
  return (
    <div className="rounded-81xl bg-royalblue-100 flex flex-row items-start justify-start py-[0.156rem] pr-[0.938rem] pl-[0.5rem] gap-[0.625rem] text-left text-[1rem] text-whitesmoke-100 font-plus-jakarta-sans">
      <img
        className="h-[3rem] w-[3rem] relative"
        loading="lazy"
        alt=""
        src="/frame-427319719.svg"
      />
      <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
        <img
          className="w-[1.5rem] h-[1.5rem] relative"
          loading="lazy"
          alt=""
          src="/vuesaxtwotonearrowdown.svg"
        />
      </div>
      <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
        <div className="relative leading-[1.5rem] whitespace-nowrap">
          Mirie Kiritani
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
