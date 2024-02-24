import React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { getCarouselCardColor } from "@utils/carouselCardColor";
import StockCarouselCard from "./StockCarouselCard";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  className?: string;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, className } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div
      className={`embla-v1 rounded-lg p-4 relative bg-secondary-background ${className}`}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <StockCarouselCard
                randomIntTemp={index}
                carouselCardColor={getCarouselCardColor(index)}
                companyName={`Company ${index}`}
                companySymbol={`S${index}`}
                currentValue={200}
                currentChange={index}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-11 absolute rounded-lg bg-secondary-background left-10 top-[50%] -translate-y-[50%]">
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="w-10 my-2 ml-2"
        />
      </div>
      <div className="w-11 absolute rounded-lg bg-secondary-background right-10 top-[50%] -translate-y-[50%]">
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="w-10 my-2 ml-2"
        />
      </div>
    </div>
  );
};

export default EmblaCarousel;
