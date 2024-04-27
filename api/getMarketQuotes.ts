const axios = require("axios");

export const getMarketQuotes = async ({ isin }: { isin: string }) => {
  const url = `https://api.upstox.com/v2/market-quote/quotes?instrument_key=NSE_EQ%7C${isin}`;
  const token = localStorage.getItem("upstoxToken");
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.get(url, { headers });
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throwing the error to be caught by the caller
  }
};
