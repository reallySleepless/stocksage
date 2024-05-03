import Depth5Frame from "./my-stocks-page-depth5-frame";
import { useEffect, useState } from "react";
import "react-widgets/styles.css";

const MyStocksHero = ({
  holdings,
  selectedCompanyIsin,
}: {
  holdings: any;
  selectedCompanyIsin: string;
}) => {
  const [investedValue, setInvestedValue] = useState<number>(0);
  const [returnValue, setReturnValue] = useState<number>(0);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MODE === "PRODUCTION") {
      let invested_value = 0;
      let return_value = 0;
      if (selectedCompanyIsin === undefined) {
        holdings.forEach((holding: any) => {
          invested_value += holding.average_price * holding.quantity;
          return_value += holding.pnl;
        });
        setInvestedValue(invested_value);
        setReturnValue(return_value);
      } else {
        const holding = holdings.find(
          (holding: any) => holding.isin === selectedCompanyIsin
        );
        setInvestedValue(holding.average_price * holding.quantity);
        setReturnValue(holding.pnl);
      }
    }
  }, [holdings, selectedCompanyIsin]);

  return (
    <div className="w-full flex flex-row justify-center py-[0rem] box-border max-w-full text-left text-[2.813rem] text-black font-plus-jakarta-sans">
      <div className="flex flex-col items-start justify-start gap-[2.437rem] max-w-full mq950:gap-[1.188rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[3.875rem] mq450:pl-[1.25rem] mq450:box-border">
          <h1 className="m-0 relative text-inherit tracking-[0.03em] leading-[100%] font-bold font-inherit mq450:text-[1.688rem] mq450:leading-[1.688rem] mq950:text-[2.25rem] mq950:leading-[2.25rem]">
            My Stocks
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full text-[1.5rem] text-gray-300 font-work-sans">
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem]  box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-center py-[0.75rem]  box-border gap-[0.743rem] max-w-full">
              <Depth5Frame
                prop={`₹${(
                  (investedValue + returnValue) /
                  10
                ).toLocaleString()}`}
                invested="Total value"
              />
              <Depth5Frame
                prop={`₹${(investedValue / 10).toLocaleString()}`}
                invested="Invested"
              />
              <Depth5Frame
                prop={`${
                  investedValue
                    ? ((returnValue / investedValue) * 100).toLocaleString()
                    : "0"
                }%`}
                invested="Profit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStocksHero;
