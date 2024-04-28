import type { NextPage } from "next";
import Depth5Frame from "./depth5-frame";
import Depth4Frame from "./depth4-frame";
import { useEffect, useState } from "react";
import getNews from "../api/getNews";

const FrameWithText: NextPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [visibleNewsCount, setVisibleNewsCount] = useState<number>(5);

  useEffect(() => {
    const getNewsData = async () => {
      const data = await getNews();
      setNewsData(data.articles);
      console.log("Data inside news page", data);
    };

    getNewsData();
  }, []);

  const showMoreNews = () => {
    setVisibleNewsCount(newsData.length);
  };

  return (
    <section className="w-[107.625rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[2.813rem] text-black font-plus-jakarta-sans">
      <div className="w-[76.75rem] flex flex-col items-start justify-start gap-[0.663rem] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.188rem] max-w-full mq725:gap-[1.063rem_2.188rem]">
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
            <h1 className="mb-16 m-0 h-[3.438rem] relative text-inherit tracking-[0.03em] leading-[100%] font-bold font-inherit inline-block mq975:text-[2.25rem] mq975:leading-[2.25rem] mq450:text-[1.688rem] mq450:leading-[1.688rem]">
              Stock News
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full text-[1rem] text-darkslateblue-100 font-work-sans">
            <div className="w-[19.188rem] flex flex-col items-start justify-start px-[0rem] pb-[0rem] box-border mq975:hidden">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="self-stretch flex flex-row items-start justify-start px-[1rem] pb-[0.75rem] z-[2] text-[1.375rem] text-gray-300">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <h3 className="m-0 relative text-inherit tracking-[-0.33px] leading-[1.719rem] font-bold font-inherit mq450:text-[1.125rem] mq450:leading-[1.375rem]">
                        Followed
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[1rem] pb-[0.5rem]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1rem]">
                    <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-[0rem] pr-[4.063rem] pl-[0rem] gap-[1rem] mq450:pr-[1.25rem] mq450:box-border">
                      <img
                        className="h-[3.5rem] w-[3.5rem] relative rounded-lg overflow-hidden shrink-0 object-cover"
                        loading="lazy"
                        alt=""
                        src="/depth-6-frame-0@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-center min-w-[5.625rem]">
                        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <div className="relative leading-[1.5rem] font-medium">
                              Facebook
                            </div>
                          </div>
                        </div>
                        <div className="overflow-hidden flex flex-col items-start justify-start text-[0.875rem] text-cornflowerblue-100">
                          <div className="flex flex-col items-start justify-start">
                            <div className="relative leading-[1.313rem]">
                              Technology, Internet
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Depth5Frame
                      depth6Frame0="/depth-6-frame-0-1@2x.png"
                      tesla="Tesla"
                      electricVehiclesCleanEner="Electric Vehicles, Clean Energy"
                    />
                    <Depth5Frame
                      depth6Frame0="/depth-6-frame-0-2@2x.png"
                      tesla="Amazon"
                      electricVehiclesCleanEner="E-Commerce, Cloud Computing"
                      propWidth="8.913rem"
                    />
                    <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-[0rem] pr-[7.637rem] pl-[0rem] gap-[1rem] mq450:pr-[1.25rem] mq450:box-border">
                      <img
                        className="h-[3.5rem] w-[3.5rem] relative rounded-lg overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/depth-6-frame-0-3@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-center min-w-[3.313rem]">
                        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <div className="relative leading-[1.5rem] font-medium">
                              Google
                            </div>
                          </div>
                        </div>
                        <div className="overflow-hidden flex flex-col items-start justify-start text-[0.875rem] text-cornflowerblue-100">
                          <div className="flex flex-col items-start justify-start">
                            <div className="relative leading-[1.313rem]">
                              Search, Ads
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1rem]">
                  <div className="flex-1 flex flex-row flex-wrap items-center justify-start py-[0rem] pr-[4.75rem] pl-[0rem] gap-[1rem] mq450:pr-[1.25rem] mq450:box-border">
                    <img
                      className="h-[3.5rem] w-[3.5rem] relative rounded-lg overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/depth-6-frame-0-4@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-center min-w-[5.188rem]">
                      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="relative leading-[1.5rem] font-medium">
                            Microsoft
                          </div>
                        </div>
                      </div>
                      <div className="overflow-hidden flex flex-col items-start justify-start text-[0.875rem] text-cornflowerblue-100">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative leading-[1.313rem]">
                            Software, Services
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start max-w-[calc(100%_-_307px)] text-[0.875rem] text-cornflowerblue-100 mq975:max-w-full">
              {newsData
                .slice(0, visibleNewsCount)
                .map((news: any, index: number) => {
                  return (
                    <Depth4Frame
                      key={index}
                      cNBC1hAgo={news.source.name}
                      stockFuturesAreFlatAfterS={news.title}
                      uSStockFuturesWereFlatInO={news.description}
                      depth8Frame0={news.urlToImage}
                      propMarginTop="-4.25rem"
                      propMinHeight="2.5rem"
                      propWidth="34.744rem"
                      propMinHeight1="5.25rem"
                      propWidth1="unset"
                      propAlignSelf="stretch"
                      propHeight="10.563rem"
                      newsUrl={news.url}
                    />
                  );
                })}
              {newsData.length > visibleNewsCount && (
                <button
                  onClick={showMoreNews}
                  className="m-auto bg-[#7aa3ff] px-5 py-2 rounded-sm text-white mt-4 text-lg hover:cursor-pointer"
                >
                  Show more
                </button>
              )}
            </div>
            {/* <div className="flex-1 flex flex-col items-start justify-start max-w-[calc(100%_-_307px)] text-[0.875rem] text-cornflowerblue-100 mq975:max-w-full">
              {newsData.map((news: any, index: number) => {
                return (
                  <Depth4Frame
                    key={index}
                    cNBC1hAgo={news.source.name}
                    stockFuturesAreFlatAfterS={news.title}
                    uSStockFuturesWereFlatInO={news.description}
                    depth8Frame0={news.urlToImage}
                    propMarginTop="-4.25rem"
                    propMinHeight="2.5rem"
                    propWidth="34.744rem"
                    propMinHeight1="5.25rem"
                    propWidth1="unset"
                    propAlignSelf="stretch"
                    propHeight="10.563rem"
                    newsUrl={news.url}
                  />
                );
              })}
            </div> */}
            {/* <Depth4Frame
                cNBC1hAgo="Yahoo Finance · 2h ago"
                stockFuturesAreFlatAfterS="Dow Jones Futures: Stock Market Rally Extended On Fed Rate Hopes; Tesla, Apple, Microsoft, Nvidia Lead Buy Points"
                uSStockFuturesWereFlatInO={`The stock market rally extended gains as the S&P 500 index and Nasdaq composite hit record highs. Fed chief Jerome Powell said the central bank will act as appropriate on interest rates. Tesla, Apple, Microsoft and Nvidia are at or near buy points.`}
                depth8Frame0="/depth-8-frame-0-1@2x.png"
                propMarginTop="-4.25rem"
                propMinHeight="2.5rem"
                propWidth="34.744rem"
                propMinHeight1="5.25rem"
                propWidth1="unset"
                propAlignSelf="stretch"
                propHeight="10.563rem"
              />
              <Depth4Frame
                cNBC1hAgo="Yahoo Finance · 2h ago"
                stockFuturesAreFlatAfterS="Dow Jones Futures: Stock Market Rally Extended On Fed Rate Hopes; Tesla, Apple, Microsoft, Nvidia Lead Buy Points"
                uSStockFuturesWereFlatInO={`The stock market rally extended gains as the S&P 500 index and Nasdaq composite hit record highs. Fed chief Jerome Powell said the central bank will act as appropriate on interest rates. Tesla, Apple, Microsoft and Nvidia are at or near buy points.`}
                depth8Frame0="/depth-8-frame-0-1@2x.png"
                propMarginTop="-4.25rem"
                propMinHeight="2.5rem"
                propWidth="34.744rem"
                propMinHeight1="5.25rem"
                propWidth1="unset"
                propAlignSelf="stretch"
                propHeight="10.563rem"
              />
              <Depth4Frame
                cNBC1hAgo="Yahoo Finance · 2h ago"
                stockFuturesAreFlatAfterS="Dow Jones Futures: Stock Market Rally Extended On Fed Rate Hopes; Tesla, Apple, Microsoft, Nvidia Lead Buy Points"
                uSStockFuturesWereFlatInO={`The stock market rally extended gains as the S&P 500 index and Nasdaq composite hit record highs. Fed chief Jerome Powell said the central bank will act as appropriate on interest rates. Tesla, Apple, Microsoft and Nvidia are at or near buy points.`}
                depth8Frame0="/depth-8-frame-0-1@2x.png"
                propMarginTop="-4.25rem"
                propMinHeight="2.5rem"
                propWidth="34.744rem"
                propMinHeight1="5.25rem"
                propWidth1="unset"
                propAlignSelf="stretch"
                propHeight="10.563rem"
              /> */}
          </div>
        </div>
        {/* <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
          <button className="cursor-pointer [border:none] py-[0.594rem] px-[1rem] bg-royalblue-100 rounded-xl overflow-hidden flex flex-row items-center justify-center">
            <div className="bg-royalblue-100 overflow-hidden flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <b className="relative text-[0.875rem] tracking-[0.21px] leading-[1.313rem] font-work-sans text-white text-left">
                  Find a company
                </b>
              </div>
            </div>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default FrameWithText;
