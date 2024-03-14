import type { NextPage } from "next";
import FrameComponent4 from "../components/frame-component4";

const SignUpPage: NextPage = () => {
  return (
    <div className="w-full relative rounded-13xl bg-white overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[1.125rem] pl-[0rem] box-border gap-[1.5rem] tracking-[normal] mq1525:flex-wrap mq1525:pl-[1.125rem] mq1525:pb-[1.125rem] mq1525:box-border">
      <div className="h-[7.375rem] w-[11.938rem] flex flex-col items-start justify-start pt-[0.813rem] px-[0rem] pb-[0rem] box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/image-20240209-145435340removebgpreview-1@2x.png"
        />
      </div>
      <main className="h-[67.5rem] flex-1 flex flex-row items-end justify-start pt-[18.625rem] px-[0rem] pb-[0rem] box-border min-w-[68.563rem] max-w-full mq1225:pt-[12.125rem] mq1225:box-border mq1225:min-w-full mq1525:pl-[0rem] mq1525:pr-[0rem] mq1525:box-border mq850:pt-[7.875rem] mq850:box-border">
        <div className="w-[47.125rem] flex flex-col items-start justify-start min-h-[48.875rem] max-w-[calc(100%_-_933px)] shrink-0 mq1225:hidden mq1525:max-w-full">
          <FrameComponent4 />
        </div>
        <img
          className="h-[70.375rem] flex-1 relative max-w-[calc(100%_-_745px)] overflow-hidden object-cover z-[1] ml-[-0.562rem] mq1225:max-w-full mq1525:hidden"
          loading="lazy"
          alt=""
          src="/investment-datarafiki-1@2x.png"
        />
      </main>
    </div>
  );
};

export default SignUpPage;
