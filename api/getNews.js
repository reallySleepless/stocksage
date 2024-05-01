import axios from "axios";
import React from "react";

const getNews = async () => {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API;
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`;
  const res = await axios.get(apiUrl);
  return res.data;
  // var requestOptions = {
  //   method: "GET",
  // };

  // var params = {
  //   api_token: "qcgs938rEYRRhVJl8iCIYdjNGjG9caSRMr2KMRHO",
  //   categories: "business,tech",
  //   language: "en",
  //   // search: "tata",
  //   limit: "10",
  // };

  // var esc = encodeURIComponent;
  // var query = Object.keys(params)
  //   .map(function (k) {
  //     return esc(k) + "=" + esc(params[k]);
  //   })
  //   .join("&");

  // fetch("https://api.thenewsapi.com/v1/news/all?" + query, requestOptions)
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log("error", error));
};

export default getNews;
