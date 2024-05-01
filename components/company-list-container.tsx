import CompanyList from "./company-list";
import { Combobox } from "react-widgets/cjs";
import jsonFile from "../DataFiles/NSE.json";
import "react-widgets/styles.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const CompanyListContainer = ({
  setCompanyToDisplay,
}: {
  setCompanyToDisplay: Dispatch<SetStateAction<string>>;
}) => {
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([
    "TATA MOTORS LIMITED",
  ]);

  console.log("Selected Companies", selectedCompanies);
  const [selectedCompany, setSelectedCompany] = useState("");

  const handleSelect = (companyName: string) => {
    setSelectedCompanies([...selectedCompanies, companyName]);
    setSelectedCompany("");
  };

  console.log("Selected Companies", selectedCompany);

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
