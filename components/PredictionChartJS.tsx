import Chart from "chart.js/auto";
import { ScriptableContext } from "chart.js";
import { useRef, useEffect, useState } from "react";
import { predictedCompanyInterface } from "./i-n-r-container";

const PredictionChartJS = ({
  company,
}: {
  company: predictedCompanyInterface;
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const [Xvalue, setXvalue] = useState<any>([]);
  const [Yvalue, setYvalue] = useState<any>([]);

  console.log("Company", company);

  useEffect(() => {
    const predictedDate = new Date(company.dateWhenPredicted);
    const dateArray = [];
    dateArray.push(predictedDate.toLocaleDateString());
    for (let i = 1; i < 30; i++) {
      const date = new Date(predictedDate.setDate(predictedDate.getDate() + 1));
      dateArray.push(date.toLocaleDateString());
    }
    setYvalue(company.predictionData);
    setXvalue(dateArray);
  }, [company]);

  useEffect(() => {
    if (chartRef.current) {
      if ((chartRef.current as any).chart) {
        (chartRef.current as any).chart.destroy();
      }
      const ctx = chartRef.current.getContext("2d");
      let newChart;
      if (ctx) {
        newChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: Xvalue,
            datasets: [
              {
                tension: 0.2,
                label: company.companyName,
                data: Yvalue,
                pointRadius: 1,
                pointHoverRadius: 2,
                backgroundColor: (context: ScriptableContext<"line">) => {
                  const ctx = context.chart.ctx;
                  const gradient = ctx.createLinearGradient(0, 0, 0, 600);
                  gradient.addColorStop(0, "#aaedfb");
                  gradient.addColorStop(1, "#fff");
                  return gradient;
                }, //background gradient color
                borderColor: "#b5cbfd", //line color
                borderWidth: 1,
                fill: true,
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                display: true,
              },
            },
            responsive: true,
            scales: {
              y: {
                beginAtZero: false,
                position: "right",
              },

              x: {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 5,
                },
              },
            },
          },
        });
      }
      (chartRef.current as any).chart = newChart;
    }
  }, [Xvalue, Yvalue]);

  return (
    <div className="w-full h-full">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default PredictionChartJS;
