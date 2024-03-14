import type { NextPage } from "next";
import { useCallback } from "react";

const LoginPage: NextPage = () => {
  const onRectangleClick = useCallback(() => {
    // Please sync "otp page" to the project
  }, []);

  return (
    <div className="w-full relative rounded-13xl bg-white overflow-hidden flex flex-row items-start justify-start pt-[3.188rem] px-[2.75rem] pb-[8.063rem] box-border gap-[13.25rem] tracking-[normal] text-left text-[4rem] text-darkslateblue-100 font-plus-jakarta-sans mq450:gap-[13.25rem_1.625rem] mq900:gap-[13.25rem_3.313rem] mq1325:gap-[13.25rem_6.625rem] mq1325:pl-[1.375rem] mq1325:pr-[1.375rem] mq1325:box-border mq1725:flex-wrap">
      <div className="w-[46.25rem] flex flex-col items-start justify-start gap-[11.625rem] min-w-[46.25rem] max-w-full mq450:gap-[2.875rem_11.625rem] mq900:gap-[5.813rem_11.625rem] mq900:min-w-full mq1725:flex-1">
        <img
          className="w-[11.938rem] h-[6.563rem] relative object-cover"
          loading="lazy"
          alt=""
          src="/image-20240209-145435340removebgpreview-1@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-end max-w-full">
          <div className="w-[35.563rem] flex flex-col items-start justify-start gap-[2.5rem] max-w-full mq900:gap-[1.25rem_2.5rem]">
            <h1 className="m-0 w-[32.938rem] relative text-inherit leading-[100%] font-normal font-inherit inline-block max-w-full mq450:text-[2.375rem] mq450:leading-[2.375rem] mq900:text-[3.188rem] mq900:leading-[3.188rem]">
              Welcome Back !
            </h1>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.625rem] max-w-full text-[1.5rem]">
              <div className="self-stretch h-[2rem] relative leading-[100%] inline-block shrink-0 mq450:text-[1.188rem] mq450:leading-[1.188rem]">
                Enter your email to receive a one-time password
              </div>
              <div className="w-[31.625rem] flex flex-col items-start justify-start gap-[2.063rem] max-w-full text-steelblue-100 mq900:gap-[1rem_2.063rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.625rem] max-w-full">
                  <div className="self-stretch h-[3.75rem] relative">
                    <div className="absolute top-[0.813rem] left-[0.813rem] leading-[100%] inline-block w-[15.375rem] h-[2.063rem] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
                      Enter your email
                    </div>
                    <div className="absolute top-[0rem] left-[0rem] bg-aliceblue-400 w-full h-full z-[1]" />
                  </div>
                  <div className="w-[27.875rem] flex flex-row items-start justify-start gap-[0.75rem] max-w-full mq450:flex-wrap">
                    <div className="h-[1.625rem] w-[1.625rem] relative bg-aliceblue-400" />
                    <input
                      className="w-full [border:none] [outline:none] font-plus-jakarta-sans text-[1.5rem] bg-[transparent] h-[1.625rem] flex-1 relative leading-[100%] text-darkslateblue-100 text-left inline-block min-w-[16.563rem] max-w-full p-0 mq450:text-[1.188rem] mq450:leading-[1.188rem]"
                      placeholder="Remember Me"
                      type="text"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.813rem] max-w-full text-[1.25rem] text-cornflowerblue-100">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch h-[4.563rem] relative">
                    <div
                      className="absolute top-[0rem] left-[0rem] bg-royalblue-100 w-full h-full cursor-pointer"
                      onClick={onRectangleClick}
                    />
                    <div className="absolute top-[1.25rem] left-[8.5rem] text-[1.5rem] leading-[100%] font-plus-jakarta-sans text-white text-left inline-block w-[14rem] h-[2.188rem] z-[1] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
                      Send 4-digit code
                    </div>
                  </button>
                  <div className="w-[27.688rem] flex flex-row items-start justify-start py-[0rem] px-[3.25rem] box-border max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                    <div className="flex-1 flex flex-row items-start justify-start max-w-full [row-gap:20px] mq450:flex-wrap">
                      <div className="flex-1 relative leading-[100%] inline-block min-w-[9.438rem] mq450:text-[1rem] mq450:leading-[1rem]">
                        Don’t have an account ?
                      </div>
                      <div className="w-[6.625rem] flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem] box-border text-darkslateblue-100">
                        <div className="self-stretch h-[2.063rem] relative leading-[100%] inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1rem]">
                          Make one!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[56.25rem] w-[48.813rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border min-w-[48.813rem] max-w-full mq1325:min-w-full mq1725:flex-1">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1725:self-stretch mq1725:w-auto"
          loading="lazy"
          alt=""
          src="/6183486-3129505-1@2x.png"
        />
      </div>
    </div>
  );
};

export default LoginPage;
