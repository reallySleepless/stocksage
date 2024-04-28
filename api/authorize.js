import axios from "axios";

let config = {
	method: "get",
	maxBodyLength: Infinity,
	url: "https://api.upstox.com/v2/login/authorization/dialog",
	headers: {},
};

axios(config)
	.then((response) => {
		console.log(JSON.stringify(response.data));
	})
	.catch((error) => {
		console.log(error);
	});
