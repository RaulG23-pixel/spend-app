import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughtnutChart() {
  const windowWidth = window.innerWidth;
  const radius = windowWidth < 768 ? "60%" : "70%";
  let height;
  if (windowWidth >= 1024) {
    height = 100;
  } else if (windowWidth >= 600 && windowWidth < 1024) {
    height = 90;
  } else {
    height = 200;
  }
  return (
    <div className="doughnut_chart chart">
      <h3>Frecuent spents</h3>
      <Doughnut
        data={{
          labels: ["Gasto 1", "Gasto 2", "Gasto 3", "Gasto 4"],
          datasets: [
            {
              label: "My First Dataset",
              data: [300, 50, 100, 200],
              backgroundColor: [
                "rgba(255, 99, 132,0.9)",
                "rgba(54, 162, 235,0.9)",
                "rgba(255, 205, 86,0.9)",
                "rgba(252, 166, 7,0.9)",
              ],
              hoverOffset: 4,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          radius: "75%",
        }}
        height={2}
        width={20}
      />
    </div>
  );
}

export default DoughtnutChart;
