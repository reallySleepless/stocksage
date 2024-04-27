const axios = require("axios");

export const getToken = async (upstoxCode) => {
  const url = "https://api.upstox.com/v2/login/authorization/token";
  const headers = {
    accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const data = {
    code: upstoxCode,
    client_id: process.env.NEXT_PUBLIC_API_KEY,
    client_secret: process.env.NEXT_PUBLIC_API_SECRET,
    redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URL,
    grant_type: "authorization_code",
  };

  try {
    const response = await axios.post(url, new URLSearchParams(data), {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throwing the error to be caught by the caller
  }

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
