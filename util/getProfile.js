const axios = require("axios");

export const getProfile = async () => {
  const url = "https://api.upstox.com/v2/user/profile";
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
