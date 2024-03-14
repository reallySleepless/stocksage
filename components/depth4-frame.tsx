import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Depth4FrameType = {
  cNBC1hAgo?: string;
  stockFuturesAreFlatAfterS?: string;
  uSStockFuturesWereFlatInO?: string;
  depth8Frame0?: string;

  /** Style props */
  propMarginTop?: CSSProperties["marginTop"];
  propMinHeight?: CSSProperties["minHeight"];
  propWidth?: CSSProperties["width"];
  propMinHeight1?: CSSProperties["minHeight"];
  propWidth1?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
};

const Depth4Frame: NextPage<Depth4FrameType> = ({
  cNBC1hAgo,
  stockFuturesAreFlatAfterS,
  uSStockFuturesWereFlatInO,
  depth8Frame0,
  propMarginTop,
  propMinHeight,
  propWidth,
  propMinHeight1,
  propWidth1,
  propAlignSelf,
  propHeight,
}) => {
  const depth4Frame1Style: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  const depth9Frame1Style: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const stockFuturesAreStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const depth9Frame2Style: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight1,
    };
  }, [propMinHeight1]);

  const uSStockFuturesStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      alignSelf: propAlignSelf,
    };
  }, [propWidth1, propAlignSelf]);

  const depth8Frame0Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className="mb-16 self-stretch flex flex-col items-start justify-start max-w-full shrink-0 z-[1] text-left text-[0.875rem] text-cornflowerblue-100 font-work-sans"
      style={depth4Frame1Style}
    >
      <div className="self-stretch bg-whitesmoke-200 flex flex-row items-start justify-start p-[1rem] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1rem] mq1000:flex-wrap">
          <div className="w-[36.375rem] flex flex-col items-start justify-start gap-[1rem] min-w-[36.375rem] max-w-full mq975:min-w-full mq1000:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="relative leading-[1.313rem]">{cNBC1hAgo}</div>
                </div>
              </div>
              <div
                className="self-stretch flex flex-col items-start justify-start max-w-full text-[1rem] text-darkslateblue-100"
                style={depth9Frame1Style}
              >
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <b
                    className="relative leading-[1.25rem] inline-block max-w-full"
                    style={stockFuturesAreStyle}
                  >
                    {stockFuturesAreFlatAfterS}
                  </b>
                </div>
              </div>
              <div
                className="self-stretch flex flex-col items-start justify-start min-h-[2.625rem] max-w-full"
                style={depth9Frame2Style}
              >
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div
                    className="w-[33.875rem] relative leading-[1.313rem] inline-block max-w-full"
                    style={uSStockFuturesStyle}
                  >
                    {uSStockFuturesWereFlatInO}
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[0rem] px-[1rem] bg-aliceblue h-[2rem] rounded-xl overflow-hidden shrink-0 flex flex-row items-center justify-center box-border">
              <div className="bg-aliceblue overflow-hidden flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative text-[0.875rem] leading-[1.313rem] font-medium font-work-sans text-darkslateblue-100 text-left">
                    Read more
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div className="w-[18.188rem] flex flex-row items-start justify-start min-w-[18.188rem] mq1000:flex-1">
            <img
              className="h-[8.231rem] flex-1 relative rounded-xl max-w-full overflow-hidden object-cover mq1000:flex-1"
              alt=""
              src={depth8Frame0}
              style={depth8Frame0Style}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth4Frame;
