import type { NextPage } from "next";

const MainFRAME: NextPage = () => {
  return (
    <header className="flex flex-row items-start justify-end py-[0rem] pr-[0.312rem] pl-[0rem] box-border max-w-full text-left text-[1.75rem] text-darkslateblue-100 font-plus-jakarta-sans">
      <div className="flex flex-row items-end justify-start gap-[3rem] max-w-full mq825:gap-[1.5rem]">
        <img
          className="h-[6.563rem] w-[11.938rem] relative object-cover"
          loading="lazy"
          alt=""
          src="/image-20240209-145435340removebgpreview-1@2x.png"
        />
        <div className="w-[82.375rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.5rem] box-border max-w-full">
          <div className="w-[79.5rem] flex flex-col items-start justify-start gap-[2.25rem] max-w-full mq825:gap-[1.125rem]">
            <div className="flex flex-row items-start justify-start py-[0rem] px-[1.625rem] box-border max-w-full">
              <div className="flex flex-row items-end justify-start gap-[3rem] max-w-full mq825:gap-[1.5rem]">
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
                    <div className="relative tracking-[0.03em] leading-[100%] font-semibold">
                      Dashboard
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.687rem] pl-[0rem] gap-[0.937rem]">
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
                <div className="flex flex-row items-start justify-start gap-[0.937rem]">
                  <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                    <img
                      className="w-[1.5rem] h-[1.5rem] relative"
                      loading="lazy"
                      alt=""
                      src="/vuesaxtwotonesms.svg"
                    />
                  </div>
                  <div className="relative tracking-[0.03em] leading-[100%] font-semibold">
                    Prediction
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.937rem]">
                  <input
                    className="m-0 h-[1.625rem] w-[1.5rem]"
                    type="checkbox"
                  />
                  <div className="relative tracking-[0.03em] leading-[100%] font-semibold whitespace-nowrap">
                    Research Portal
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.062rem]">
                  <div className="flex flex-row items-start justify-start gap-[1rem]">
                    <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                      <img
                        className="w-[1.5rem] h-[1.5rem] relative"
                        loading="lazy"
                        alt=""
                        src="/vuesaxtwotonesetting.svg"
                      />
                    </div>
                    <div className="h-[1.75rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[0.75rem]">
                      <div className="relative tracking-[0.03em] leading-[100%] font-semibold inline-block min-w-[7.5rem] shrink-0 [debug_commit:1de1738]">
                        Settings
                      </div>
                      <img
                        className="ml-[-0.375rem] w-[7.875rem] h-[0.063rem] relative object-contain shrink-0 [debug_commit:1de1738]"
                        alt=""
                      />
                    </div>
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
        <div className="w-[12.813rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[2.125rem] box-border text-[1rem] text-whitesmoke-100">
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
      </div>
    </header>
  );
};

export default MainFRAME;
