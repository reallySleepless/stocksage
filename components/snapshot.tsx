import { useEffect, useState } from "react";

export type SnapshotType = {
	companyName: string;
	prevCloseValue: number;
	openValue: number;
	dayLowValue: number;
	currentValue: number;
	dayHighValue: number;
	fiftyTwoWeekLowValue: number;
	fiftyTwoWeekHighValue: number;
	tradeTime: string;
	tradeDate: string;
};

const Snapshot = (props: SnapshotType) => {
	const {
		companyName,
		prevCloseValue,
		openValue,
		dayLowValue,
		dayHighValue,
		currentValue,
		fiftyTwoWeekLowValue,
		fiftyTwoWeekHighValue,
		tradeTime,
		tradeDate,
	} = props;

	const [dayDiff, setDayDiff] = useState<number>(
		((dayHighValue - currentValue) / (dayHighValue - dayLowValue)) * 100
	);

	const [weekDiff, setWeekDiff] = useState<number>(
		((fiftyTwoWeekHighValue - currentValue) /
			(fiftyTwoWeekHighValue - fiftyTwoWeekLowValue)) *
			100
	);

	useEffect(() => {
		setDayDiff(
			((dayHighValue - currentValue) / (dayHighValue - dayLowValue)) * 100
		);
		setWeekDiff(
			((fiftyTwoWeekHighValue - currentValue) /
				(fiftyTwoWeekHighValue - fiftyTwoWeekLowValue)) *
				100
		);
	}, [
		dayHighValue,
		dayLowValue,
		currentValue,
		fiftyTwoWeekHighValue,
		fiftyTwoWeekLowValue,
	]);


	return (
		<div className="self-stretch rounded-lg bg-whitesmoke flex flex-col items-start justify-start pt-[1.25rem] pb-[0.5rem] pr-[0.688rem] pl-[0.75rem] box-border relative gap-[1.25rem] min-h-[30.813rem] text-left text-[0.875rem] text-darkslateblue-100 font-actor">
			<div className="w-[16.094rem] flex flex-col items-start justify-start gap-[1rem] text-center">
				<div className="w-[3.563rem] relative inline-block">Snapshot</div>
				<h2 className="text-left">{companyName}</h2>
				<div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.469rem] text-left text-[0.75rem] text-cornflowerblue-100">
					<div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
						<div className="flex flex-col items-start justify-start gap-[0.25rem]">
							<div className="w-[4.375rem] relative capitalize inline-block">
								Prev Close
							</div>
							<div className="relative text-[1.25rem] text-darkslateblue-100 mq450:text-[1rem]">
								{prevCloseValue}
							</div>
						</div>
						<div className="flex flex-col items-start justify-start gap-[0.25rem]">
							<div className="w-[4.375rem] relative capitalize inline-block">
								Open
							</div>
							<div className="relative text-[1.25rem] text-darkslateblue-100 mq450:text-[1rem]">
								{openValue}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] pb-2">
				<div className="self-stretch flex flex-col items-start justify-start gap-[0.313rem]">
					<div className="w-[19.313rem] flex flex-row items-start justify-between relative gap-[1.25rem]">
						<div className="w-[4.375rem] flex flex-col items-start justify-start gap-[0.25rem]">
							<div className="relative capitalize">{dayLowValue}</div>
							<div className="self-stretch relative text-[0.75rem] capitalize text-cornflowerblue-100">
								Day Low
							</div>
						</div>
						<div className="flex flex-col items-end justify-start gap-[0.25rem] text-right">
							<div className="relative capitalize">{dayHighValue}</div>
							<div className="relative text-[0.75rem] capitalize text-cornflowerblue-100">
								Day High
							</div>
						</div>
						{dayDiff && (
							<>
								<div
									className={`h-[1.063rem] w-[0.188rem] absolute !m-[0] bottom-[-2.062rem] rounded-sm bg-darkslateblue-100 z-[1]`}
									style={{ right: `${dayDiff.toFixed(2)}%` }}
								/>
								<div
									className="absolute !m-[0] bottom-[-3.062rem] rounded-sm "
									style={{ right: `${(dayDiff - 4).toFixed(2)}%` }}
								>
									{currentValue}
								</div>
							</>
						)}
					</div>
					<div className="self-stretch h-[0.25rem] relative rounded-12xs bg-cornflowerblue-100" />
				</div>
			</div>
			<div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] pb-12">
				<div className="self-stretch flex flex-col items-start justify-start gap-[0.313rem]">
					<div className="w-[19.313rem] flex flex-row items-start justify-between relative gap-[1.25rem]">
						<div className="w-[4.375rem] flex flex-col items-start justify-start gap-[0.25rem]">
							<div className="relative capitalize">{fiftyTwoWeekLowValue}</div>
							<div className="self-stretch relative text-[0.75rem] capitalize text-cornflowerblue-100">
								52 week Low
							</div>
						</div>
						<div className="flex flex-col items-end justify-start gap-[0.25rem] text-right">
							<div className="relative capitalize">{fiftyTwoWeekHighValue}</div>
							<div className="relative text-[0.75rem] capitalize text-cornflowerblue-100">
								52 week High
							</div>
						</div>
						{dayDiff && (
							<>
								<div
									className={`h-[1.063rem] w-[0.188rem] absolute !m-[0] bottom-[-2.062rem] rounded-sm bg-darkslateblue-100 z-[1]`}
									style={{ right: `${weekDiff.toFixed(2)}%` }}
								/>
								<div
									className="absolute !m-[0] bottom-[-3.062rem] rounded-sm "
									style={{ right: `${(weekDiff - 4).toFixed(2)}%` }}
								>
									{currentValue}
								</div>
							</>
						)}
					</div>
					<div className="self-stretch h-[0.25rem] relative rounded-12xs bg-cornflowerblue-100" />
				</div>
			</div>

			<div className="w-[16.563rem] flex flex-row items-start justify-start py-[0rem] px-[0.563rem] box-border text-[0.75rem] text-cornflowerblue-100">
				<div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
					<div className="flex flex-col items-start justify-start gap-[0.25rem]">
						<div className="w-[4.375rem] relative capitalize inline-block">
							Trade Time
						</div>
						<div className="relative text-[1.25rem] text-darkslateblue-100 whitespace-nowrap mq450:text-[1rem]">
							{tradeTime}
						</div>
					</div>
					<div className="flex flex-col items-start justify-start gap-[0.25rem]">
						<div className="w-[4.375rem] relative capitalize inline-block">
							Trade Date
						</div>
						<div className="relative text-[1.25rem] text-darkslateblue-100 mq450:text-[1rem]">
							{tradeDate}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Snapshot;
