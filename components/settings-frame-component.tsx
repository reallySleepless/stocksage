import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  heading?: string;
  description?: string;
  rectangle1079?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propTop?: CSSProperties["top"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  heading,
  description,
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
        {heading}
      </div>
      <div className="w-[31.625rem] h-[3.75rem] relative max-w-full bg-[#b5deea] flex items-center">
        <p className="px-3">{description}</p>
      </div>
    </div>
  );
};

export default FrameComponent;
