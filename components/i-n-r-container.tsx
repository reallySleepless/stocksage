import type { NextPage } from "next";
import jsonFile from "../DataFiles/NSE.json";
import React, { useState } from "react";
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";
import { json } from "stream/consumers";
import RecentPrediction from "./recent-prediction";

const INRContainer: NextPage = () => {
	const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
	const [selectedCompany, setSelectedCompany] = useState("");

	const handleSelect = (companyName: string) => {
		if (companyName && !selectedCompanies.includes(companyName)) {
			setSelectedCompanies([...selectedCompanies, companyName]);
		}
		setSelectedCompany("");
	};

	return (
		<section className="w-[107.575rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.5rem] text-black font-plus-jakarta-sans">
			<div className="w-[59.3rem] flex flex-col items-start justify-start gap-[1.813rem] max-w-full">
				<div className="w-[48.063rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[1.063rem] box-border max-w-full text-[2.813rem]">
					<h2 className="m-0 h-[3.438rem] relative text-inherit tracking-[0.03em] leading-[100%] font-bold font-inherit inline-block mq450:text-[1.688rem] mq450:leading-[1.688rem] mq950:text-[2.25rem] mq950:leading-[2.25rem]">
						Predict Stock Prices
					</h2>
				</div>
				<div className="w-[53.938rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[2.125rem] box-border max-w-full text-darkslateblue-100">
					<div className="w-[35.563rem] flex flex-col items-start justify-start gap-[1.688rem] max-w-full">
						<div className="self-stretch h-[2rem] relative leading-[100%] inline-block shrink-0 mq450:text-[1.188rem] mq450:leading-[1.188rem]">{`Enter a company name `}</div>
						<Combobox
							className="w-[700px]"
							hideCaret
							hideEmptyPopup
							onChange={(companyName) => setSelectedCompany(companyName)}
							data={jsonFile.map((company) => company.name)}
							placeholder="Search for a company"
						/>
						<div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[4.188rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
							<div className="flex flex-row items-start justify-start gap-[1.313rem] mq450:flex-wrap">
								<button className="cursor-pointer [border:none] pt-[0.813rem] px-[0.688rem] pb-[1.25rem] bg-aliceblue-100 rounded-3xs flex flex-row items-start justify-start hover:bg-lightgray">
									<div className="h-[3.438rem] w-[6.25rem] relative rounded-3xs bg-aliceblue-100 hidden" />
									<div className="relative text-[1.375rem] leading-[100%] font-plus-jakarta-sans text-black text-left z-[1] mq450:text-[1.125rem] mq450:leading-[1.125rem]">
										Cancel
									</div>
								</button>
								<button className="cursor-pointer [border:none] pt-[0.813rem] px-[0.688rem] pb-[1.25rem] bg-royalblue-100 rounded-3xs flex flex-row items-start justify-start hover:bg-dodgerblue">
									<div className="h-[3.438rem] w-[6.25rem] relative rounded-3xs bg-royalblue-100 hidden" />
									<div
										className="relative text-[1.375rem] leading-[100%] font-plus-jakarta-sans text-white text-left z-[1] mq450:text-[1.125rem] mq450:leading-[1.125rem]"
										onClick={() => handleSelect(selectedCompany)}
									>
										Predict
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
				<RecentPrediction companyList={selectedCompanies} />
			</div>
		</section>
	);
};

export default INRContainer;
