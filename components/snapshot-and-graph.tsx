"use client";

import Snapshot from "./snapshot";
import WatchlistCards from "./watchlist-cards";
import { getHistoricalData } from "../util/historicalData";
import { useEffect, useState, useRef } from "react";
import ChartJS from "../pages/chartJS";
import { getHoldings } from "../util/getHoldings";

const SnapshotAndGraph = ({ companyData }: { companyData: any }) => {
  const [historicalData, setHistoricalData] = useState<any>([]);
  const isin = companyData?.company?.isin;
  const tradingSymbol = companyData?.company?.trading_symbol;
  const openValue = companyData?.data[`NSE_EQ:${tradingSymbol}`]?.ohlc.open;
  const prevCloseValue =
    companyData?.data[`NSE_EQ:${tradingSymbol}`]?.ohlc.close;
  const dayLowValue = companyData?.data[`NSE_EQ:${tradingSymbol}`]?.ohlc.low;
  const dayHighValue = companyData?.data[`NSE_EQ:${tradingSymbol}`]?.ohlc.high;
  const currentValue = companyData?.data[`NSE_EQ:${tradingSymbol}`]?.last_price;
  const ISODateTime = new Date(
    parseInt(companyData?.data[`NSE_EQ:${tradingSymbol}`]?.last_trade_time)
  ).toLocaleString("en-us", { timeZone: "Asia/Kolkata" });
  const dateAndTime = ISODateTime.split(",");

  let currentDate = new Date().toLocaleDateString("en-us", {
    timeZone: "Asia/Kolkata",
  });
  let currentDateArray = currentDate.split("/");
  currentDate = `${currentDateArray[2]}-${currentDateArray[0].padStart(
    2,
    "0"
  )}-${currentDateArray[1].padStart(2, "0")}`;

  const prevYearDate = new Date();
  prevYearDate.setMonth(prevYearDate.getMonth() - 1);
  prevYearDate.setFullYear(prevYearDate.getFullYear() - 1);
  let prevYear = prevYearDate.toLocaleDateString("en-us", {
    timeZone: "Asia/Kolkata",
  });
  let prevYearArray = prevYear.split("/");
  prevYear = `${prevYearArray[2]}-${prevYearArray[0].padStart(
    2,
    "0"
  )}-${prevYearArray[1].padStart(2, "0")}`;

  let fiftyTwoWeekLowValue = dayLowValue;
  let fiftyTwoWeekHighValue = dayHighValue;
  historicalData?.data?.candles?.forEach((candle: any[]) => {
    fiftyTwoWeekHighValue = Math.max(fiftyTwoWeekHighValue, candle[2]);
    fiftyTwoWeekLowValue = Math.min(fiftyTwoWeekLowValue, candle[3]);
  });

  const portfolioAnalytics = ["1D", "5D", "1M", "6M", "1Y", "5Y"];
  const [portfolioAnalyticsData, setPortfolioAnalyticsData] = useState<any>(0);

  const [portfolioData, setPortfolioData] = useState<any>([]);

  useEffect(() => {
    const getHolding = async () => {
      const token = localStorage.getItem("upstoxToken");
      if (!token) {
        console.log("Token not found");
        return;
      }
      const res = await getHoldings();
      setPortfolioData(res.data);
    };

    getHolding();
  }, []);

  useEffect(() => {
    const prevYearData = async () => {
      const response = await getHistoricalData({
        instrument_key: `NSE_EQ%7C${isin}`,
        interval: "month",
        toDate: currentDate,
        fromDate: prevYear,
      });
      let resolvedResponse = await Promise.resolve(response);
      setHistoricalData(resolvedResponse);
      return resolvedResponse;
    };
    prevYearData();
  }, [companyData]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[2.063rem] max-w-full text-left text-[0.875rem] text-darkslateblue-100 font-actor mq800:gap-[2.063rem_1rem] mq1300:flex-wrap">
      <div className="w-[21.188rem] flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border max-w-full">
        <Snapshot
          companyName={companyData?.company?.name}
          prevCloseValue={prevCloseValue}
          openValue={openValue}
          dayLowValue={dayLowValue}
          currentValue={currentValue}
          dayHighValue={dayHighValue}
          fiftyTwoWeekLowValue={fiftyTwoWeekLowValue}
          fiftyTwoWeekHighValue={fiftyTwoWeekHighValue}
          tradeTime={dateAndTime[1]}
          tradeDate={dateAndTime[0]}
        />
      </div>
      <div className="w-[17rem] flex flex-col items-start justify-start py-[0rem] pr-[0.938rem] pl-[0rem] box-border text-[0.75rem] text-white">
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex-1 rounded-lg bg-whitesmoke flex flex-col items-start justify-start pt-[1rem] pb-[1.313rem] pr-[1.375rem] pl-[1.25rem] gap-[1.563rem]">
            {portfolioData &&
              portfolioData.map(
                (item: any, index: number) =>
                  index < 3 && (
                    <WatchlistCards
                      cLogo="/meta1-1.svg"
                      cName={item.tradingsymbol}
                      cSymbol={item.exchange}
                      cValueChange={item.day_change_percentage}
                      cValue={`₹${item.last_price}`}
                      propPadding="0rem 0.188rem"
                      propBackgroundColor="rgba(64, 123, 255, 0.7)"
                      propPadding1="0rem 0.25rem 0rem 0rem"
                      propColor="#ff2f2f"
                      propColor1="rgba(255, 255, 255, 0.8)"
                    />
                  )
              )}
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border min-w-[30.563rem] max-w-full text-center mq800:min-w-full">
        <div className="self-stretch rounded-lg bg-whitesmoke flex flex-col items-start justify-start pt-[1.5rem] pb-[3.5rem] pr-[2.512rem] pl-[2.519rem] box-border gap-[1rem] max-w-full mq450:pt-[1.25rem] mq450:pb-[2.25rem] mq450:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq800:flex-wrap">
              <div className="w-[6.813rem] flex flex-col items-start justify-start pt-[0.094rem] px-[0rem] pb-[0rem] box-border">
                <div className="self-stretch relative">Portfolio Analytics</div>
              </div>
              <div className="h-[1.25rem] w-[21.25rem] flex flex-row items-start justify-start max-w-full text-[0.75rem]">
                {portfolioAnalytics.map((item, index) => (
                  <div
                    key={index}
                    defaultValue={item}
                    className={`flex-1 flex flex-col items-start justify-start pt-[0.188rem] px-[0rem] pb-[0rem] text-[0.75rem]  text-royalblue-100`}
                    style={
                      portfolioAnalyticsData === index
                        ? {
                            borderRight: "1px solid gray",
                            textDecoration: "underline",
                            fontWeight: "bold",
                            color: "black",
                            marginBottom: "4px",
                          }
                        : { borderRight: "1px solid gray" }
                    }
                    onClick={() => setPortfolioAnalyticsData(index)}
                  >
                    <div className="self-stretch relative">{item}</div>
                  </div>
                ))}
              </div>
            </div>
            <ChartJS
              isin={isin}
              intOpt={portfolioAnalytics[portfolioAnalyticsData]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnapshotAndGraph;
