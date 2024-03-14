interface Thought {
  thought: string;
}

const ThoughtForTheDay = (props: Thought) => {
  const { thought } = props;
  if (thought.length > 140) {
    throw new Error("Thought should be less than 140 characters");
  }
  return (
    <div className="w-[12.875rem] flex flex-col items-start justify-start pt-[5.5rem] px-[1.25rem] pb-[2.5rem] box-border relative gap-[0.938rem] text-[0.75rem] text-white">
      <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
        <img
          className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/union.svg"
        />
        <div className="absolute top-[1.306rem] left-[5.256rem] w-[2.019rem] h-[3.131rem] z-[1] flex items-center justify-center">
          <img
            className="w-full h-full z-[1] object-contain absolute left-[-0.125rem] top-[0.125rem] [transform:scale(4.885)]"
            loading="lazy"
            alt=""
            src="/icon-container.svg"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-[0rem] px-[2.688rem]">
        <div className="relative z-[1]">Thoughts Time</div>
      </div>
      <div className="self-stretch relative text-[0.875rem] leading-[136%] break-words max-w-[300px] text-center z-[1]">
        {thought}
      </div>
    </div>
  );
};

export default ThoughtForTheDay;
