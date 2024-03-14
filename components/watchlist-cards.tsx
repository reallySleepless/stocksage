import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type WatchlistCardsType = {
  cLogo?: string;
  cName?: string;
  cSymbol?: string;
  cValueChange?: string;
  cValue?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propPadding1?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const WatchlistCards: NextPage<WatchlistCardsType> = ({
  cLogo,
  cName,
  cSymbol,
  cValueChange,
  cValue,
  propPadding,
  propBackgroundColor,
  propPadding1,
  propWidth,
  propColor,
  propColor1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
      width: propWidth,
    };
  }, [propPadding1, propWidth]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const currentValueStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.188rem] text-left text-[0.75rem] text-white font-actor"
      style={frameDivStyle}
    >
      <div
        className="flex-1 rounded-lg bg-royalblue-200 flex flex-col items-center justify-center py-[1rem] px-[0.75rem] gap-[1rem] z-[1]"
        style={frameDiv1Style}
      >
        <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
          <div
            className="flex flex-row items-center justify-start py-[0rem] pr-[0.25rem] pl-[0rem] gap-[0.375rem]"
            style={frameDiv2Style}
          >
            <img
              className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={cLogo}
            />
            <div className="relative">{cName}</div>
          </div>
          <div className="w-[2.063rem] flex flex-col items-end justify-center text-right">
            <div className="relative uppercase">{cSymbol}</div>
            <div className="relative uppercase text-red" style={divStyle}>
              {cValueChange}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start text-gray-100">
          <div className="flex flex-col items-start justify-start gap-[0.25rem]">
            <div className="relative capitalize" style={currentValueStyle}>
              Current Value
            </div>
            <div className="relative text-[1.125rem] capitalize text-white whitespace-nowrap">
              {cValue}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchlistCards;
