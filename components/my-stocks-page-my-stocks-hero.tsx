import type { NextPage } from "next";
import Depth5Frame from "./my-stocks-page-depth5-frame";

const MyStocksHero: NextPage = () => {
  return (
    <div className="w-[103.313rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[2.813rem] text-black font-plus-jakarta-sans">
      <div className="w-[60.188rem] flex flex-col items-start justify-start gap-[2.437rem] max-w-full mq950:gap-[1.188rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[3.875rem] mq450:pl-[1.25rem] mq450:box-border">
          <h1 className="m-0 relative text-inherit tracking-[0.03em] leading-[100%] font-bold font-inherit mq450:text-[1.688rem] mq450:leading-[1.688rem] mq950:text-[2.25rem] mq950:leading-[2.25rem]">
            My Stocks
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full text-[1.5rem] text-gray-300 font-work-sans">
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.187rem] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start py-[0.75rem] px-[1rem] box-border gap-[0.743rem] max-w-full">
              <Depth5Frame
                prop="$10,000"
                invested="Total value"
                propMinWidth="5.619rem"
                propPadding="unset"
                propMinWidth1="4.638rem"
                depth5Frame1Padding="0.625rem 13.437rem 0.75rem 0.75rem"
                depth5Frame1Flex="1"
                depth5Frame1MinWidth="12.938rem"
              />
              <Depth5Frame prop="$8,500" invested="Invested" />
              <Depth5Frame
                prop="20%"
                invested="Profit"
                propMinWidth="3.156rem"
                propPadding="0rem 0rem 0rem 0rem"
                propMinWidth1="2.375rem"
                depth5Frame1Padding="0.625rem 13.375rem 0.75rem 0.75rem"
                depth5Frame1Flex="unset"
                depth5Frame1MinWidth="unset"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0.75rem] px-[1rem] box-border max-w-full z-[1] mt-[-0.063rem]">
            <div className="flex-1 rounded-xl bg-aliceblue-200 flex flex-row flex-wrap items-center justify-start py-[0.75rem] px-[1rem] box-border gap-[0.75rem] max-w-full">
              <div className="flex flex-col items-start justify-start">
                <div className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0">
                  <img
                    className="absolute top-[0rem] left-[0rem] w-full h-full"
                    alt=""
                    src="/my-stocks-page-vector--0.svg"
                  />
                  <div className="absolute top-[0rem] left-[0rem] w-[1.219rem] h-[1.219rem]" />
                </div>
              </div>
              <input
                className="w-[calc(100%_-_56px)] [border:none] [outline:none] bg-[transparent] h-[1.5rem] flex-1 flex flex-col items-start justify-start font-work-sans text-[1rem] text-slategray min-w-[18.75rem] max-w-full"
                placeholder="Search for stocks"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStocksHero;
