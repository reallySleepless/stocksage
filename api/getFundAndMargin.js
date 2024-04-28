const axios = require("axios");

export const getFundAndMargin = async () => {
  const url = "https://api.upstox.com/v2/user/get-funds-and-margin?segment=SEC";
  const token = localStorage.getItem("upstoxToken");
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
