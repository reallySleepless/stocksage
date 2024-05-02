import { useCallback, useEffect, useState } from "react";
import { getFundAndMargin } from "../util/getFundAndMargin";

const BalanceInvestmentCard = () => {
  const [balance, setBalance] = useState(0);
  const [invested, setInvested] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const fundAndMargin = async () => {
      const response = await getFundAndMargin();
      if (response?.status === "success") {
        setBalance(response.data.equity.available_margin);
        setInvested(response.data.equity.used_margin);
      }
    };
    fundAndMargin();
  }, []);

  return (
    <div className="h-[14.75rem] w-[26.75rem] flex flex-col items-start justify-start pt-[1.313rem] px-[0rem] pb-[0rem] box-border max-w-full">
      <form className="m-0 self-stretch flex-1 rounded-lg bg-whitesmoke flex flex-col items-start justify-start pt-[1.25rem] pb-[0rem] pr-[3.625rem] pl-[0.75rem] relative gap-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <div className="w-[4.375rem] h-[1.125rem] !m-[0] absolute top-[13.625rem] left-[0.75rem]" />
        <div className="w-[11.938rem] flex flex-col items-start justify-start gap-[0.375rem]">
          <div className="w-[2.875rem] relative text-[0.875rem] font-actor text-darkslateblue-100 text-center inline-block">
            Balance
          </div>
          <div className="w-[17.75rem] flex flex-col items-start justify-start">
            <div className="self-stretch rounded-lg bg-royalblue-100 flex flex-row items-center justify-start py-[1rem] pr-[8.438rem] pl-[1.25rem]">
              <div className="relative text-[1.25rem] font-actor text-white text-left whitespace-nowrap mq450:text-[1rem]">
                INR {balance}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.375rem]">
          <div className="w-[3.188rem] relative text-[0.875rem] font-actor text-darkslateblue-100 text-center inline-block">
            Invested
          </div>
          <div className="rounded-lg bg-darkslateblue-100 flex flex-row items-center justify-start py-[1rem] pr-[9.938rem] pl-[1.25rem] relative gap-[0.625rem] mq450:pr-[1.25rem] mq450:box-border">
            <div className="relative text-[1.25rem] font-actor text-white text-left whitespace-nowrap mq450:text-[1rem] w-[60px]">
              INR {invested}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BalanceInvestmentCard;
