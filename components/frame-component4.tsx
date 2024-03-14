import type { NextPage } from "next";
import FrameComponent5 from "./frame-component5";

const FrameComponent4: NextPage = () => {
  return (
    <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[2.375rem] max-w-full mq850:gap-[1.188rem_2.375rem]">
      <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.938rem] box-border gap-[1.125rem] max-w-full">
        <h1 className="m-0 self-stretch relative text-[3.75rem] leading-[100%] font-bold font-plus-jakarta-sans text-left mq450:text-[2.25rem] mq450:leading-[2.25rem] mq850:text-[3rem] mq850:leading-[3rem]">
          <span className="text-darkslateblue-100">Welcome To</span>
          <span className="text-steelblue">{` `}</span>
          <span className="text-royalblue-100">StockSage</span>
          <span className="text-steelblue"> !</span>
        </h1>
        <div className="w-[36.813rem] h-[2rem] relative text-[1.5rem] leading-[100%] font-plus-jakarta-sans text-cornflowerblue-100 text-left inline-block shrink-0 max-w-full box-border pr-[1.25rem] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
          Your Ultimate Trading Hub
        </div>
      </div>
      <FrameComponent5 name1="Name" placeholder="Enter your name" />
      <FrameComponent5
        name1="Email"
        placeholder="Enter your email"
        propPadding="0rem 1.25rem 0rem 0rem"
        propGap="0.813rem"
      />
      <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[0.563rem] max-w-full">
        <button className="cursor-pointer [border:none] py-[1.188rem] pr-[13.813rem] pl-[12.25rem] bg-royalblue-100 flex flex-row items-start justify-center box-border max-w-full hover:bg-dodgerblue mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
          <div className="h-[4.563rem] w-[31.625rem] relative bg-royalblue-100 hidden max-w-full" />
          <div className="h-[2.188rem] relative text-[1.5rem] leading-[100%] font-plus-jakarta-sans text-white text-left inline-block whitespace-nowrap z-[1] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
            Sign Up
          </div>
        </button>
        <div className="w-[29.438rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="flex flex-row items-start justify-start gap-[0.188rem]">
            <div className="relative text-[1.25rem] leading-[100%] font-plus-jakarta-sans text-cornflowerblue-100 text-left mq450:text-[1rem] mq450:leading-[1rem]">
              Have an account ?
            </div>
            <div className="h-[2.063rem] w-[6.625rem] relative text-[1.25rem] leading-[100%] font-plus-jakarta-sans text-darkslateblue-100 text-left inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1rem]">
              Login!
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FrameComponent4;
