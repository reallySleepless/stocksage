const axios = require("axios");

export const getExchangeStatus = async ({ exchange }) => {
  const token = localStorage.getItem("upstoxToken");
  const url = `https://api.upstox.com/v2/market/status/${exchange}`;
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throwing the error to be caught by the caller
  }
};
