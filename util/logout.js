import Router from "next/router";

export const logout = async () => {
  const url = "https://api.upstox.com/v2/logout";
  const token = localStorage.setItem("upstoxToken", "");
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.delete(url, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
    Router.push("/");
  }
};
