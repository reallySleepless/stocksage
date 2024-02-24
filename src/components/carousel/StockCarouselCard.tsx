"use client";

import Image from "next/image";

interface StockCarouselCardProps {
  randomIntTemp: number;
  carouselCardColor: string;
  companyName: string;
  companySymbol: string;
  currentValue: number;
  currentChange: number;
}

const StockCarouselCard = (props: StockCarouselCardProps) => {
  const {
    randomIntTemp,
    carouselCardColor,
    companyName,
    companySymbol,
    currentValue,
    currentChange,
  } = props;

  return (
    <div
      className={`embla__slide__img rounded-md text-black px-4`}
      style={{ backgroundColor: carouselCardColor }}
    >
      <div className="flex justify-between ">
        <div className="pt-4 w-2/3">
          <Image
            src={`https://source.unsplash.com/random/${randomIntTemp}`}
            width={20}
            height={20}
            alt="stock"
            className="rounded-md max-w-[20px] max-h-[20px] inline-flex"
          />
          <span className="ml-2 text-sm">${companyName}</span>
        </div>
        <div className="flex flex-col pt-4">
          <span className="text-sm text-right">{companySymbol}</span>
          <span className="text-sm ">
            {currentChange % 2 ? "+" : "-"}
            10
          </span>
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <div className="flex flex-col">
          <span className="text-sm">Current Value</span>
          <span className="text-sm">${currentValue}</span>
        </div>
        <div className="w-1/3 text-sm">Some graph</div>
      </div>
    </div>
  );
};

export default StockCarouselCard;
