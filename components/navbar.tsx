import { useCallback, useEffect } from "react";
import { getProfile } from "../api/getProfile";
import { get } from "http";
import { useState } from "react";

const Navbar = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const getProfileData = async () => {
      const res = await getProfile();
      setUsername(res.data.user_name);
    };

    getProfileData();
  }, []);

  return (
    <div className="self-stretch flex flex-row items-start justify-start max-w-full">
      <header className="flex flex-row items-end justify-start gap-[3rem] max-w-full text-left text-lg text-darkslateblue-100 font-plus-jakarta-sans mq800:gap-[3rem_1.5rem]">
        <img
          className="h-[6.563rem] w-[11.938rem] relative object-cover"
          loading="lazy"
          alt=""
          src="/image-20240209-145435340removebgpreview-1@2x.png"
        />
        <div className="h-[4.813rem] w-[82.375rem] flex flex-col items-center justify-center pt-[0rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <div className="w-[79.5rem] flex flex-col items-start justify-start gap-[1.625rem] max-w-full">
            <div className="flex flex-row w-full justify-around py-[0rem] px-[1.625rem] box-border max-w-full">
              <div className="flex flex-row items-start justify-start gap-[3rem] max-w-full mq800:gap-[3rem_1.5rem]">
                <a
                  className="no-underline flex flex-row items-center justify-start py-[0rem] pr-[0.625rem] pl-[0rem] gap-[1rem] cursor-pointer"
                  href="/"
                >
                  <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                    <img
                      className="w-[1.5rem] h-[1.5rem] relative"
                      loading="lazy"
                      alt=""
                      src="/vuesaxboldelement4.svg"
                    />
                  </div>
                  <div className="flex flex-col  justify-start gap-[0.688rem]">
                    <h1 className="m-0 relative text-inherit tracking-[0.03em] leading-[100%] font-semibold font-inherit whitespace-nowrap text-center">
                      Dashboard
                    </h1>
                  </div>
                </a>
                <a
                  className="no-underline flex flex-row items-center justify-start py-[0rem] pr-[0.625rem] pl-[0rem] gap-[1rem] cursor-pointer"
                  href="/my-stocks-page"
                >
                  <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                    <img
                      className="w-[1.5rem] h-[1.5rem] relative"
                      loading="lazy"
                      alt=""
                      src="/calendar.svg"
                    />
                  </div>
                  <div className="flex flex-col  justify-start gap-[0.688rem]">
                    <h1 className="m-0 relative text-inherit tracking-[0.03em] leading-[100%] font-semibold font-inherit whitespace-nowrap text-center">
                      MyStocks
                    </h1>
                  </div>
                </a>
                <a
                  className="no-underline flex flex-row items-center justify-start py-[0rem] pr-[0.625rem] pl-[0rem] gap-[1rem] cursor-pointer"
                  href="/prediction-page"
                >
                  <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                    <img
                      className="w-[1.5rem] h-[1.5rem] relative"
                      loading="lazy"
                      alt=""
                      src="/vuesaxtwotonesms.svg"
                    />
                  </div>
                  <div className="flex flex-col  justify-start gap-[0.688rem]">
                    <h1 className="m-0 relative text-inherit tracking-[0.03em] leading-[100%] font-semibold font-inherit whitespace-nowrap text-center">
                      Prediction
                    </h1>
                  </div>
                </a>
                <a
                  className="no-underline flex flex-row items-center justify-start py-[0rem] pr-[0.625rem] pl-[0rem] gap-[1rem] cursor-pointer"
                  href="/news-page"
                >
                  <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                    <img
                      className="w-[1.5rem] h-[1.5rem] relative"
                      loading="lazy"
                      alt=""
                      src="/vuesaxtwotonesetting.svg"
                    />
                  </div>
                  <div className="flex flex-col  justify-start gap-[0.688rem]">
                    <h1 className="m-0 relative text-inherit tracking-[0.03em] leading-[100%] font-semibold font-inherit whitespace-nowrap text-center">
                      Research Portal
                    </h1>
                  </div>
                </a>
                <a
                  className="no-underline flex flex-row items-center justify-start py-[0rem] pr-[0.625rem] pl-[0rem] gap-[1rem] cursor-pointer"
                  href="/settings"
                >
                  <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                    <img
                      className="w-[1.5rem] h-[1.5rem] relative"
                      loading="lazy"
                      alt=""
                      src="/vuesaxtwotonesetting.svg"
                    />
                  </div>
                  <div className="flex flex-col  justify-start gap-[0.688rem]">
                    <h1 className="m-0 relative text-inherit tracking-[0.03em] leading-[100%] font-semibold font-inherit whitespace-nowrap text-center">
                      Settings
                    </h1>
                  </div>
                </a>
              </div>
            </div>
            <img
              className="self-stretch h-[0.188rem] relative max-w-full overflow-hidden shrink-0 object-contain"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.125rem] text-[1rem] text-whitesmoke">
          <div className="rounded-81xl bg-royalblue-100 flex flex-row items-start justify-start p-2 pr-7 gap-[0.625rem]">
            <img
              className="h-[3rem] w-[3rem] relative"
              loading="lazy"
              alt=""
              src="/frame-427319719.svg"
            />

            <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
              <div className="relative leading-[1.5rem] whitespace-nowrap">
                {username}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
