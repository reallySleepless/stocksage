import type { NextPage } from "next";
import { useCallback, useState } from "react";
import { Combobox } from "react-widgets/cjs";
import jsonFile from "../DataFiles/NSE.json";

const AddWatchlistItemButton: NextPage = () => {
	const [showDropdown, setShowDropdown] = useState(false);

	const onPlusIconClick = useCallback(() => {
		setShowDropdown((prevState) => !prevState);
	}, []);

	const [selectedCompany, setSelectedCompany] = useState("");
	console.log(selectedCompany);

	return (
		<div className="w-[1.5rem] rounded-[4.36px] bg-blue flex flex-row items-center justify-center py-[0.341rem] px-[0.313rem] box-border relative">
			<img
				className="h-[0.819rem] w-[0.819rem] relative overflow-hidden shrink-0 cursor-pointer"
				alt=""
				src="/plus.svg"
				onClick={onPlusIconClick}
			/>
			{showDropdown && (
				<Combobox
					className="w-[700px] "
					hideCaret
					hideEmptyPopup
					onSelect={(companyName) => setSelectedCompany(companyName)}
					data={jsonFile.map((company) => company.name)}
					placeholder="Search for a company"
				/>
			)}
		</div>
	);
};

export default AddWatchlistItemButton;
