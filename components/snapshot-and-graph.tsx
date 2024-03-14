import Snapshot from "./snapshot";
import WatchlistCards from "./watchlist-cards";

const SnapshotAndGraph = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[2.063rem] max-w-full text-left text-[0.875rem] text-darkslateblue-100 font-actor mq800:gap-[2.063rem_1rem] mq1300:flex-wrap">
      <div className="w-[21.188rem] flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border max-w-full">
        <Snapshot
          prevCloseValue={12051.48}
          openValue={12000.21}
          dayLowValue={11999.87}
          currentValue={12166.6}
          dayHighValue={12248.15}
          fiftyTwoWeekLowValue={10440.64}
          fiftyTwoWeekHighValue={15265.42}
          tradeTime="05:16 PM"
          tradeDate="01/27/23"
        />
      </div>
      <div className="w-[17rem] flex flex-col items-start justify-start py-[0rem] pr-[0.938rem] pl-[0rem] box-border text-[0.75rem] text-white">
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex-1 rounded-lg bg-whitesmoke flex flex-col items-start justify-start pt-[1rem] pb-[1.313rem] pr-[1.375rem] pl-[1.25rem] gap-[1.563rem]">
            <WatchlistCards
              cLogo="/meta1-1.svg"
              cName="Meta"
              cSymbol="Meta"
              cValueChange="-4.44"
              cValue="$151.74"
              propPadding="0rem 0.188rem"
              propBackgroundColor="rgba(64, 123, 255, 0.7)"
              propPadding1="0rem 0.25rem 0rem 0rem"
              propColor="#ff2f2f"
              propColor1="rgba(255, 255, 255, 0.8)"
            />
            <WatchlistCards
              cLogo="/meta1-1.svg"
              cName="Meta"
              cSymbol="Meta"
              cValueChange="-4.44"
              cValue="$151.74"
              propPadding="0rem 0.188rem"
              propBackgroundColor="rgba(64, 123, 255, 0.7)"
              propPadding1="0rem 0.25rem 0rem 0rem"
              propColor="#ff2f2f"
              propColor1="rgba(255, 255, 255, 0.8)"
            />
            <WatchlistCards
              cLogo="/teslamotors1-1.svg"
              cName="Tesla Inc"
              cSymbol="TSLA"
              cValueChange="+17.63"
              cValue="$177.90"
              propPadding="0rem 0.063rem"
              propBackgroundColor="rgba(45, 86, 178, 0.7)"
              propPadding1="unset"
              propWidth="3.875rem"
              propColor="#42ff00"
              propColor1="#fff"
            />
          </div>
        </div>
      </div>
      <div className="blur-sm flex-1 flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border min-w-[30.563rem] max-w-full text-center mq800:min-w-full">
        <div className="self-stretch rounded-lg bg-whitesmoke flex flex-col items-start justify-start pt-[1.5rem] pb-[3.5rem] pr-[2.512rem] pl-[2.519rem] box-border gap-[1rem] max-w-full mq450:pt-[1.25rem] mq450:pb-[2.25rem] mq450:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq800:flex-wrap">
              <div className="w-[6.813rem] flex flex-col items-start justify-start pt-[0.094rem] px-[0rem] pb-[0rem] box-border">
                <div className="self-stretch relative">Portfolio Analytics</div>
              </div>
              <div className="h-[1.25rem] w-[21.25rem] flex flex-row items-start justify-start gap-[0.75rem] max-w-full text-[0.75rem]">
                <div className="flex-1 flex flex-col items-start justify-start pt-[0.094rem] px-[0rem] pb-[0rem] text-[0.875rem] text-royalblue-100">
                  <div className="self-stretch h-[1.063rem] relative">
                    <div className="absolute top-[0rem] left-[0rem] inline-block w-full h-full">
                      1D
                    </div>
                    <div className="absolute top-[1.031rem] left-[0rem] box-border w-[1.688rem] h-[0.063rem] z-[1] border-t-[1px] border-solid border-darkslateblue-100" />
                  </div>
                </div>
                <div className="h-[1.25rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-gray-200" />
                <div className="flex-1 flex flex-col items-start justify-start pt-[0.188rem] px-[0rem] pb-[0rem]">
                  <div className="self-stretch relative">5D</div>
                </div>
                <div className="h-[1.25rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-gray-200" />
                <div className="flex-1 flex flex-col items-start justify-start pt-[0.188rem] px-[0rem] pb-[0rem]">
                  <div className="self-stretch relative">1M</div>
                </div>
                <div className="h-[1.25rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-gray-200" />
                <div className="flex-1 flex flex-col items-start justify-start pt-[0.188rem] px-[0rem] pb-[0rem]">
                  <div className="self-stretch relative">6M</div>
                </div>
                <div className="h-[1.25rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-gray-200" />
                <div className="flex-1 flex flex-col items-start justify-start pt-[0.188rem] px-[0rem] pb-[0rem]">
                  <div className="self-stretch relative">1Y</div>
                </div>
                <div className="h-[1.25rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-gray-200" />
                <div className="flex-1 flex flex-col items-start justify-start pt-[0.188rem] px-[0rem] pb-[0rem]">
                  <div className="self-stretch relative">5Y</div>
                </div>
                <div className="h-[1.25rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-gray-200" />
                <div className="flex-1 flex flex-col items-start justify-start pt-[0.188rem] px-[0rem] pb-[0rem]">
                  <div className="self-stretch relative">Max</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[0.75rem] max-w-full text-[0.75rem] text-white mq800:flex-wrap">
              <div className="flex-1 flex flex-row items-end justify-start relative min-w-[25.25rem] max-w-full mq800:min-w-full">
                <div className="w-[38.875rem] flex flex-row items-start justify-center pt-[0.625rem] pb-[8.813rem] pr-[1.25rem] pl-[9.75rem] box-border relative gap-[0.156rem] max-w-full mq450:pl-[1.25rem] mq450:box-border">
                  <img
                    className="h-full w-[calc(100%_-_0.5px)] absolute !m-[0] top-[0rem] right-[0.013rem] bottom-[0rem] left-[0.019rem] max-w-full overflow-hidden max-h-full z-[2]"
                    alt=""
                    src="/group-1220.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[1.5rem] px-[0rem] pb-[0rem]">
                    <div className="w-[0.75rem] h-[0.75rem] relative rounded-[50%] bg-darkslateblue-100 z-[3]" />
                  </div>
                  <div className="w-[7.438rem] rounded-lg bg-darkslateblue-100 flex flex-col items-start justify-start p-[0.75rem] box-border gap-[0.375rem] z-[3]">
                    <div className="self-stretch relative whitespace-nowrap">
                      Jan 30, 01:12:16 AM
                    </div>
                    <div className="relative text-[1rem] text-left whitespace-nowrap">
                      $14,032.56
                    </div>
                  </div>
                </div>
                <img
                  className="h-full w-[38.781rem] absolute !m-[0] top-[0rem] bottom-[0rem] left-[0rem] max-h-full z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-1221.svg"
                />
                <div className="h-[15.25rem] w-[0rem] relative box-border opacity-[0.5] ml-[-19.037rem] border-r-[1px] border-dashed border-royalblue-100" />
              </div>
              <div className="w-[2.375rem] flex flex-col items-start justify-start gap-[2rem] text-darkslateblue-100">
                <div className="self-stretch relative whitespace-nowrap">
                  $15000
                </div>
                <div className="self-stretch relative whitespace-nowrap">
                  $12000
                </div>
                <div className="w-[2.188rem] relative inline-block whitespace-nowrap">
                  $9000
                </div>
                <div className="w-[2.188rem] relative inline-block whitespace-nowrap">
                  $6000
                </div>
                <div className="w-[2.125rem] relative inline-block whitespace-nowrap">
                  $3000
                </div>
                <div className="w-[0.875rem] relative inline-block whitespace-nowrap">
                  $0
                </div>
              </div>
            </div>
          </div>
          <div className="w-[37.063rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full text-[0.75rem] mq450:flex-wrap">
            <div className="relative">10 am</div>
            <div className="relative">11 am</div>
            <div className="relative">12 pm</div>
            <div className="relative">12 pm</div>
            <div className="relative">12 pm</div>
            <div className="relative">12 pm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnapshotAndGraph;
