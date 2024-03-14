import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Depth5FrameType = {
  depth6Frame0?: string;
  tesla?: string;
  electricVehiclesCleanEner?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const Depth5Frame: NextPage<Depth5FrameType> = ({
  depth6Frame0,
  tesla,
  electricVehiclesCleanEner,
  propWidth,
}) => {
  const electricVehiclesCleanStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[1rem] text-left text-[1rem] text-darkslateblue-100 font-work-sans">
      <img
        className="h-[3.5rem] w-[3.5rem] relative rounded-lg overflow-hidden shrink-0 object-cover"
        alt=""
        src={depth6Frame0}
      />
      <div className="flex-1 flex flex-col items-start justify-center min-w-[8.25rem]">
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="relative leading-[1.5rem] font-medium">{tesla}</div>
          </div>
        </div>
        <div className="self-stretch h-[2.625rem] overflow-hidden shrink-0 flex flex-col items-start justify-start text-[0.875rem] text-cornflowerblue-100">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div
              className="w-[10.344rem] relative leading-[1.313rem] inline-block"
              style={electricVehiclesCleanStyle}
            >
              {electricVehiclesCleanEner}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth5Frame;
