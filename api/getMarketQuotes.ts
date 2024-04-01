const axios = require("axios");

export const getMarketQuotes = async ({ isin }: { isin: string }) => {
	const url = `https://api.upstox.com/v2/market-quote/quotes?instrument_key=NSE_EQ%7C${isin}`;
	const headers = {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
	};

	axios
		.get(url, { headers })
		.then((response:any) => {
			console.log(response.data);
			return response.data;	
		})
		.catch((error:any) => {
			console.error(error);
		});
};
