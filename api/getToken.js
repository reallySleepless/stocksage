const axios = require("axios");

export const getToken = async () => {
	const url = "https://api.upstox.com/v2/login/authorization/token";
	const headers = {
		accept: "application/json",
		"Content-Type": "application/x-www-form-urlencoded",
	};

	const data = {
		code: process.env.CODE,
		client_id: process.env.API_KEY,
		client_secret: process.env.API_SECRET,
		redirect_uri: process.env.REDIRECT_URL,
		grant_type: "authorization_code",
	};

	axios
		.post(url, new URLSearchParams(data), { headers })
		.then((response) => {
			console.log(response.status);
			console.log(response.data);
		})
		.catch((error) => {
			console.error(error.response.status);
			console.error(error.response.data);
		});
};
