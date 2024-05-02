const axios = require("axios");

export const getHoldings = async () => {
  const url = "https://api.upstox.com/v2/portfolio/long-term-holdings";
  const token = localStorage.getItem("upstoxToken");
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };

  try {
    if (!token) {
      console.error("Token not found");
      return;
    }
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throwing the error to be caught by the caller
  }
};
