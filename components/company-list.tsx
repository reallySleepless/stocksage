import WatchlistItem from "./watchlist-item";
import jsonFile from "../DataFiles/NSE.json";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getMarketQuotes } from "../api/getMarketQuotes";
import { getExchangeStatus } from "../api/getExchangeStatus";

interface Company {
	segment: string;
	marketQuotes: any[];
	name: string;
	isin: string;
	trading_symbol: string;
}

const CompanyList = ({
	companyList,
	setCompanyToDisplay,
}: {
	companyList: string[];
	setCompanyToDisplay: Dispatch<SetStateAction<any>>;
}) => {
	const [companies, setCompanies] = useState<Company[]>([]);
	const [marketQuotes, setMarketQuotes] = useState<any[]>([]);

	useEffect(() => {
		const fetchCompanies = async () => {
			const companiesData = companyList
				.map((name) => {
					const company = jsonFile.find((item) => item.name === name);
					return company;
				})
				.filter(Boolean) as Company[];

			setCompanies(companiesData);
		};

		fetchCompanies();
	}, [companyList]);

	useEffect(() => {
		const fetchMarketQuotesData = async () => {
			const uniqueCompanies = companies.filter(
				(company, index, self) =>
					index === self.findIndex((c) => c.name === company.name)
			);

			const marketQuotesData = await Promise.all(
				uniqueCompanies.map(async (company) => {
					try {
						const response = await getMarketQuotes({ isin: company.isin });
						return { ...response, company }; // Combining response with company details
					} catch (error) {
						console.error("Error fetching market quotes:", error);
						return null;
					}
				})
			);

			setMarketQuotes(marketQuotesData.filter(Boolean));
		};

		fetchMarketQuotesData();
	}, [companies]);

	return (
		<div className="self-stretch overflow-hidden shrink-0 flex flex-col items-start justify-start text-left text-[0.75rem] text-darkslateblue-100 font-actor mq450:h-auto">
			{marketQuotes.map((companyData, index) => (
				<>
					<WatchlistItem
						key={index}
						setCompanyToDisplay={setCompanyToDisplay}
						isin={companyData?.company?.isin}
						marketQuotes={companyData}
						// cLogo="/amazonicon1-1.svg"
						cName={companyData?.company?.name}
						cSymbol={companyData?.company?.trading_symbol}
						cValue={`₹${
							companyData?.data?.[
								`NSE_EQ:${companyData?.company?.trading_symbol}`
							]?.last_price
						}`}
						continueNode={
							companyData?.data?.[
								`NSE_EQ:${companyData?.company?.trading_symbol}`
							]?.net_change
						}
					/>
					<div className="self-stretch h-[1.688rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.688rem] box-border mt-[-0.687rem]">
						<div className="h-[0.063rem] flex-1 relative box-border border-t-[1px] border-solid border-royalblue-100" />
					</div>
				</>
			))}
		</div>
	);
};

export default CompanyList;
