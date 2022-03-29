import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart() {
  const windowWidth = window.innerWidth;
  let barChartHeight = windowWidth < 1025 ? 170 : 135;

  return (
    <div className="bar_chart chart">
      <>
        <h3>Savings graphic</h3>
        <Bar
          data={{
            labels: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            datasets: [
              {
                label: "Ps4",
                data: [100, 200, 400, 500, 600, 750, 800],
                backgroundColor: "rgba(53, 179, 53,0.9)",
              },
              {
                label: "Nike jordan",
                data: [150, 200, 300, 200, 400, 750, 800],
                backgroundColor: "rgba(255, 213, 13,0.9)",
              },
              {
                label: "Smartphone",
                data: [150, 200, 70, 180, 240, 500, 600],
                backgroundColor: "rgba(235, 64, 52,0.9)",
              },
              {
                label: "Webcam",
                data: [150, 100, 220, 318, 415, 726, 190],
                backgroundColor: "rgba(58, 199, 175,0.9)",
              },
            ],
          }}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            maintainAspectRatio: true,
            responsive: true,
          }}
          height={barChartHeight}
        />
      </>
    </div>
  );
}

export default BarChart;
