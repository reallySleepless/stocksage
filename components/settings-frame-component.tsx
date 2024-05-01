import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  aPIKey?: string;
  enterTheAPIKeyPlaceholder?: string;
  rectangle1079?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propTop?: CSSProperties["top"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  aPIKey,
  enterTheAPIKeyPlaceholder,
  rectangle1079,
  propGap,
  propTop,
}) => {
  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const enterTheAPIStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start gap-[1.125rem] max-w-full text-left text-[1.5rem] text-darkslateblue-100 font-plus-jakarta-sans"
      style={frameDiv3Style}
    >
      <div className="self-stretch relative leading-[100%] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
        {aPIKey}
      </div>
      <div className="w-[31.625rem] h-[3.75rem] relative max-w-full">
        <input
          className="w-full [border:none] [outline:none] font-plus-jakarta-sans text-[1.5rem] bg-[transparent] absolute top-[0.875rem] left-[1.125rem] leading-[100%] text-steelblue-100 text-left inline-block h-[1.5rem] p-0 mq450:text-[1.188rem] mq450:leading-[1.188rem]"
          placeholder={enterTheAPIKeyPlaceholder}
          type="text"
          style={enterTheAPIStyle}
        />
        <img
          className="absolute top-[0rem] left-[0rem] w-full h-full z-[1]"
          alt=""
          src={rectangle1079}
        />
      </div>
    </div>
  );
};

export default FrameComponent;
