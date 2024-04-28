import Chart from "chart.js/auto";
import { ScriptableContext } from "chart.js";
import { useRef, useEffect, useState } from "react";
import { getHistoricalData } from "../api/historicalData";
import { getExchangeStatus } from "../api/getExchangeStatus";

const intervalObj = {
	"1D": "1minute",
	"5D": "1minute",
	"1M": "30minute",
	"6M": "day",
	"1Y": "day",
	"5Y": "week",
};

const settingPrevDate = (date: Date, interval: string) => {
	let prevDate = new Date(date);
	if (interval === "1D") {
		prevDate.setDate(prevDate.getDate() - 1);
	}
	if (interval === "5D") {
		prevDate.setDate(prevDate.getDate() - 5);
	}
	if (interval === "1M") {
		prevDate.setMonth(prevDate.getMonth() - 1);
	}
	if (interval === "6M") {
		prevDate.setMonth(prevDate.getMonth() - 6);
	}
	if (interval === "1Y") {
		prevDate.setFullYear(prevDate.getFullYear() - 1);
	}
	if (interval === "5Y") {
		prevDate.setFullYear(prevDate.getFullYear() - 5);
	}
	let prevDateArray = prevDate
		.toLocaleDateString("en-us", {
			timeZone: "Asia/Kolkata",
		})
		.split(",")[0]
		.split("/");
	let prevDateNew = `${prevDateArray[2]}-${prevDateArray[0].padStart(
		2,
		"0"
	)}-${prevDateArray[1].padStart(2, "0")}`;
	return prevDateNew;
};

const ChartJS = ({ isin, intOpt }: { isin: string; intOpt: string }) => {
	const chartRef = useRef<HTMLCanvasElement>(null);
	const [historicalData, setHistoricalData] = useState<any>([]);
	const [Xvalue, setXvalue] = useState<any>([]);
	const [Yvalue, setYvalue] = useState<any>([]);
	const [currentDate, setCurrentDate] = useState<string>("2024-04-05");
	const [prevDate, setPrevDate] = useState<string>("2024-04-05");

	// const isin = "INE814H01011";
	// const intOpt = "1D";
	const interval = intervalObj[intOpt as keyof typeof intervalObj];

	useEffect(() => {
		const lastMarketStatus = async () => {
			const res = await getExchangeStatus({ exchange: "NSE" });
			let resolvedResponse = await Promise.resolve(res);
			if (resolvedResponse) {
				let date = resolvedResponse["data"]["last_updated"];
				date = new Date(parseInt(date)).toLocaleString("en-us", {
					timeZone: "Asia/Kolkata",
				});

				let currentDateArray = date.split(",")[0].split("/");
				setCurrentDate(
					`${currentDateArray[2]}-${currentDateArray[0].padStart(
						2,
						"0"
					)}-${currentDateArray[1].padStart(2, "0")}`
				);

				setPrevDate(settingPrevDate(new Date(date), intOpt));

			}
			return resolvedResponse;
		};

		lastMarketStatus();
	}, [isin, intOpt]);


	useEffect(() => {
		const prevYearData = async () => {
			const response = await getHistoricalData({
				instrument_key: `NSE_EQ%7C${isin}`,
				interval: interval,
				toDate: currentDate,
				fromDate: prevDate,
			});
			let resolvedResponse = await Promise.resolve(response);
			setHistoricalData(resolvedResponse);
			if (resolvedResponse) {
				const newXValues: string[] = [];
				const newYValues: any[] = [];
				resolvedResponse?.["data"]?.["candles"]?.forEach((data: any) => {
					const dateTime = new Date(data[0]);
					const time = dateTime.toLocaleTimeString();
					const date = dateTime.toLocaleDateString();
					if (intOpt === "1D") {
						newXValues.push(time);
					} else {
						newXValues.push(date);
					}
					newYValues.push(data[1]);
				});

				setXvalue(newXValues.reverse());
				setYvalue(newYValues.reverse());
			}

			return resolvedResponse;
		};

		prevYearData();
	}, [currentDate, prevDate, intOpt, isin]);

	useEffect(() => {
		if (chartRef.current) {
			if ((chartRef.current as any).chart) {
				(chartRef.current as any).chart.destroy();
			}
			const ctx = chartRef.current.getContext("2d");
			let newChart;
			if (ctx) {
				newChart = new Chart(ctx, {
					type: "line",
					data: {
						labels: Xvalue,
						datasets: [
							{
								tension: 0.2,
								label: "Stock Price",
								data: Yvalue,
								pointRadius: 1,
								pointHoverRadius: 2,
								backgroundColor: (context: ScriptableContext<"line">) => {
									const ctx = context.chart.ctx;
									const gradient = ctx.createLinearGradient(0, 0, 0, 600);
									gradient.addColorStop(0, "#aaedfb");
									gradient.addColorStop(1, "#fff");
									return gradient;
								}, //background gradient color
								borderColor: "#b5cbfd", //line color
								borderWidth: 1,
								fill: true,
							},
						],
					},
					options: {
						plugins: {
							legend: {
								display: false,
							},
						},
						responsive: true,
						scales: {
							y: {
								beginAtZero: false,
								position: "right",
							},

							x: {
								ticks: {
									autoSkip: true,
									maxTicksLimit: 5,
								},
							},
						},
					},
				});
			}
			(chartRef.current as any).chart = newChart;
		}
	}, [Xvalue, Yvalue]);

	return (
		<div className="w-full h-full">
			<canvas ref={chartRef}></canvas>
		</div>
	);
};

export default ChartJS;
