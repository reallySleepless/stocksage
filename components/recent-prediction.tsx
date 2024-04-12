import React, { useDebugValue, useEffect, useState } from "react";
import jsonFile from "../DataFiles/NSE.json";
import { getExchangeStatus } from "../api/getExchangeStatus";
import { getHistoricalData } from "../api/historicalData";

interface Company {
	segment: string;
	marketQuotes: any[];
	name: string;
	isin: string;
	trading_symbol: string;
}

const RecentPrediction = ({ companyList }: { companyList: string[] }) => {
	const [companies, setCompanies] = useState<Company[]>([]);
	const [currentDate, setCurrentDate] = useState(new Date());
	const [TenYearBackDate, setTenYearBackDate] = useState(new Date());

	const interval = "day";
	let from_date_array = TenYearBackDate.toLocaleDateString("en-us", {
		timeZone: "Asia/Kolkata",
	})
		.split(",")[0]
		.split("/");

	let from_date = `${from_date_array[2]}-${from_date_array[0].padStart(
		2,
		"0"
	)}-${from_date_array[1].padStart(2, "0")}`;

	let to_date_array = currentDate
		.toLocaleDateString("en-us", {
			timeZone: "Asia/Kolkata",
		})
		.split(",")[0]
		.split("/");

	let to_date = `${to_date_array[2]}-${to_date_array[0].padStart(
		2,
		"0"
	)}-${to_date_array[1].padStart(2, "0")}`;

	useEffect(() => {
		const lastMarketStatus = async () => {
			const response = await getExchangeStatus({ exchange: "NSE" });
			setCurrentDate(new Date(parseInt(response.data.last_updated)));
			setTenYearBackDate(
				new Date(currentDate.setFullYear(currentDate.getFullYear() - 10))
			);
		};
		lastMarketStatus();
	}, []);

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
		const historicalData = async () => {
			companies.forEach(async (company) => {
				console.log("Company Inside for each:", company);
				const instrument_key = `NSE_EQ%7C${company?.isin}`;

				const response = await getHistoricalData({
					instrument_key: instrument_key,
					interval: interval,
					toDate: to_date,
					fromDate: from_date,
				});

				console.log(`Response: ${company?.name}`, response.data.candles);
			});
		};
		historicalData();
	}, [companies]);

	return (
		<>
			<div className="w-[54rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-[1.625rem]">
				<b className="h-[2.063rem] relative tracking-[0.03em] leading-[100%] inline-block mq450:text-[1.313rem] mq450:leading-[1.313rem]">
					Recent Predictions
				</b>
			</div>
			<div className="self-stretch h-[16rem] relative mq450:h-auto mq450:min-h-[256]">
				<div className="absolute top-[0rem] left-[0rem] w-[18.938rem] flex flex-col items-start justify-start gap-[2.25rem]">
					<div className="w-[13.875rem] flex flex-col items-start justify-start gap-[1.125rem]">
						<div className="flex flex-row items-start justify-end py-[0rem] pr-[0.313rem] pl-[2.563rem]">
							<b className="w-[11rem] relative leading-[100%] inline-block shrink-0 mq450:text-[1.188rem] mq450:leading-[1.188rem]">
								Company
							</b>
						</div>
						<div className="self-stretch flex flex-row items-start justify-start gap-[1.063rem]">
							<div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
								<img
									className="w-[1.813rem] h-[1.375rem] relative overflow-hidden shrink-0"
									loading="lazy"
									alt=""
									src="/teslamotors1-11.svg"
								/>
							</div>
							<div className="flex-1 relative leading-[100%] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
								Tesla, Inc.
							</div>
						</div>
					</div>
					<div className="w-[14.188rem] flex flex-row items-start justify-start py-[0rem] px-[0.313rem] box-border">
						<div className="flex-1 flex flex-row items-start justify-start gap-[1.063rem]">
							<div className="flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem]">
								<div className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 bg-[url('/391pxapple-logo-black-1@2x.png')] bg-cover bg-no-repeat bg-[top]">
									<img
										className="absolute top-[0rem] left-[0.188rem] w-[1.188rem] h-[1.5rem] object-cover hidden"
										alt=""
										src="/391pxapple-logo-black-1@2x.png"
									/>
									<img
										className="absolute top-[0rem] left-[0.188rem] w-[1.188rem] h-[1.5rem] object-cover hidden mix-blend-screen"
										alt=""
										src="/391pxapple-logo-black-2@2x.png"
									/>
								</div>
							</div>
							<div className="flex-1 relative leading-[100%] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
								Apple, Inc.
							</div>
						</div>
					</div>
					<div className="w-[16.063rem] flex flex-row items-start justify-start py-[0rem] px-[0.375rem] box-border">
						<div className="flex-1 flex flex-row items-start justify-start gap-[1rem]">
							<div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
								<img
									className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
									loading="lazy"
									alt=""
									src="/meta1-11.svg"
								/>
							</div>
							<div className="flex-1 relative leading-[100%] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
								Meta, Inc.
							</div>
						</div>
					</div>
					<div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.375rem]">
						<div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[1rem]">
							<div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
								<img
									className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
									loading="lazy"
									alt=""
									src="/nvidia-11.svg"
								/>
							</div>
							<div className="flex-1 relative leading-[100%] inline-block min-w-[5.875rem] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
								Nvidia, Inc.
							</div>
						</div>
					</div>
				</div>
				<div className="absolute top-[0rem] left-[14.75rem] w-[11rem] flex flex-col items-start justify-start gap-[1.063rem]">
					<b className="self-stretch relative leading-[100%] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
						Current Price
					</b>
					<div className="flex flex-row items-start justify-start pt-[0rem] px-[0.375rem] pb-[1.438rem]">
						<div className="relative leading-[100%] whitespace-pre-wrap mq450:text-[1.188rem] mq450:leading-[1.188rem]">
							8000 INR
						</div>
					</div>
					<div className="flex flex-row items-start justify-start pt-[0rem] px-[0.375rem] pb-[1.625rem]">
						<div className="relative leading-[1.188rem] whitespace-pre-wrap mq450:text-[1.188rem] mq450:leading-[1.188rem]">
							1200 INR
						</div>
					</div>
					<div className="flex flex-row items-start justify-start pt-[0rem] px-[0.375rem] pb-[1.625rem]">
						<div className="relative leading-[1.188rem] whitespace-pre-wrap z-[1] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
							300 INR
						</div>
					</div>
					<div className="flex flex-row items-start justify-start py-[0rem] px-[0.375rem]">
						<div className="relative leading-[1.188rem] whitespace-pre-wrap z-[1] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
							6000 INR
						</div>
					</div>
				</div>
				<div className="absolute top-[0rem] left-[28.063rem] w-[24.875rem] flex flex-row items-start justify-start gap-[2.25rem]">
					<div className="flex flex-col items-start justify-start gap-[0.938rem]">
						<b className="relative leading-[100%] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
							Predicted Price
						</b>
						<div className="flex flex-row items-start justify-start pt-[0rem] px-[1rem] pb-[1.563rem]">
							<div className="relative leading-[100%] whitespace-pre-wrap mq450:text-[1.188rem] mq450:leading-[1.188rem]">
								8000 INR
							</div>
						</div>
						<div className="flex flex-row items-start justify-start pt-[0rem] px-[1rem] pb-[1.75rem]">
							<div className="relative leading-[1.188rem] whitespace-pre-wrap mq450:text-[1.188rem] mq450:leading-[1.188rem]">
								1200 INR
							</div>
						</div>
						<div className="flex flex-row items-start justify-start pt-[0rem] px-[1rem] pb-[1.75rem]">
							<div className="relative leading-[1.188rem] whitespace-pre-wrap mq450:text-[1.188rem] mq450:leading-[1.188rem]">
								300 INR
							</div>
						</div>
						<div className="flex flex-row items-start justify-start py-[0rem] px-[1rem]">
							<div className="relative leading-[1.188rem] whitespace-pre-wrap mq450:text-[1.188rem] mq450:leading-[1.188rem]">
								6000 INR
							</div>
						</div>
					</div>
					<div className="flex-1 flex flex-col items-start justify-start gap-[2.625rem]">
						<div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
							<b className="self-stretch relative leading-[100%] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
								Previous Price
							</b>
							<div className="flex flex-row items-start justify-start py-[0rem] px-[1.063rem]">
								<div className="relative leading-[100%] whitespace-pre-wrap mq450:text-[1.188rem] mq450:leading-[1.188rem]">
									8000 INR
								</div>
							</div>
						</div>
						<div className="flex flex-row items-start justify-start py-[0rem] px-[1.063rem]">
							<div className="relative leading-[1.188rem] whitespace-pre-wrap mq450:text-[1.188rem] mq450:leading-[1.188rem]">
								1200 INR
							</div>
						</div>
						<div className="flex flex-row items-start justify-start py-[0rem] px-[1.063rem]">
							<div className="relative leading-[1.188rem] whitespace-pre-wrap mq450:text-[1.188rem] mq450:leading-[1.188rem]">
								300 INR
							</div>
						</div>
						<div className="flex flex-row items-start justify-start py-[0rem] px-[1.063rem]">
							<div className="relative leading-[1.188rem] whitespace-pre-wrap mq450:text-[1.188rem] mq450:leading-[1.188rem]">
								6000 INR
							</div>
						</div>
					</div>
				</div>
				<div className="absolute top-[1.875rem] left-[56.938rem] flex flex-col items-start justify-start gap-[1.563rem]">
					<img
						className="w-[2.363rem] h-[2.188rem] relative object-cover"
						loading="lazy"
						alt=""
						src="/analytics-886253-1@2x.png"
					/>
					<img
						className="w-[2.188rem] h-[2.188rem] relative object-contain"
						loading="lazy"
						alt=""
						src="/analytics-886259-1@2x.png"
					/>
					<div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.438rem]">
						<img
							className="h-[2.188rem] w-[2.363rem] relative object-cover"
							loading="lazy"
							alt=""
							src="/analytics-886253-1@2x.png"
						/>
					</div>
					<img
						className="w-[2.363rem] h-[2.188rem] relative object-cover"
						loading="lazy"
						alt=""
						src="/analytics-886253-1@2x.png"
					/>
				</div>
			</div>
		</>
	);
};

export default RecentPrediction;
