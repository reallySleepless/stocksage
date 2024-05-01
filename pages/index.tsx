import BalanceInvestmentCard from "../components/balance-investments-card";
import NewsComponent from "../components/news-component";
import ThoughtForTheDay from "../components/thought-for-the-day";
import CompanyList from "../components/company-list-container";
import Navbar from "../components/navbar";
import SnapshotAndGraph from "../components/snapshot-and-graph";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getMetaData } from "../util/getMetaData";
import { getMarketQuotes } from "../util/getMarketQuotes";
import { getProfile } from "../util/getProfile";
import { getToken } from "../util/getToken";
import { getQuotes } from "../util/getQuotes";
import { createUser, getUser } from "../util/user";

const dummyData = {
  status: "success",
  data: {
    "NSE_EQ:TATAMOTORS": {
      ohlc: {
        open: 1011.6,
        high: 1012.5,
        low: 1004.4,
        close: 1007.1,
      },
      depth: {
        buy: [
          {
            quantity: 2307,
            price: 1007.1,
            orders: 35,
          },
          {
            quantity: 0,
            price: 0,
            orders: 0,
          },
          {
            quantity: 0,
            price: 0,
            orders: 0,
          },
          {
            quantity: 0,
            price: 0,
            orders: 0,
          },
          {
            quantity: 0,
            price: 0,
            orders: 0,
          },
        ],
        sell: [
          {
            quantity: 0,
            price: 0,
            orders: 0,
          },
          {
            quantity: 0,
            price: 0,
            orders: 0,
          },
          {
            quantity: 0,
            price: 0,
            orders: 0,
          },
          {
            quantity: 0,
            price: 0,
            orders: 0,
          },
          {
            quantity: 0,
            price: 0,
            orders: 0,
          },
        ],
      },
      timestamp: "2024-04-06T16:48:02.855+05:30",
      instrument_token: "NSE_EQ|INE155A01022",
      symbol: "TATAMOTORS",
      last_price: 1007.1,
      volume: 4519120,
      average_price: 1007.7,
      oi: 0,
      net_change: -4.5,
      total_buy_quantity: 2307,
      total_sell_quantity: 0,
      lower_circuit_limit: 910.45,
      upper_circuit_limit: 1112.75,
      last_trade_time: "1712312981000",
      oi_day_high: 0,
      oi_day_low: 0,
    },
  },
  company: {
    segment: "NSE_EQ",
    name: "TATA MOTORS LIMITED",
    isin: "INE155A01022",
    trading_symbol: "TATAMOTORS",
  },
};

const thoughtForTheDay =
  "The best time to plant a tree was 20 years ago. The second best time is now.";

const Dashboard = () => {
  const router = useRouter();

  const [upstoxCode, setUpstoxCode] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const profile = await getProfile();
        const userObj = {
          name: profile.data.user_name,
          email: profile.data.email,
          user_id: profile.data.user_id,
        };
        let profileFromDatabase = await getUser(profile.data.user_id);
        if (!profileFromDatabase) {
          console.log("Creating user", userObj);
          profileFromDatabase = await createUser(userObj);
        }
        localStorage.setItem("mongo_user_id", profileFromDatabase?._id);
      } catch (error) {
        console.log(error);
      }
    };
    getProfileData();
  }, []);

  useEffect(() => {
    const { code } = router.query; // Retrieve the 'code' query parameter
    if (typeof code === "string") {
      setUpstoxCode(code);
      const { pathname, query } = router;
      delete query.code;
      router.replace({ pathname, query }, undefined, { shallow: true });
    }
  }, [router.query]);

  useEffect(() => {
    if (upstoxCode) {
      const tokenGenerator = async () => {
        try {
          const token = await getToken(upstoxCode);
          localStorage.setItem("upstoxToken", token.access_token);
        } catch (error) {
          console.log(error);
        }
      };
      tokenGenerator();
    }
  }, [upstoxCode]);

  const [CompanyToDisplay, setCompanyToDisplay] = useState<any>(dummyData);
  return (
    <div className="w-full relative rounded-[32px] bg-white overflow-hidden flex flex-col items-end justify-start pt-[1.063rem] pb-[10.688rem] pr-[2.813rem] pl-[0rem] box-border gap-[3.188rem] tracking-[normal] mq800:gap-[1.563rem_3.188rem] mq1125:pr-[1.375rem] mq1125:box-border">
      <div className="w-[19.75rem] h-[3.875rem] overflow-hidden shrink-0 hidden" />
      <Navbar />
      <section className="w-[113.938rem] flex flex-row flex-wrap items-start justify-start py-[0rem] pr-[0rem] pl-[1.25rem] box-border gap-[2.125rem] max-w-full text-left text-[1.125rem] text-darkslateblue-100 font-actor mq800:gap-[1.063rem]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2rem] max-w-full mq800:gap-[1rem_2rem] mq1125:min-w-full">
          <SnapshotAndGraph companyData={CompanyToDisplay} />
          <div className="w-[85.938rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1300:flex-wrap">
            <BalanceInvestmentCard />
            <NewsComponent />
            <ThoughtForTheDay thought={thoughtForTheDay} />
          </div>
        </div>
        <div className="w-[21.25rem] flex flex-col items-start justify-start pt-[0.438rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <CompanyList setCompanyToDisplay={setCompanyToDisplay} />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
