const axios = require("axios");
import Router from "next/router";

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
    console.log(error);
    Router.push("/login");
  }
};
