import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type WatchlistItemType = {
  cLogo?: string;
  cName?: string;
  cSymbol?: string;
  cValue?: string;
  continueNode?: number;

  /** Style props */
  whileLoopNodeMarginTop?: CSSProperties["marginTop"];
};

const WatchlistItem: NextPage<WatchlistItemType> = ({
  cLogo,
  cName,
  cSymbol,
  whileLoopNodeMarginTop,
  cValue,
  continueNode,
}) => {
  const borderRadius = "4px";
  const continueNodeColor =
    continueNode && continueNode > 0 ? "#77b900" : "#e8464c";
  const whileLoopNodeStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: whileLoopNodeMarginTop,
    };
  }, [whileLoopNodeMarginTop]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: borderRadius,
    };
  }, [borderRadius]);

  const continueNodeStyle: CSSProperties = useMemo(() => {
    return {
      color: continueNodeColor,
    };
  }, [continueNodeColor]);

  return (
    <div
      className="self-stretch flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[1.688rem] gap-[1.25rem] shrink-0 text-left text-[0.75rem] text-darkslateblue-100 font-actor mq450:flex-wrap mq450:justify-center"
      style={whileLoopNodeStyle}
    >
      <div className="flex flex-row items-start justify-start gap-[0.375rem]">
        <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
            alt=""
            src={cLogo}
            style={iconStyle}
          />
        </div>
        <div className="relative">
          <p className="m-0">{cName}</p>
          <p className="m-0 text-cornflowerblue-100">{cSymbol}</p>
        </div>
      </div>
      <div className="flex flex-col items-end justify-start text-right">
        <div className="relative uppercase whitespace-nowrap">{cValue}</div>
        <div
          className="relative uppercase text-yellowgreen"
          style={continueNodeStyle}
        >
          {continueNode}
        </div>
      </div>
    </div>
  );
};

export default WatchlistItem;
