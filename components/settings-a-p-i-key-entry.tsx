import type { NextPage } from "next";
import FrameComponent from "./settings-frame-component";
import { useEffect, useState } from "react";
import { getProfile } from "../util/getProfile";

const APIKeyEntry: NextPage = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const getUserDetails = async () => {
      const res = await getProfile();
      setProfile(res.data);
    };
    getUserDetails();
  }, []);

  console.log(profile);

  return (
    <section className="self-stretch flex flex-row items-start justify-center gap-[9.75rem] max-w-full text-left text-[1.5rem] text-darkslateblue-100 font-plus-jakarta-sans mq825:gap-[2.438rem] mq450:gap-[1.188rem] mq1400:flex-wrap mq1400:gap-[4.875rem]">
      <form className="m-0 w-[35.563rem] flex flex-col items-start justify-start gap-[2.562rem] min-w-[35.563rem] max-w-full mq825:gap-[1.25rem] mq825:min-w-full mq1400:flex-1">
        <div className="flex flex-row items-start justify-start pt-[0rem]  pb-[0.5rem] box-border max-w-full">
          <div className="flex-1 relative text-[1.5rem] leading-[100%] font-plus-jakarta-sans text-darkslateblue-100 text-left inline-block max-w-full mq450:text-[1.188rem] mq450:leading-[1.188rem]">
            Hey Macha! Here is your basic details about your account.
          </div>
        </div>
        <FrameComponent heading="User ID" description={profile?.user_id} />
        <FrameComponent heading="Name" description={profile?.user_name} />
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.893rem] max-w-full mq825:gap-[0.938rem]">
          <FrameComponent heading="Email" description={profile?.email} />
        </div>
      </form>
      <div className="flex-1 flex flex-col items-start justify-start pt-[1.062rem] px-[0rem] pb-[0rem] box-border min-w-[34.688rem] max-w-full mq825:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.312rem]">
          <div className="self-stretch h-[31.125rem] relative bg-gainsboro-200" />
          <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[3.187rem] mq1125:pl-[1.563rem] mq1125:pr-[1.563rem] mq1125:box-border">
            <div className="relative leading-[100%] mq450:text-[1.188rem] mq450:leading-[1.188rem]">{`To know how to retrieve the information, watch the above video `}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIKeyEntry;
