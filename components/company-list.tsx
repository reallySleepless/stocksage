import WatchlistItem from "./watchlist-item";
import jsonFile from "../DataFiles/NSE.json";
import { useEffect, useState } from "react";
import { getMarketQuotes } from "../api/getMarketQuotes";

const CompanyList = ({ companyList }: { companyList: string[] }) => {
	const [companyListDetails, setcompanyListDetails] = useState<
		(
			| { segment: string; name: string; isin: string; trading_symbol: string }
			| undefined
		)[]
	>([]);

	const findCompanyDetails = (
		companyNames: string[]
	): (
		| { segment: string; name: string; isin: string; trading_symbol: string }
		| undefined
	)[] => {
		const companyDetailsArray = companyNames.map((name) => {
			const foundItem = jsonFile.find((item) => item.name === name);
			return foundItem;
		});
		return companyDetailsArray.filter(Boolean);
	};

	useEffect(() => {
		companyList &&
			companyList.length > 0 &&
			setcompanyListDetails(findCompanyDetails(companyList));
	}, [companyList]);

	console.log(companyListDetails);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getMarketQuotes({ isin: "INE192A01025" }); 
				console.log("Market quotes data:", data);
			} catch (error) {
				console.error("Error fetching market quotes:", error);
			}
		};

		fetchData(); // Call the async function
	}, []);

	return (
		<div className="self-stretch overflow-hidden shrink-0 flex flex-col items-start justify-start text-left text-[0.75rem] text-darkslateblue-100 font-actor mq450:h-auto">
			{companyListDetails.map((company) => {
				//Error over here how to call the upstox api
				// const companyDetails =
				// 	company && getMarketQuotes({ isin: company.isin });
				let companyDetails = null;
				console.log("Company Details", company?.isin);
				if (company) {
					companyDetails = async () =>
						await getMarketQuotes({ isin: company.isin });
					let answer = companyDetails();
					console.log("Company Details", answer);
				}
				return (
					<WatchlistItem
						cLogo="/amazonicon1-1.svg"
						cName={company?.name}
						cSymbol={company?.trading_symbol}
						cValue="$102.24"
						continueNode={+0.59}
					/>
				);
			})}

			<WatchlistItem
				cLogo="/amazonicon1-1.svg"
				cName="Amazon.com, Inc."
				cSymbol="AMZN"
				cValue="$102.24"
				continueNode={+0.59}
			/>
			<div className="self-stretch h-[1.688rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.688rem] box-border mt-[-0.687rem]">
				<div className="h-[0.063rem] flex-1 relative box-border border-t-[1px] border-solid border-royalblue-100" />
			</div>
			<WatchlistItem
				cLogo="/cocacola6-1.svg"
				cName="Coca-Cola Co"
				cSymbol="KO"
				whileLoopNodeMarginTop="-0.687rem"
				cValue="$60.49"
				continueNode={-0.32}
			/>
			<div className="self-stretch h-[1.688rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.688rem] box-border mt-[-0.687rem]">
				<div className="h-[0.063rem] flex-1 relative box-border border-t-[1px] border-solid border-royalblue-100" />
			</div>
			<WatchlistItem
				cLogo="/bmw-1.svg"
				cName="Bayerische Motoren Werke AG"
				cSymbol="BMW"
				whileLoopNodeMarginTop="-0.687rem"
				cValue="$92.94"
				continueNode={+0.59}
			/>
			<div className="self-stretch h-[1.688rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.688rem] box-border mt-[-0.687rem]">
				<div className="h-[0.063rem] flex-1 relative box-border border-t-[1px] border-solid border-royalblue-100" />
			</div>
			<WatchlistItem
				cLogo="/microsoft-1.svg"
				cName="Microsoft Corp"
				cSymbol="MSFT"
				whileLoopNodeMarginTop="-0.687rem"
				cValue="$248.16"
				continueNode={+0.59}
			/>
			<div className="self-stretch h-[1.688rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.688rem] box-border mt-[-0.687rem]">
				<div className="h-[0.063rem] flex-1 relative box-border border-t-[1px] border-solid border-royalblue-100" />
			</div>
			<WatchlistItem
				cLogo="/ups-1.svg"
				cName="United Parcel Service, Inc."
				cSymbol="UPS"
				whileLoopNodeMarginTop="-0.687rem"
				cValue="$182.09"
				continueNode={+0.59}
			/>
			<div className="self-stretch h-[1.688rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] box-border mt-[-0.687rem]">
				<div className="h-[0.063rem] flex-1 relative box-border border-t-[1px] border-solid border-royalblue-100" />
			</div>
			<WatchlistItem
				cLogo="/amazonicon1-1.svg"
				cName="Amazon.com, Inc."
				cSymbol="AMZN"
				cValue="$102.24"
				continueNode={+0.59}
			/>
			<div className="self-stretch h-[1.688rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.688rem] box-border mt-[-0.687rem]">
				<div className="h-[0.063rem] flex-1 relative box-border border-t-[1px] border-solid border-royalblue-100" />
			</div>
			<WatchlistItem
				cLogo="/cocacola6-1.svg"
				cName="Coca-Cola Co"
				cSymbol="KO"
				whileLoopNodeMarginTop="-0.687rem"
				cValue="$60.49"
				continueNode={-0.32}
			/>
			<div className="self-stretch h-[1.688rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.688rem] box-border mt-[-0.687rem]">
				<div className="h-[0.063rem] flex-1 relative box-border border-t-[1px] border-solid border-royalblue-100" />
			</div>
			<WatchlistItem
				cLogo="/bmw-1.svg"
				cName="Bayerische Motoren Werke AG"
				cSymbol="BMW"
				whileLoopNodeMarginTop="-0.687rem"
				cValue="$92.94"
				continueNode={+0.59}
			/>
			<div className="self-stretch h-[1.688rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.688rem] box-border mt-[-0.687rem]">
				<div className="h-[0.063rem] flex-1 relative box-border border-t-[1px] border-solid border-royalblue-100" />
			</div>
			<WatchlistItem
				cLogo="/microsoft-1.svg"
				cName="Microsoft Corp"
				cSymbol="MSFT"
				whileLoopNodeMarginTop="-0.687rem"
				cValue="$248.16"
				continueNode={+0.59}
			/>
			<div className="self-stretch h-[1.688rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.688rem] box-border mt-[-0.687rem]">
				<div className="h-[0.063rem] flex-1 relative box-border border-t-[1px] border-solid border-royalblue-100" />
			</div>
			<WatchlistItem
				cLogo="/ups-1.svg"
				cName="United Parcel Service, Inc."
				cSymbol="UPS"
				whileLoopNodeMarginTop="-0.687rem"
				cValue="$182.09"
				continueNode={+0.59}
			/>
			<div className="self-stretch h-[1.688rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.688rem] box-border mt-[-0.687rem]">
				<div className="h-[0.063rem] flex-1 relative box-border border-t-[1px] border-solid border-royalblue-100" />
			</div>
		</div>
	);
};

export default CompanyList;
