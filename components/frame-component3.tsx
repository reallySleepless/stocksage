import type { NextPage } from "next";

const FrameComponent3: NextPage = () => {
  return (
    <div className="h-[4.625rem] w-[80.25rem] flex flex-col items-start justify-start py-[0rem] pr-[0.75rem] pl-[0rem] box-border max-w-full text-left text-[1.75rem] text-darkslateblue-100 font-plus-jakarta-sans">
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.688rem] max-w-full">
        <div className="flex flex-row items-start justify-start py-[0rem] px-[1.625rem] box-border max-w-full">
          <div className="flex flex-row items-start justify-start gap-[3rem] max-w-full mq725:gap-[3rem_1.5rem]">
            <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.625rem] pl-[0rem] gap-[0.938rem]">
              <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[1.5rem] h-[1.5rem] relative"
                  loading="lazy"
                  alt=""
                  src="/vuesaxboldelement4.svg"
                />
              </div>
              <h1 className="m-0 relative text-inherit tracking-[0.03em] leading-[100%] font-semibold font-inherit">
                Dashboard
              </h1>
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
                <h1 className="m-0 relative text-inherit tracking-[0.03em] leading-[100%] font-semibold font-inherit">
                  MyStocks
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
              <div className="flex flex-row items-start justify-start gap-[0.938rem]">
                <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative"
                    loading="lazy"
                    alt=""
                    src="/vuesaxtwotonesms.svg"
                  />
                </div>
                <h1 className="m-0 relative text-inherit tracking-[0.03em] leading-[100%] font-semibold font-inherit">
                  Prediction
                </h1>
              </div>
            </div>
            <div className="w-[16.438rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border">
              <div className="self-stretch flex flex-row items-start justify-start gap-[1rem]">
                <input
                  className="m-0 h-[1.625rem] w-[1.5rem]"
                  type="checkbox"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.438rem]">
                  <h1 className="m-0 relative text-inherit tracking-[0.03em] leading-[100%] font-semibold font-inherit whitespace-nowrap">
                    Research Portal
                  </h1>
                  <img
                    className="self-stretch h-[0.125rem] relative max-w-full overflow-hidden shrink-0 object-contain"
                    loading="lazy"
                    alt=""
                  />
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
                <h1 className="m-0 relative text-inherit tracking-[0.03em] leading-[100%] font-semibold font-inherit">
                  Settings
                </h1>
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

export default FrameComponent3;
