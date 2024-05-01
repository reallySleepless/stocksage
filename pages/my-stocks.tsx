import type { NextPage } from "next";
import MyStocksData from "../components/my-stocks/my-stocks-page-my-stocks-data";
import MyStocksHero from "../components/my-stocks/my-stocks-page-my-stocks-hero";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { getHoldings } from "../api/getHoldings";

const MyStocksPage: NextPage = () => {
  const [holdings, setHoldings] = useState<any>([]);
  useEffect(() => {
    const getRecentStocks = async () => {
      const res = await getHoldings();
      setHoldings(res.data);
    };

    getRecentStocks();
  }, []);

  const [selectedCompanyIsin, setSelectedCompanyIsin] = useState<any>();

  return (
    <div className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 rounded-13xl bg-whitesmoke-100 overflow-hidden flex flex-col items-end justify-start pt-[0.687rem] pb-[10.25rem] pr-[4.062rem] pl-[0rem] box-border gap-[2.875rem] max-w-full mq450:pb-[4.375rem] mq450:box-border mq950:gap-[1.438rem] mq950:pt-[1.25rem] mq950:pb-[6.688rem] mq950:box-border mq1425:pr-[2rem] mq1425:box-border">
        <Navbar />
        <section className="flex flex-col items-start justify-start py-[0rem] pr-[0rem] pl-[1.25rem] box-border gap-[2rem] max-w-full mq950:gap-[1rem]">
          <MyStocksHero
            holdings={holdings}
            selectedCompanyIsin={selectedCompanyIsin}
          />
          <MyStocksData
            holdings={holdings}
            selectedCompanyIsin={selectedCompanyIsin}
            setSelectedCompanyIsin={setSelectedCompanyIsin}
          />
        </section>
      </main>
    </div>
  );
};

export default MyStocksPage;
