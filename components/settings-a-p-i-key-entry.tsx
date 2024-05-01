import type { NextPage } from "next";
import FrameComponent from "./settings-frame-component";

const APIKeyEntry: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center gap-[9.75rem] max-w-full text-left text-[1.5rem] text-darkslateblue-100 font-plus-jakarta-sans mq825:gap-[2.438rem] mq450:gap-[1.188rem] mq1400:flex-wrap mq1400:gap-[4.875rem]">
      <form className="m-0 w-[35.563rem] flex flex-col items-start justify-start gap-[2.562rem] min-w-[35.563rem] max-w-full mq825:gap-[1.25rem] mq825:min-w-full mq1400:flex-1">
        <div className="w-[25.25rem] flex flex-row items-start justify-start pt-[0rem] px-[2rem] pb-[0.5rem] box-border max-w-full">
          <div className="flex-1 relative text-[1.5rem] leading-[100%] font-plus-jakarta-sans text-darkslateblue-100 text-left inline-block max-w-full mq450:text-[1.188rem] mq450:leading-[1.188rem]">
            Hey Mirie! let’s get you set up
          </div>
        </div>
        <FrameComponent
          aPIKey="API Key"
          enterTheAPIKeyPlaceholder="Enter the API Key"
          rectangle1079="/rectangle-1079.svg"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.893rem] max-w-full mq825:gap-[0.938rem]">
          <FrameComponent
            aPIKey="API Secret"
            enterTheAPIKeyPlaceholder="Enter the API Secret"
            rectangle1079="/rectangle-1078.svg"
            propGap="1.375rem"
            propTop="0.813rem"
          />
          <FrameComponent
            aPIKey="URL"
            enterTheAPIKeyPlaceholder="Enter the redirect URL"
            rectangle1079="/rectangle-1078.svg"
            propGap="1.312rem"
            propTop="0.875rem"
          />
          <FrameComponent
            aPIKey="Code"
            enterTheAPIKeyPlaceholder="Enter the code"
            rectangle1079="/rectangle-1079.svg"
            propGap="1.125rem"
            propTop="0.875rem"
          />
          <div className="w-[31.688rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
            <button className="cursor-pointer [border:none] py-[0.687rem] px-[1.25rem] bg-royalblue-100 w-[20.188rem] rounded-3xs flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full hover:bg-dodgerblue">
              <div className="h-[3.063rem] w-[20.188rem] relative rounded-3xs bg-royalblue-100 hidden max-w-full" />
              <div className="relative text-[1.125rem] font-extrabold font-poppins text-white text-left z-[1]">
                Connect Now!
              </div>
            </button>
          </div>
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
