import type { NextPage } from "next";
import FrameComponent from "./settings-frame-component";
import { useEffect, useState } from "react";
import { getProfile } from "../util/getProfile";
import { logout } from "../util/logout";

const APIKeyEntry: NextPage = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const getUserDetails = async () => {
      const res = await getProfile();
      setProfile(res?.data);
    };
    getUserDetails();
  }, []);

  const loggingOut = async () => {
    localStorage.setItem("mongo_user_id", "");
    const data = await logout();
    console.log(data);
  };

  return (
    <section className="self-stretch flex flex-row items-start justify-center gap-[9.75rem] max-w-full text-left text-[1.5rem] text-darkslateblue-100 font-plus-jakarta-sans mq825:gap-[2.438rem] mq450:gap-[1.188rem] mq1400:flex-wrap mq1400:gap-[4.875rem]">
      <form className="m-0 w-[35.563rem] flex flex-col items-start justify-start gap-[2.562rem] min-w-[35.563rem] max-w-full mq825:gap-[1.25rem] mq825:min-w-full mq1400:flex-1">
        <div className="flex flex-row items-start justify-start pt-[0rem]  pb-[0.5rem] box-border max-w-full">
          <div className="flex-1 relative text-[1.5rem] leading-[100%] font-plus-jakarta-sans text-darkslateblue-100 text-left inline-block max-w-full mq450:text-[1.188rem] mq450:leading-[1.188rem]">
            Hey Buddy! Here is the basic details about your account.
          </div>
        </div>
        <FrameComponent heading="User ID" description={profile?.user_id} />
        <FrameComponent heading="Name" description={profile?.user_name} />
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.893rem] max-w-full mq825:gap-[0.938rem]">
          <FrameComponent heading="Email" description={profile?.email} />
        </div>
        <button
          className="w-[31.625rem] h-[3.75rem] hover:cursor-pointer text-[20px] bg-[#407bff] text-white"
          onClick={loggingOut}
        >
          Logout
        </button>
      </form>
      <img
        className="w-[50%] -mt-52"
        loading="lazy"
        alt=""
        src="/StockImage.jpg"
      />
    </section>
  );
};

export default APIKeyEntry;
