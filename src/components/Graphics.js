import React from "react";
import BarChart from "./BarChart";
import DataTable from "./DataTable";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";
function Graphics() {
  return (
    <div className="graphics">
      <div className="flex_chart_container">
        <BarChart />
        <DoughnutChart />
        <DataTable />
        <LineChart />
      </div>
    </div>
  );
}

export default Graphics;
