import React from "react";
import BarChart from "./charts/BarChart";
import DataTable from "./DataTable";
import DoughnutChart from "./charts/DoughnutChart";
import LineChart from "./charts/LineChart";
import "./css/charts.css";
function Graphics() {
  return (
    <div className="graphics">
      <div className="flex_chart_container">
        <BarChart />
        <DoughnutChart />
        <DataTable records={[]} />
        <LineChart />
      </div>
    </div>
  );
}

export default Graphics;
