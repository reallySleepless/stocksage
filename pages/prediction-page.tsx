import type { NextPage } from "next";
import InnerFrame from "../components/inner-frame";
import AnalyticsSection from "../components/analytics-section";
import INRContainer from "../components/i-n-r-container";
import Navbar from "../components/navbar";

const PredictionPage: NextPage = () => {
  return (
    <div className="w-full relative rounded-13xl bg-whitesmoke-100 overflow-hidden flex flex-col items-end justify-start pt-[0.688rem] pb-[13.875rem] pr-[4.75rem] pl-[0rem] box-border gap-[3.688rem] tracking-[normal] mq700:gap-[1.813rem_3.688rem] mq975:pr-[2.375rem] mq975:box-border">
      <Navbar />
      <INRContainer />
    </div>
  );
};

export default PredictionPage;
