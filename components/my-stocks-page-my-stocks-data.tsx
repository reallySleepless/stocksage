import type { NextPage } from "next";
import Depth4Frame from "./my-stocks-page-depth4-frame";

const MyStocksData: NextPage = () => {
  return (
    <div className="flex flex-row items-start justify-center gap-[3.375rem] max-w-full text-left text-[1.375rem] text-gray-300 font-work-sans mq950:gap-[1.688rem] mq1900:flex-wrap">
      <div className="w-[17.313rem] flex flex-col items-start justify-start pt-[0.25rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start py-[0rem] px-[1.187rem]">
            <h2 className="m-0 relative text-inherit tracking-[-0.33px] leading-[1.75rem] font-bold font-inherit z-[2] mq450:text-[1.125rem] mq450:leading-[1.375rem]">
              Recent Stocks
            </h2>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start text-[0.75rem] text-white font-actor">
            <div className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-col items-start justify-start pt-[0.981rem] px-[1.25rem] pb-[1.287rem] gap-[1.531rem]">
              <div className="w-[13.063rem] rounded-lg bg-darkslateblue-200 flex flex-col items-center justify-center py-[0.925rem] px-[0.75rem] box-border gap-[1rem] z-[1]">
                <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
                  <div className="flex flex-row items-center justify-start py-[0rem] px-[0rem] gap-[0.375rem]">
                    <img
                      className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/my-stocks-page-nvidia-1.svg"
                    />
                    <div className="relative inline-block min-w-[2.063rem]">
                      Nvidia
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-center py-[0rem] pr-[0rem] pl-[0.062rem] text-right">
                    <div className="relative uppercase inline-block min-w-[2rem]">
                      NVDA
                    </div>
                    <div className="relative uppercase text-lime inline-block min-w-[1.688rem]">
                      +5.63
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                    <div className="relative capitalize inline-block min-w-[2.75rem]">
                      Invested
                    </div>
                    <div className="relative text-[1.125rem] capitalize inline-block min-w-[3.75rem] whitespace-nowrap">
                      $203.65
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.312rem] pl-[0.187rem]">
                <div className="flex-1 rounded-lg bg-royalblue-200 flex flex-col items-center justify-center py-[0.925rem] px-[0.75rem] gap-[1rem] z-[1]">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
                    <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.25rem] pl-[0rem] gap-[0.375rem]">
                      <img
                        className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/my-stocks-page-meta1-1.svg"
                      />
                      <div className="relative inline-block min-w-[1.688rem]">
                        Meta
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-center py-[0rem] pr-[0rem] pl-[0.125rem] text-right">
                      <div className="relative uppercase inline-block min-w-[1.938rem]">
                        Meta
                      </div>
                      <div className="relative uppercase text-red inline-block min-w-[1.75rem]">
                        -4.44
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start text-gray-100">
                    <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                      <div className="relative capitalize inline-block min-w-[4.313rem]">
                        Current Value
                      </div>
                      <div className="relative text-[1.125rem] capitalize text-white inline-block min-w-[3.25rem] whitespace-nowrap">
                        $151.74
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.437rem] pl-[0.062rem]">
                <div className="flex-1 rounded-lg bg-darkslateblue-200 flex flex-col items-center justify-center py-[0.925rem] px-[0.75rem] gap-[1rem] z-[1]">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
                    <div className="w-[3.875rem] flex flex-row items-center justify-start py-[0rem] px-[0rem] box-border gap-[0.375rem]">
                      <img
                        className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/my-stocks-page-teslamotors1-1.svg"
                      />
                      <div className="relative inline-block min-w-[2.75rem] shrink-0">
                        Tesla Inc
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-center py-[0rem] pr-[0rem] pl-[0.187rem] text-right">
                      <div className="relative uppercase inline-block min-w-[1.688rem]">
                        TSLA
                      </div>
                      <div className="relative uppercase text-lime inline-block min-w-[1.875rem]">
                        +17.63
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                      <div className="relative capitalize inline-block min-w-[4.313rem]">
                        Current Value
                      </div>
                      <div className="relative text-[1.125rem] capitalize inline-block min-w-[3.438rem] whitespace-nowrap">
                        $177.90
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[62.5rem] flex flex-col items-end justify-start max-w-full text-[1rem]">
        <div className="w-[61.75rem] flex flex-row items-start justify-end py-[0rem] px-[1.875rem] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[15.812rem] box-border gap-[0.5rem] max-w-full mq450:pb-[10.25rem] mq450:box-border">
            <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border gap-[0.5rem] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border max-w-full">
                  <div className="w-[33rem] relative leading-[1.5rem] font-medium inline-block max-w-full">
                    Highest Profited share
                  </div>
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start text-[2rem]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.8px] leading-[2.5rem] font-bold font-inherit mq450:text-[1.188rem] mq450:leading-[1.5rem] mq950:text-[1.625rem] mq950:leading-[2rem]">
                    Apple, Inc: $120
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-[1.125rem] h-[2rem]" />
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[3.781rem] box-border relative gap-[402.537rem] max-w-full z-[1] mt-[-18.188rem] text-[0.813rem] text-darkslateblue-100 mq450:flex-wrap mq450:gap-[50.313rem] mq450:pb-[2.438rem] mq450:box-border mq950:flex-wrap mq950:gap-[100.625rem] mq1425:flex-wrap mq1425:gap-[201.25rem] mq1900:flex-wrap">
          <img
            className="h-[9.25rem] w-[58rem] absolute !m-[0] top-[0rem] left-[0rem] z-[1]"
            alt=""
          />
          <div className="mt-[-163.75rem] ml-[-459.813rem] h-[9.125rem] w-[57.25rem] flex flex-col items-start justify-start shrink-0 [debug_commit:1de1738] max-w-full">
            <div className="self-stretch h-[9.125rem] hidden" />
          </div>
          <div className="w-[62.5rem] flex flex-col items-start justify-start gap-[8.75rem] shrink-0 [debug_commit:1de1738] max-w-full mq450:gap-[1.063rem] mq950:gap-[2.188rem] mq1425:gap-[4.375rem]">
            <div className="self-stretch h-[8.188rem] relative max-w-full shrink-0 flex items-center justify-center">
              <img
                className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[0rem] top-[3.938rem] w-full [transform:scale(1.966)]"
                loading="lazy"
                alt=""
                src="/my-stocks-page-vector--1.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
              <div className="h-[1.219rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border">
                <div className="flex flex-col items-start justify-start py-[0rem] px-[0rem]">
                  <b className="relative tracking-[0.19px] leading-[1.25rem] inline-block min-w-[3.688rem] whitespace-nowrap">
                    Jan 2019
                  </b>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <b className="relative tracking-[0.19px] leading-[1.219rem] inline-block min-w-[3.875rem]">
                    Jan 2020
                  </b>
                </div>
              </div>
              <div className="h-[1.219rem] w-[3.65rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border">
                <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0rem]">
                  <b className="w-[4.375rem] relative tracking-[0.19px] leading-[1.25rem] inline-block whitespace-pre-wrap">
                    {" "}
                    Jan 2021
                  </b>
                </div>
              </div>
              <div className="h-[1.219rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border">
                <div className="flex flex-col items-start justify-start py-[0rem] px-[0rem]">
                  <b className="relative tracking-[0.19px] leading-[1.25rem] inline-block min-w-[3.813rem] whitespace-nowrap">
                    Jan 2022
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[23.563rem] flex flex-col items-start justify-start gap-[2.218rem] max-w-full mq450:gap-[1.125rem]">
        <div className="flex flex-row items-start justify-start py-[0rem] px-[1rem]">
          <h2 className="m-0 relative text-inherit tracking-[-0.33px] leading-[1.719rem] font-bold font-inherit z-[3] mq450:text-[1.125rem] mq450:leading-[1.375rem]">
            Recent Transactions
          </h2>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full text-[1rem]">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <Depth4Frame aAPL="AAPL" shareAt150="1 share at $150" />
            <Depth4Frame
              aAPL="TSLA"
              shareAt150="2 shares at $100"
              propHeight="unset"
              propPadding="0.75rem 0rem 0.75rem 1rem"
              propMarginTop="-2.25rem"
              propWidth="26.25rem"
              propPadding1="0rem 15.212rem 0rem 0rem"
              propMinWidth="4.563rem"
              propMinWidth1="2.563rem"
              propMinWidth2="7.038rem"
            />
          </div>
          <Depth4Frame
            aAPL="MSFT"
            shareAt150="3 shares at $200"
            propHeight="unset"
            propPadding="0.75rem 0rem 0.75rem 1rem"
            propMarginTop="unset"
            propWidth="26.25rem"
            propPadding1="0rem 15.062rem 0rem 0rem"
            propMinWidth="4.688rem"
            propMinWidth1="2.75rem"
            propMinWidth2="7.206rem"
          />
          <Depth4Frame
            aAPL="GOOGL"
            shareAt150="5 shares at $300"
            propHeight="unset"
            propPadding="0.75rem 0rem 0.75rem 1rem"
            propMarginTop="unset"
            propWidth="26.438rem"
            propPadding1="0rem 15.25rem 0rem 0rem"
            propMinWidth="4.688rem"
            propMinWidth1="3.563rem"
            propMinWidth2="7.206rem"
          />
        </div>
      </div>
    </div>
  );
};

export default MyStocksData;
