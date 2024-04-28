import axios from "axios";
import React from "react";

const getNews = async () => {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API;
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`;
  const res = await axios.get(apiUrl);
  // console.log(res.data);
  return res.data;
  // axios
  //   .get(apiUrl)
  //   .then((response) => {
  //     // Process the data here
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.error("There was a problem fetching the data:", error);
  //   });
};

export default getNews;
