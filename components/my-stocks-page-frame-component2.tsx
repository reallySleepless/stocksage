import type { NextPage } from "next";

const FrameComponent2: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.687rem] pl-[0rem] box-border max-w-full">
      <header className="flex-1 flex flex-row items-end justify-between gap-[1.25rem] max-w-full text-left text-[1.75rem] text-darkslateblue-100 font-plus-jakarta-sans">
        <img
          className="h-[6.563rem] w-[11.938rem] relative object-cover"
          loading="lazy"
          alt=""
          src="/image-20240209-145435340removebgpreview-1@2x.png"
        />
        <div className="w-[80.25rem] flex flex-col items-start justify-end pt-[0rem] pb-[0.312rem] pr-[0.75rem] pl-[0rem] box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.25rem] max-w-full mq950:gap-[1.125rem]">
            <div className="flex flex-row items-start justify-start py-[0rem] px-[1.625rem] box-border max-w-full">
              <div className="flex flex-row items-end justify-start gap-[3rem] max-w-full mq950:gap-[1.5rem]">
                <div className="flex flex-col items-start justify-end pt-[0rem] pb-[0.125rem] pr-[0.625rem] pl-[0rem]">
                  <div className="flex flex-row items-start justify-start gap-[0.937rem]">
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
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.687rem] pl-[0rem] gap-[1rem]">
                  <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                    <img
                      className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/calendar.svg"
                    />
                  </div>
                  <div className="h-[1.75rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[0.625rem]">
                    <h1 className="m-0 relative text-inherit tracking-[0.03em] leading-[100%] font-semibold font-inherit shrink-0 [debug_commit:1de1738]">
                      MyStocks
                    </h1>
                    <img
                      className="ml-[-0.188rem] w-[9.313rem] h-[0.063rem] relative object-contain shrink-0 [debug_commit:1de1738]"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.937rem]">
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
                <div className="flex flex-row items-start justify-start gap-[0.937rem]">
                  <input
                    className="m-0 h-[1.625rem] w-[1.5rem]"
                    type="checkbox"
                  />
                  <h1 className="m-0 relative text-inherit tracking-[0.03em] leading-[100%] font-semibold font-inherit whitespace-nowrap">
                    Research Portal
                  </h1>
                </div>
                <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.062rem]">
                  <div className="flex flex-row items-start justify-start gap-[0.937rem]">
                    <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                      <img
                        className="w-[1.5rem] h-[1.5rem] relative"
                        loading="lazy"
                        alt=""
                        src="/vuesaxtwotonesetting.svg"
                      />
                    </div>
                    <h1 className="m-0 relative text-inherit tracking-[0.03em] leading-[100%] font-semibold font-inherit inline-block min-w-[7.563rem]">
                      Settings
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain mt-[-0.063rem]"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
        <div className="w-[12.813rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.937rem] box-border text-[1rem] text-whitesmoke-100">
          <div className="self-stretch rounded-81xl bg-royalblue-100 flex flex-row items-start justify-start py-[0.156rem] px-[0.5rem] gap-[0.625rem]">
            <img
              className="h-[3rem] w-[3rem] relative"
              loading="lazy"
              alt=""
              src="/frame-427319719.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.5rem] h-[1.5rem] relative"
                loading="lazy"
                alt=""
                src="/vuesaxtwotonearrowdown.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
              <div className="relative leading-[1.5rem] inline-block min-w-[5.625rem] whitespace-nowrap">
                Mirie Kiritani
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent2;
