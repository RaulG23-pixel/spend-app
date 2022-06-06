import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart() {
  const data = {
    labels: ["Completed", "Incomplete", "total"],
    datasets: [
      {
        label: "My First Dataset",
        data: [50, 30, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <Pie
      data={data}
      options={{
        radius: "98%",
        Response: true,
        autoPadding: false,
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      }}
    />
  );
}

export default PieChart;
