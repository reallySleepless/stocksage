import type { NextPage } from "next";
import jsonFile from "../DataFiles/NSE.json";
import React, { useState } from "react";
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";
import { json } from "stream/consumers";

const INRContainer: NextPage = () => {
	const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
	const [selectedCompany, setSelectedCompany] = useState("");

	const handleSelect = (companyName: string) => {
		setSelectedCompanies([...selectedCompanies, companyName]);
		setSelectedCompany("");
	};

	console.log(selectedCompanies);

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
							onSelect={handleSelect}
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
									<div className="relative text-[1.375rem] leading-[100%] font-plus-jakarta-sans text-white text-left z-[1] mq450:text-[1.125rem] mq450:leading-[1.125rem]">
										Predict
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
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
			</div>
		</section>
	);
};

export default INRContainer;
