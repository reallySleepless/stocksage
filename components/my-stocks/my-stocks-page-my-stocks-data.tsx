import Depth4Frame from "./my-stocks-page-depth4-frame";
import { Dispatch, useEffect, useState } from "react";
import { getTrades } from "../../api/getTrades";
import RecentStocksCard from "./recent-stocks-card";
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";
import ChartJS from "../../pages/chartJS";
import jsonFile from "../../DataFiles/NSE.json";

// holdings contains the data of the upstox response
const MyStocksData = ({
  holdings,
  selectedCompanyIsin,
  setSelectedCompanyIsin,
}: {
  holdings: any;
  selectedCompanyIsin: string;
  setSelectedCompanyIsin: Dispatch<any>;
}) => {
  const [tradingData, setTradingData] = useState<any>([]);
  const [selectedCompany, setSelectedCompany] = useState<any>();

  const portfolioAnalytics = ["1D", "5D", "1M", "6M", "1Y", "5Y"];
  const [portfolioAnalyticsData, setPortfolioAnalyticsData] = useState<any>(0);

  useEffect(() => {
    const getTradingData = async () => {
      const response = await getTrades();
      setTradingData(response.data);
    };
    getTradingData();
  }, []);

  useEffect(() => {
    const companyData: any = jsonFile.find(
      (item) => item.name === selectedCompany
    );
    const isin = companyData?.isin;
    setSelectedCompanyIsin(isin);
  }, [selectedCompany]);

  console.log("isin", selectedCompanyIsin);

  return (
    <div className="flex flex-row items-start justify-center gap-[3.375rem] max-w-full text-left text-[1.375rem] text-gray-300 font-work-sans mq950:gap-[1.688rem] mq1900:flex-wrap">
      <div className="w-[20.313rem] flex flex-col items-start justify-start pt-[0.25rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start py-[0rem] px-[1.187rem]">
            <h2 className="m-0 relative text-inherit tracking-[-0.33px] leading-[1.75rem] font-bold font-inherit z-[2] mq450:text-[1.125rem] mq450:leading-[1.375rem]">
              Recent Stocks
            </h2>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start text-[0.75rem] text-white font-actor">
            <div className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-col items-start justify-start pt-[0.981rem] px-[1.25rem] pb-[1.287rem] gap-[1.531rem]">
              {holdings &&
                holdings.map(
                  (item: any, index: number) =>
                    index < 3 && (
                      <RecentStocksCard
                        cLogo="/meta1-1.svg"
                        cName={item.tradingsymbol}
                        cSymbol={`Qty: ${item.quantity}`}
                        cValueChange={`₹${item.pnl}`}
                        cValue={`₹${item.average_price * item.quantity}`}
                        propPadding="0rem 0.188rem"
                        propBackgroundColor="rgba(64, 123, 255, 0.7)"
                        propPadding1="0rem 0.25rem 0rem 0rem"
                        propColor={item.pnl > 0 ? "lime" : "red"}
                        propColor1="rgba(255, 255, 255, 0.8)"
                      />
                    )
                )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[62.5rem] flex flex-col items-end justify-start max-w-full text-[1rem]">
        <div className="w-[1300px] self-stretch flex flex-row items-start justify-start py-[0.75rem] px-[1rem] box-border max-w-full z-[1] mt-[-0.063rem]">
          <div className="flex-1 rounded-xl bg-aliceblue-200 flex flex-row flex-wrap items-center justify-start py-[0.75rem] box-border gap-[0.75rem] max-w-full">
            <Combobox
              className="w-full"
              hideEmptyPopup
              onChange={(companyName) => setSelectedCompany(companyName)}
              data={holdings.map((company: any) => company.company_name)}
              placeholder="Search for a company"
            />
            <div className="w-full self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mt-5 mq800:flex-wrap">
                <div className="w-full flex flex-col items-start justify-start pt-[0.094rem] px-[0rem] pb-[0rem] box-border">
                  <div className="self-stretch relative">
                    Portfolio Analytics
                  </div>
                </div>
                <div className="h-[1.25rem] w-full flex flex-row items-start justify-start max-w-full text-[0.75rem] text-center">
                  {portfolioAnalytics.map((item, index) => (
                    <div
                      key={index}
                      defaultValue={item}
                      className={`flex-1 flex flex-col  justify-center pt-[0.188rem] px-[0rem] pb-[0rem] text-[0.75rem]  text-royalblue-100`}
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
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
              {selectedCompanyIsin && (
                <ChartJS
                  isin={selectedCompanyIsin}
                  intOpt={portfolioAnalytics[portfolioAnalyticsData]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[20.563rem] flex flex-col items-start justify-start gap-[2.218rem] max-w-full mq450:gap-[1.125rem]">
        <div className="flex flex-row items-start justify-start py-[0rem] px-[1rem]">
          <h2 className="m-0 relative text-inherit tracking-[-0.33px] leading-[1.719rem] font-bold font-inherit z-[3] mq450:text-[1.125rem] mq450:leading-[1.375rem]">
            Recent Transactions
          </h2>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full text-[1rem]">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            {tradingData.length ? (
              tradingData.map((trade: any) => (
                <Depth4Frame
                  aAPL={trade?.tradingsymbol}
                  shareAt150={`${trade?.quantity} shares at $${trade?.average_price}`}
                  propHeight="unset"
                  propPadding="0.75rem 0rem 0.75rem 1rem"
                  propMarginTop="unset"
                  propWidth="26.25rem"
                  propPadding1="0rem 15.062rem 0rem 0rem"
                  propDebugCommit="unset"
                  propMinWidth="4.688rem"
                  propMinWidth1="2.75rem"
                  propMinWidth2="7.206rem"
                />
              ))
            ) : (
              <p className="text-black px-5">No recent transaction</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStocksData;
