import React from "react";
import { Line } from "react-chartjs-2";

function LineSavings() {
  return (
    <div className="line__chart_savings">
      <Line
        data={{
          labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Tursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          datasets: [
            {
              label: "Ruffles",
              data: [0, 2, 8, 12, 8, 17, 30],
              backgroundColor: "white",
              borderColor: "#02b6e3",
              tension: 0.4,
            },
            {
              label: "Doritos",
              data: [0, 5, 9, 16, 21, 28, 32],
              backgroundColor: "white",
              borderColor: "#04cc39",
              tension: 0.4,
            },
            {
              label: "PS4",
              data: [0, 12, 18, 14, 22, 29, 34, 42],
              backgroundColor: "white",
              borderColor: "#e3df02",
              tension: 0.4,
            },
            {
              label: "PC Gamer",
              data: [0, 12, 15, 17, 28, 32, 37, 44],
              backgroundColor: "white",
              borderColor: "#e30273",
              tension: 0.4,
            },
          ],
        }}
        options={{
          maintainAspectRatio: true,
          responsive: true,
        }}
        height={160}
      />
    </div>
  );
}

export default LineSavings;
