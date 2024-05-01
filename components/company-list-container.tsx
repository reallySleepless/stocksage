import CompanyList from "./company-list";
import { Combobox } from "react-widgets/cjs";
import jsonFile from "../DataFiles/NSE.json";
import "react-widgets/styles.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  getUserWatchlists,
  createWatchlist,
  updateWatchlist,
} from "../util/watchlist";

const CompanyListContainer = ({
  setCompanyToDisplay,
}: {
  setCompanyToDisplay: Dispatch<SetStateAction<string>>;
}) => {
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([
    "TATA MOTORS LIMITED",
  ]);

  const [mongo_watchlist_id, setMongoWatchlistId] = useState("");

  useEffect(() => {
    const mongo_user_id = localStorage.getItem("mongo_user_id");
    const getUserWishList = async () => {
      const data = await getUserWatchlists(mongo_user_id);
      if (data[0]) {
        setMongoWatchlistId(data[0]?._id);
        setSelectedCompanies(data[0]?.wishlist_array);
      } else {
        const watchListObj = {
          user_id: mongo_user_id,
          wishlist_array: selectedCompanies,
        };
        const watchlist = await createWatchlist(watchListObj);
        setMongoWatchlistId(watchlist?._id);
      }
    };
    if (mongo_user_id) {
      getUserWishList();
    }
  }, []);

  useEffect(() => {
    const updateWishlist = async () => {
      const watchListObj: any = {
        user_id: localStorage.getItem("mongo_user_id"),
        wishlist_array: selectedCompanies,
      };
      const data = await updateWatchlist(mongo_watchlist_id, watchListObj);
    };
    updateWishlist();
  }, [selectedCompanies]);

  const [selectedCompany, setSelectedCompany] = useState("");

  const handleSelect = async (companyName: string) => {
    setSelectedCompanies([...selectedCompanies, companyName]);
    setSelectedCompany("");
  };

  return (
    <div className="self-stretch rounded-lg bg-whitesmoke flex flex-col items-start justify-start py-[1.063rem] pr-[0.719rem] pl-[0.75rem] gap-[1.125rem] text-center text-[0.875rem] text-darkslateblue-100 font-actor">
      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
        <Combobox
          className="w-full"
          hideCaret
          hideEmptyPopup
          data={jsonFile.map((company) => company.name)}
          onChange={(companyName) => setSelectedCompany(companyName)}
          onSelect={handleSelect}
          placeholder="Add to your wishlist"
          value={selectedCompany}
        />
      </div>
      <CompanyList
        companyList={selectedCompanies}
        setCompanyToDisplay={setCompanyToDisplay}
      />
    </div>
  );
};

export default CompanyListContainer;
