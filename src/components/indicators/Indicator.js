import React from "react";
import PieChart from "../charts/PieChart";
import "./style.css";

function Indicator() {
  return (
    <div className="spends__graphic_container">
      <PieChart />
    </div>
  );
}

export default Indicator;
