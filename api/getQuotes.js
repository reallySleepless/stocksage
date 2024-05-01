import React from "react";
import axios from "axios";

export const getQuotes = async () => {
  const category = "business";
  const api_url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
  const apiKey = process.env.NEXT_PUBLIC_QUOTES_API;

  try {
    const response = await axios.get(api_url, {
      headers: {
        "X-Api-Key": apiKey,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
