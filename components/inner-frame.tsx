import type { NextPage } from "next";

const InnerFrame: NextPage = () => {
  return (
    <div className="h-[4.625rem] w-[80.25rem] flex flex-col items-start justify-start py-[0rem] pr-[0.75rem] pl-[0rem] box-border max-w-full text-left text-[1.75rem] text-darkslateblue-100 font-plus-jakarta-sans">
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.625rem] max-w-full">
        <div className="flex flex-row items-start justify-start py-[0rem] px-[1.625rem] box-border max-w-full">
          <div className="flex flex-row items-start justify-start gap-[3rem] max-w-full mq700:gap-[3rem_1.5rem]">
            <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.625rem] pl-[0rem] gap-[0.938rem]">
              <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[1.5rem] h-[1.5rem] relative"
                  loading="lazy"
                  alt=""
                  src="/vuesaxboldelement4.svg"
                />
              </div>
              <div className="relative tracking-[0.03em] leading-[100%] font-semibold">
                Dashboard
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.125rem] pb-[0rem] pr-[0.688rem] pl-[0rem]">
              <div className="flex flex-row items-start justify-start gap-[0.938rem]">
                <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/calendar.svg"
                  />
                </div>
                <div className="relative tracking-[0.03em] leading-[100%] font-semibold">
                  MyStocks
                </div>
              </div>
            </div>
            <div className="w-[11.813rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border">
              <div className="self-stretch flex flex-row items-start justify-start gap-[1rem]">
                <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative"
                    loading="lazy"
                    alt=""
                    src="/vuesaxtwotonesms.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.563rem]">
                  <div className="relative tracking-[0.03em] leading-[100%] font-semibold whitespace-nowrap">
                    Prediction
                  </div>
                  <img
                    className="self-stretch h-[0.063rem] relative max-w-full overflow-hidden shrink-0 object-contain"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
              <div className="flex flex-row items-start justify-start gap-[0.938rem]">
                <input
                  className="m-0 h-[1.625rem] w-[1.5rem]"
                  type="checkbox"
                />
                <div className="relative tracking-[0.03em] leading-[100%] font-semibold whitespace-nowrap">
                  Research Portal
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem]">
              <div className="flex flex-row items-start justify-start gap-[0.938rem]">
                <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative"
                    loading="lazy"
                    alt=""
                    src="/vuesaxtwotonesetting.svg"
                  />
                </div>
                <div className="relative tracking-[0.03em] leading-[100%] font-semibold">
                  Settings
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch h-[0.188rem] relative max-w-full overflow-hidden shrink-0 object-contain"
          loading="lazy"
          alt=""
        />
      </div>
    </div>
  );
};

export default InnerFrame;
