import BalanceInvestmentCard from "../components/balance-investments-card";
import NewsComponent from "../components/news-component";
import ThoughtForTheDay from "../components/thought-for-the-day";
import CompanyList from "../components/company-list-container";
import Navbar from "../components/navbar";
import SnapshotAndGraph from "../components/snapshot-and-graph";

const thoughtForTheDay =
  "The best time to plant a tree was 20 years ago. The second best time is now.";

const Dashboard = () => {
  return (
    <div className="w-full relative rounded-[32px] bg-white overflow-hidden flex flex-col items-end justify-start pt-[1.063rem] pb-[10.688rem] pr-[2.813rem] pl-[0rem] box-border gap-[3.188rem] tracking-[normal] mq800:gap-[1.563rem_3.188rem] mq1125:pr-[1.375rem] mq1125:box-border">
      <div className="w-[19.75rem] h-[3.875rem] overflow-hidden shrink-0 hidden" />
      <Navbar />
      <section className="w-[113.938rem] flex flex-row flex-wrap items-start justify-start py-[0rem] pr-[0rem] pl-[1.25rem] box-border gap-[2.125rem] max-w-full text-left text-[1.125rem] text-darkslateblue-100 font-actor mq800:gap-[1.063rem]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2rem] max-w-full mq800:gap-[1rem_2rem] mq1125:min-w-full">
          <SnapshotAndGraph />
          <div className="w-[85.938rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1300:flex-wrap">
            <BalanceInvestmentCard />
            <NewsComponent />
            <ThoughtForTheDay thought={thoughtForTheDay} />
          </div>
        </div>
        <div className="w-[21.25rem] flex flex-col items-start justify-start pt-[0.438rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <CompanyList />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
