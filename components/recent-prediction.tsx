import React, { useState } from "react";
import { predictedCompanyInterface } from "./i-n-r-container";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import PredictionChartJS from "./PredictionChartJS";

const RecentPrediction = ({ companyList }: { companyList: any[] }) => {
  const [isToggled, setIsToggled] = useState<[boolean, number]>([false, 0]);
  const handleClick = (index: number) => {
    if (isToggled[0] && isToggled[1] === index) {
      setIsToggled([false, index]);
      return;
    }
    setIsToggled([true, index]);
  };

  // Wanted to sort the companyList based on the dateWhenPredicted in descending order but due to time constraints, I am unable to do so.
  companyList = companyList.sort((a, b) => {
    return (
      new Date(b.dateWhenPredicted).getTime() -
      new Date(a.dateWhenPredicted).getTime()
    );
  });
  return (
    <>
      <div className="w-[54rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-[1.625rem]">
        <b className="h-[2.063rem] relative tracking-[0.03em] leading-[100%] inline-block mq450:text-[1.313rem] mq450:leading-[1.313rem]">
          Recent Predictions
        </b>
      </div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn className="w-[40px]">Company</TableColumn>
          <TableColumn>Current Price</TableColumn>
          <TableColumn>Predicted Price</TableColumn>
          <TableColumn>Predicted Date</TableColumn>
          <TableColumn>Predicted Time</TableColumn>
          <TableColumn>Graph</TableColumn>
        </TableHeader>
        <TableBody>
          {companyList.map((company, index) => (
            <TableRow key={index}>
              <TableCell className="w-[40px]">{company.companyName}</TableCell>
              <TableCell>{company.currentPrice}</TableCell>
              <TableCell>{company.predictedPrice.toFixed(2)}</TableCell>
              <TableCell>{`${
                company.dateWhenPredicted.split("T")[0]
              }`}</TableCell>
              <TableCell>{`${
                company.dateWhenPredicted.split("T")[1].split(".")[0]
              }`}</TableCell>
              <TableCell>
                {company.predictedPrice < company.currentPrice ? (
                  <img
                    className="h-[2.188rem] w-[2.363rem] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/analytics-886253-1@2x.png"
                    onClick={() => handleClick(index)}
                  />
                ) : (
                  <img
                    className="w-[2.188rem] h-[2.188rem] relative object-contain"
                    loading="lazy"
                    alt=""
                    src="/analytics-886259-1@2x.png"
                    onClick={() => handleClick(index)}
                  />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isToggled[0] && (
        <PredictionChartJS company={companyList[isToggled[1]]} />
      )}
    </>
  );
};

export default RecentPrediction;
