import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Depth5FrameType = {
  prop?: string;
  invested?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propPadding?: CSSProperties["padding"];
  propMinWidth1?: CSSProperties["minWidth"];
  depth5Frame1Padding?: CSSProperties["padding"];
  depth5Frame1Flex?: CSSProperties["flex"];
  depth5Frame1MinWidth?: CSSProperties["minWidth"];
};

const Depth5Frame: NextPage<Depth5FrameType> = ({
  prop,
  invested,
  propMinWidth,
  propPadding,
  propMinWidth1,
  depth5Frame1Padding,
  depth5Frame1Flex,
  depth5Frame1MinWidth,
}) => {
  const bStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const depth8Frame01Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const investedStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const depth5Frame1Style: CSSProperties = useMemo(() => {
    return {
      padding: depth5Frame1Padding,
      flex: depth5Frame1Flex,
      minWidth: depth5Frame1MinWidth,
    };
  }, [depth5Frame1Padding, depth5Frame1Flex, depth5Frame1MinWidth]);

  return (
    <div
      className="rounded-lg flex flex-col items-start justify-start pt-[0.625rem] pb-[0.75rem] pr-[13.375rem] pl-[0.75rem] gap-[0.5rem] text-left text-[1.5rem] text-gray-300 font-work-sans border-[1px] border-solid border-gainsboro mq450:pr-[1.25rem] mq450:box-border"
      style={depth5Frame1Style}
    >
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-col items-start justify-start">
          <b
            className="relative tracking-[-0.6px] leading-[1.875rem] inline-block min-w-[4.925rem] whitespace-nowrap mq450:text-[1.188rem] mq450:leading-[1.5rem]"
            style={bStyle}
          >
            {prop}
          </b>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start text-[0.875rem] text-darkslateblue-100">
        <div className="flex flex-col items-start justify-start">
          <div
            className="flex flex-col items-start justify-start"
            style={depth8Frame01Style}
          >
            <div
              className="relative leading-[1.313rem] inline-block min-w-[3.688rem]"
              style={investedStyle}
            >
              {invested}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth5Frame;
