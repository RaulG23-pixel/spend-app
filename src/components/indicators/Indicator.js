import React from "react";
import PieChart from "../charts/PieChart";
import "./style.css";

function Indicator() {
  return (
    <div className="spends__graphic_container">
      <h1>Spends graphic</h1>
      <PieChart />
    </div>
  );
}

export default Indicator;
