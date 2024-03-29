const axios = require("axios");

export const getProfile = async () => {
	const url = "https://api.upstox.com/v2/user/profile";
	const token = process.env.ACCESS_TOKEN;
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
