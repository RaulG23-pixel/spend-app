import React from "react";
import { Line } from "react-chartjs-2";
function LineChart() {
  const windowWidth = window.innerWidth;
  const lineChartHeight = windowWidth < 768 ? 200 : 166;
  return (
    <div className="line_chart chart">
      <>
        <h3>Overall progress</h3>
        <Line
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
                label: "data 1",
                data: [0, 27, 5, 32, 17, 18, 45],
                backgroundColor: "white",
                borderColor: "dodgerblue",
                tension: 0.3,
              },
            ],
          }}
          options={{
            maintainAspectRatio: true,
            responsive: true,
          }}
          height={lineChartHeight}
        />
      </>
    </div>
  );
}

export default LineChart;
