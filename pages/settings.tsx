import type { NextPage } from "next";
import APIKeyEntry from "../components/settings-a-p-i-key-entry";
import Navbar from "../components/navbar";

const Settings: NextPage = () => {
  return (
    <div className="relative rounded-13xl bg-white w-full overflow-hidden flex flex-col items-end justify-start pt-[1.062rem] pb-[5.437rem] pr-[6.562rem] pl-[0rem] box-border gap-[1.687rem] leading-[normal] tracking-[normal] mq825:pr-[1.625rem] mq825:box-border mq1125:pr-[3.25rem] mq1125:box-border">
      <Navbar />
      <main className="w-[99.938rem] flex flex-col items-start justify-start py-[0rem] pr-[0rem] pl-[1.25rem] box-border gap-[0.625rem] max-w-full">
        <div className="w-[22.438rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <img
            className="h-[10.313rem] w-[10.938rem] relative object-cover"
            loading="lazy"
            alt=""
            src="/145857007-307ce493b2544b2d8ba4d12c080d6651-1@2x.png"
          />
        </div>
        <APIKeyEntry />
      </main>
    </div>
  );
};

export default Settings;
