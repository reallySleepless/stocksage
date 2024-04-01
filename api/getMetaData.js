const axios = require("axios");

export const getMetaData = async () => {
	const url = "https://api.upstox.com/v2/trade/profit-loss/metadata";
	const token = process.env.ACCESS_TOKEN;
	const headers = {
		Accept: "application/json",
		Authorization: `Bearer ${token}`,
	};

	const params = {
		from_date: "05-11-2023",
		to_date: "19-12-2023",
		segment: "EQ",
		financial_year: "2324",
	};

	axios
		.get(url, { headers, params })
		.then((response) => {
			console.log(response.status);
			console.log(response.data);
		})
		.catch((error) => {
			console.error("Error:", error.message || error);
		});
};
