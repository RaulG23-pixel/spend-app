import React from "react";

function Counters() {
  return (
    <div className="counters">
      <div className="counter counter_1">
        <div className="icon">
          <i className="fas fa-wallet"></i>
        </div>
        <div className="counter_data">
          <span className="counter_title">$1334</span>
          <span className="counter_subtitle">Balance</span>
        </div>
      </div>
      <div className="counter counter_2">
        <div className="icon">
          <i className="fas fa-coins"></i>
        </div>
        <div className="counter_data">
          <span className="counter_title">10</span>
          <span className="counter_subtitle">Spents</span>
        </div>
      </div>
      <div className="counter counter_3">
        <div className="icon">
          <i className="fas fa-piggy-bank"></i>
        </div>
        <div className="counter_data">
          <span className="counter_title">10</span>
          <span className="counter_subtitle">Savings</span>
        </div>
      </div>
      <div className="counter counter_4">
        <div className="icon">
          <i className="fas fa-list-alt"></i>
        </div>
        <div className="counter_data">
          <span className="counter_title">5</span>
          <span className="counter_subtitle">Proyects</span>
        </div>
      </div>
    </div>
  );
}

export default Counters;
