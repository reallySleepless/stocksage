const axios = require("axios");

export const getHistoricalData = async () => {
	const instrument_key = "NSE_EQ%7CINE692G01013";
	const interval = "30minute";
	const to_date = "2024-03-28";
	const from_date = "2024-03-27";
	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url: `https://api.upstox.com/v2/historical-candle/${instrument_key}/${interval}/${to_date}/${from_date}`,
		// url: "https://api.upstox.com/v2/historical-candle/intraday/NSE_EQ%7CINE848E01016/1minute",
		headers: {
			Accept: "application/json",
		},
	};

	axios(config)
		.then((response) => {
			console.log(JSON.stringify(response.data));
		})
		.catch((error) => {
			console.log(error);
		});
};
