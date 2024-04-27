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
import PredictionChartJS from "./predictionChartJS";

const RecentPrediction = ({
  companyList,
}: {
  companyList: predictedCompanyInterface[];
}) => {
  const [isToggled, setIsToggled] = useState<[boolean, number]>([false, 0]);
  const handleClick = (index: number) => {
    if (isToggled[0] && isToggled[1] === index) {
      setIsToggled([false, index]);
      return;
    }
    setIsToggled([true, index]);
  };

  return (
    <>
      <div className="w-[54rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-[1.625rem]">
        <b className="h-[2.063rem] relative tracking-[0.03em] leading-[100%] inline-block mq450:text-[1.313rem] mq450:leading-[1.313rem]">
          Recent Predictions
        </b>
      </div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Company</TableColumn>
          <TableColumn>Current Price</TableColumn>
          <TableColumn>Predicted Price</TableColumn>
          <TableColumn>Predicted Date</TableColumn>
          <TableColumn>Graph</TableColumn>
        </TableHeader>
        <TableBody>
          {companyList.map((company, index) => (
            <TableRow key={index}>
              <TableCell>{company.companyName}</TableCell>
              <TableCell>{company.currentPrice}</TableCell>
              <TableCell>{company.predictedPrice.toFixed(2)}</TableCell>
              <TableCell>
                {company.dateWhenPredicted.toLocaleDateString()}
              </TableCell>
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
