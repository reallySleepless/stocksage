import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent5Type = {
  name1?: string;
  placeholder?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
};

const FrameComponent5 = (props: FrameComponent5Type) => {
  const { name1, placeholder, propPadding, propGap } = props;
  const inputFramesStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  return (
    <div
      className="w-[36.813rem] flex flex-col items-start justify-start pt-[0rem] pb-[0.188rem] pr-[1.25rem] pl-[0rem] box-border gap-[0.625rem] max-w-full text-left text-[1.5rem] text-darkslateblue-100 font-plus-jakarta-sans"
      style={inputFramesStyle}
    >
      <div className="self-stretch h-[2rem] relative leading-[100%] inline-block shrink-0 mq450:text-[1.188rem] mq450:leading-[1.188rem]">
        {name1}
      </div>
      <div className="w-[31.625rem] h-[3.75rem] relative max-w-full bg-[#E8EEF3]">
        <input
          className="w-full [border:none] [outline:none] font-plus-jakarta-sans text-[1.5rem] bg-[transparent] absolute top-[0.875rem] left-[1.125rem] leading-[100%] text-steelblue text-left inline-block h-[2.063rem] p-0 mq450:text-[1.188rem] mq450:leading-[1.188rem]"
          placeholder={placeholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default FrameComponent5;
