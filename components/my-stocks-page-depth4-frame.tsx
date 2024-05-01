import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Depth4FrameType = {
  aAPL?: string;
  shareAt150?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propPadding?: CSSProperties["padding"];
  propMarginTop?: CSSProperties["marginTop"];
  propWidth?: CSSProperties["width"];
  propPadding1?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
};

const Depth4Frame: NextPage<Depth4FrameType> = ({
  aAPL,
  shareAt150,
  propHeight,
  propPadding,
  propMarginTop,
  propWidth,
  propPadding1,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
}) => {
  const depth4Frame7Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
      marginTop: propMarginTop,
    };
  }, [propHeight, propPadding, propMarginTop]);

  const depth5Frame0Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding1,
    };
  }, [propWidth, propPadding1]);

  const depth6Frame1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const aAPLStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const shareAt150Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div
      className="self-stretch h-[4.5rem] bg-whitesmoke-200 flex flex-row items-end justify-start pt-[0rem] px-[1rem] pb-[2.25rem] box-border z-[3] text-left text-[1rem] text-gray-300 font-work-sans"
      style={depth4Frame7Style}
    >
      <div
        className="w-[16.875rem] flex flex-row items-center justify-start py-[0rem] pr-[6.5rem] pl-[0rem] box-border gap-[1rem] mq450:pr-[1.25rem] mq450:box-border"
        style={depth5Frame0Style}
      >
        <div className="rounded-lg bg-aliceblue-200 flex flex-row items-center justify-center p-[0.75rem]">
          <div className="flex flex-col items-start justify-start">
            <div className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0">
              <img
                className="absolute top-[0rem] left-[0rem] w-full h-full"
                alt=""
                src="/my-stocks-page-vector--0-1.svg"
              />
              <div className="absolute top-[0rem] left-[0rem] w-[0.844rem] h-[0.844rem]" />
            </div>
          </div>
        </div>
        <div
          className="flex-1 flex flex-col items-start justify-center"
          style={depth6Frame1Style}
        >
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div
                className="relative leading-[1.5rem] font-medium inline-block min-w-[2.563rem]"
                style={aAPLStyle}
              >
                {aAPL}
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start text-[0.875rem] text-darkslateblue-100">
            <div className="flex flex-col items-start justify-start">
              <div
                className="relative leading-[1.313rem] inline-block min-w-[6.375rem]"
                style={shareAt150Style}
              >
                {shareAt150}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth4Frame;
