import axios from "axios";
import React from "react";

const getNews = async () => {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API;
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`;
  const res = await axios.get(apiUrl);
  return res.data;
};

export default getNews;
