import { useCallback, useEffect, useState } from "react";

const BalanceInvestmentCard = () => {
  const [balance, setBalance] = useState(0);
  const [invested, setInvested] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    //TODO: fetch balance, invested and percentage from server

    // for now, setting some dummy values
    setBalance(100000);
    setInvested(50000);
    setPercentage(50);
  }, []);

  const onArrowRightIconClick = useCallback(() => {
    //TODO: TODO: show all investments of user
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
            <div className="h-[2.75rem] !m-[0] absolute top-[0.5rem] left-[11.875rem] rounded-lg bg-royalblue-100 flex flex-row items-center justify-center py-[0.625rem] px-[0.5rem] box-border">
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 cursor-pointer"
                alt=""
                src="/arrowright.svg"
                onClick={onArrowRightIconClick}
              />
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[0.625rem] px-[0.25rem] bg-cornflowerblue-100 w-[4.188rem] h-[3.5rem] !m-[0] absolute top-[2.688rem] left-[19.625rem] rounded-lg flex flex-row items-center justify-center box-border hover:bg-cornflowerblue-200">
          <div className="flex-1 relative text-[0.875rem] uppercase font-readex-pro text-white text-center">
            {percentage > 0 ? `+${percentage}%` : `-${percentage}%`}
          </div>
        </button>
      </form>
    </div>
  );
};

export default BalanceInvestmentCard;
