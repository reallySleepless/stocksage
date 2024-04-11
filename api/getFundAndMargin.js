const axios = require("axios");

export const getFundAndMargin = async () => {
	const url = "https://api.upstox.com/v2/user/get-funds-and-margin?segment=SEC";
	const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
	const headers = {
		Accept: "application/json",
		Authorization: `Bearer ${token}`,
	};
	try {
		const response = await axios.get(url, { headers });
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
