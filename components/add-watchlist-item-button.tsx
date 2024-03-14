import type { NextPage } from "next";
import { useCallback } from "react";

const AddWatchlistItemButton: NextPage = () => {
  const onPlusIconClick = useCallback(() => {
    //TODO: TODO: add company to watchlist?
  }, []);

  return (
    <div className="w-[1.5rem] rounded-[4.36px] bg-blue flex flex-row items-center justify-center py-[0.341rem] px-[0.313rem] box-border">
      <img
        className="h-[0.819rem] w-[0.819rem] relative overflow-hidden shrink-0 cursor-pointer"
        alt=""
        src="/plus.svg"
        onClick={onPlusIconClick}
      />
    </div>
  );
};

export default AddWatchlistItemButton;
