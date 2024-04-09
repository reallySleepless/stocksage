const axios = require("axios");

export const getHistoricalData = async ({
	instrument_key,
	interval,
	toDate,
	fromDate,
}) => {
	// const instrument_key = "NSE_EQ%7CINE692G01013";
	// const interval = "30minute";
	// const to_date = "2024-03-28";
	// const from_date = "2024-03-27";
	const url = `https://api.upstox.com/v2/historical-candle/${instrument_key}/${interval}/${toDate}/${fromDate}`;
	const headers = {
		Accept: "application/json",
	};

	try {
		const response = await axios.get(url, { headers });
		return response.data;
	} catch (error) {
		console.error(error);
		throw error; // Re-throwing the error to be caught by the caller
	}
};
