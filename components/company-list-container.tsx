import AddWatchlistItemButton from "./add-watchlist-item-button";
import CompanyList from "./company-list";

const CompanyListContainer = () => {
  return (
    <div className="self-stretch rounded-lg bg-whitesmoke flex flex-col items-start justify-start py-[1.063rem] pr-[0.719rem] pl-[0.75rem] gap-[1.125rem] text-center text-[0.875rem] text-darkslateblue-100 font-actor">
      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
        <div className="w-[3.5rem] flex flex-col items-start justify-start pt-[0.188rem] px-[0rem] pb-[0rem] box-border">
          <div className="self-stretch relative">Watchlist</div>
        </div>
        <AddWatchlistItemButton />
      </div>
      <CompanyList />
    </div>
  );
};

export default CompanyListContainer;
