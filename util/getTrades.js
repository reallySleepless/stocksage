const axios = require("axios");

export const getTrades = async () => {
  const url = "https://api.upstox.com/v2/order/trades/get-trades-for-day";
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
