const PortfolioSneakPeek = () => {
  return (
    <div className="bg-secondary-background px-4 pt-6 pb-4 mx-4 w-1/4 h-1/5 mt-10 rounded-md">
      <span className="text-xs">Balance</span>
      <div className="flex justify-between pr-10 mb-2 text-black text-xs">
        <span className="rounded-md p-4 bg-[#6425FE] w-4/6 text-sm h-12">
          $ 13000
        </span>
        <span className="rounded-md py-4 px-2 flex justify-center items-center h-12 bg-[#C7FFA5] w-3/12 text-xs">
          ₹ 0.00
        </span>
      </div>
      <span className="text-xs">Invested</span>
      <div className="flex justify-between text-black">
        <div className="rounded-md justify-between p-4 bg-[#FBE4D8] w-4/6 h-12 flex items-center">
          <span>₹ 0.00</span>
          <span className="rounded-md p-4 bg-[#6425FE] h-8 aspect-square flex items-center whitespace-nowrap justify-center">
            {"->"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSneakPeek;
