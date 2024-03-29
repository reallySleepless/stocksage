const axios = require("axios");

const url = "https://api.upstox.com/v2/login/authorization/token";
const headers = {
	accept: "application/json",
	"Content-Type": "application/x-www-form-urlencoded",
};

const data = {
	code: "dp3xEJ",
	client_id: "0be29efc-2ba4-41db-b6d0-88fe4d69451f",
	client_secret: "z0tizytyfc",
	redirect_uri: "https://127.0.0.1:5000/",
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
