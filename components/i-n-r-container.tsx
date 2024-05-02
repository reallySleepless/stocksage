import type { NextPage } from "next";
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";
import { json } from "stream/consumers";
import RecentPrediction from "./recent-prediction";
import React, { useDebugValue, useEffect, useState } from "react";
import jsonFile from "../DataFiles/NSE.json";
import { getExchangeStatus } from "../util/getExchangeStatus";
import { getHistoricalData } from "../util/historicalData";
import axios from "axios";
import { getUserpredictions, createprediction } from "../util/prediction";
import { user } from "@nextui-org/react";

export interface predictedCompanyInterface {
  user_id: string | null | undefined;
  companyName: string | undefined;
  dateWhenPredicted: Date;
  currentPrice: number;
  predictedPrice: number;
  predictionData: number[];
}

const INRContainer: NextPage = () => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [TenYearBackDate, setTenYearBackDate] = useState(new Date());
  const [mongo_user_id, setMongoUserId] = useState<string | null | undefined>();
  const [selectedCompanies, setSelectedCompanies] = useState<any[]>([]); // Just for a timing being, will be removed later

  useEffect(() => {
    const mongo_user_id_temp = localStorage.getItem("mongo_user_id");
    setMongoUserId(mongo_user_id_temp);
    const getAllPrediction = async () => {
      const data = await getUserpredictions(mongo_user_id_temp);
      setSelectedCompanies(data);
    };
    getAllPrediction();
  }, []);

  const interval = "day";

  let from_date_array = TenYearBackDate.toLocaleDateString("en-us", {
    timeZone: "Asia/Kolkata",
  })
    .split(",")[0]
    .split("/");

  let from_date = `${from_date_array[2]}-${from_date_array[0].padStart(
    2,
    "0"
  )}-${from_date_array[1].padStart(2, "0")}`;

  let to_date_array = currentDate
    .toLocaleDateString("en-us", {
      timeZone: "Asia/Kolkata",
    })
    .split(",")[0]
    .split("/");

  let to_date = `${to_date_array[2]}-${to_date_array[0].padStart(
    2,
    "0"
  )}-${to_date_array[1].padStart(2, "0")}`;

  useEffect(() => {
    const lastMarketStatus = async () => {
      const response = await getExchangeStatus({ exchange: "NSE" });
      setCurrentDate(new Date(parseInt(response.data.last_updated)));
      setTenYearBackDate(
        new Date(currentDate.setFullYear(currentDate.getFullYear() - 10))
      );
    };
    lastMarketStatus();
  }, []);

  const futurePred = async (
    companyName: string | undefined,
    csvData: any,
    currentPrice: number
  ) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_PREDICT_URL}/predict`;
      const formData = new FormData();
      formData.append("file", csvData, `${companyName}.csv`);

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const prediction = response.data.extended_predictions;
      const predictedPrice = prediction[prediction.length - 1];
      const newPredictionData = prediction.map((value: number) => {
        const deviation = Math.random() * (0.05 - 0.005) + 0.005;
        return value + value * deviation;
      });

      const predictionObject = {
        user_id: mongo_user_id,
        companyName: companyName,
        dateWhenPredicted: new Date(),
        currentPrice: currentPrice,
        predictedPrice: predictedPrice,
        predictionData: newPredictionData,
      };

      const data = await createprediction(predictionObject);
      const data1 = await getUserpredictions(mongo_user_id);
      setSelectedCompanies(data1);

      // const index = selectedCompanies.findIndex(
      //   (item) => item.companyName === companyName
      // );

      // if (index !== -1) {
      //   selectedCompanies.splice(index, 1);
      // }
      // setSelectedCompanies((prev) => [...prev, predictionObject]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const convertToCSV = async (
    objArray: any,
    companyName: string | undefined
  ) => {
    let csv: any[] = [];
    let csvHeader = ["timestamp", "open", "high", "low", "close", "volume"];
    let currentPrice = objArray[0][4];
    csv.push(csvHeader.join(","));
    objArray.map((item: any) => {
      item.pop();
      item[0] = item[0].split("T")[0];
      csv.push(item.join(","));
    });
    const csvContent = csv.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    futurePred(companyName, blob, currentPrice);
  };

  const handleSelect = async () => {
    if (!selectedCompany) {
      return;
    }
    const companyData = jsonFile.find((item) => item.name === selectedCompany);
    const isin = companyData?.isin;
    const instrument_key = `NSE_EQ%7C${isin}`;
    const response = await getHistoricalData({
      instrument_key: instrument_key,
      interval: interval,
      toDate: to_date,
      fromDate: from_date,
    });
    convertToCSV(response.data.candles, companyData?.name);
  };

  return (
    <section className="w-[107.575rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.5rem] text-black font-plus-jakarta-sans">
      <div className="w-[59.3rem] flex flex-col items-start justify-start gap-[1.813rem] max-w-full">
        <div className="w-[48.063rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[1.063rem] box-border max-w-full text-[2.813rem]">
          <h2 className="m-0 h-[3.438rem] relative text-inherit tracking-[0.03em] leading-[100%] font-bold font-inherit inline-block mq450:text-[1.688rem] mq450:leading-[1.688rem] mq950:text-[2.25rem] mq950:leading-[2.25rem]">
            Predict Stock Prices
          </h2>
        </div>
        <div className="w-[53.938rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[2.125rem] box-border max-w-full text-darkslateblue-100">
          <div className="w-[35.563rem] flex flex-col items-start justify-start gap-[1.688rem] max-w-full">
            <div className="self-stretch h-[2rem] relative leading-[100%] inline-block shrink-0 mq450:text-[1.188rem] mq450:leading-[1.188rem]">{`Enter a company name `}</div>
            <Combobox
              className="w-[700px]"
              hideCaret
              hideEmptyPopup
              onChange={(companyName) => setSelectedCompany(companyName)}
              data={jsonFile.map((company) => company.name)}
              placeholder="Search for a company"
            />
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[4.188rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
              <div className="flex flex-row items-start justify-start gap-[1.313rem] mq450:flex-wrap">
                <button className="cursor-pointer [border:none] pt-[0.813rem] px-[0.688rem] pb-[1.25rem] bg-aliceblue-100 rounded-3xs flex flex-row items-start justify-start hover:bg-lightgray">
                  <div className="h-[3.438rem] w-[6.25rem] relative rounded-3xs bg-aliceblue-100 hidden" />
                  <div className="relative text-[1.375rem] leading-[100%] font-plus-jakarta-sans text-black text-left z-[1] mq450:text-[1.125rem] mq450:leading-[1.125rem]">
                    Cancel
                  </div>
                </button>
                <button className="cursor-pointer [border:none] pt-[0.813rem] px-[0.688rem] pb-[1.25rem] bg-royalblue-100 rounded-3xs flex flex-row items-start justify-start hover:bg-dodgerblue">
                  <div className="h-[3.438rem] w-[6.25rem] relative rounded-3xs bg-royalblue-100 hidden" />
                  <div
                    className="relative text-[1.375rem] leading-[100%] font-plus-jakarta-sans text-white text-left z-[1] mq450:text-[1.125rem] mq450:leading-[1.125rem]"
                    onClick={() => handleSelect()}
                  >
                    Predict
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <RecentPrediction companyList={selectedCompanies} />
      </div>
    </section>
  );
};

export default INRContainer;
