import React from "react";
import ReactAnime from "react-animejs";

function Counters() {
  const { Anime } = ReactAnime;
  return (
    <Anime
      initial={[
        {
          targets: "#counter1",
          innerText: [0, 1334 + "$"],
          easing: "linear",
          round: true,
          duration: 800,
          delay: 400,
        },
        {
          targets: "#counter2",
          innerText: [0, 60],
          easing: "linear",
          round: true,
          duration: 800,
        },
        {
          targets: "#counter3",
          innerText: [0, 45],
          easing: "linear",
          round: true,
          duration: 800,
        },
        {
          targets: "#counter4",
          innerText: [0, 80],
          easing: "linear",
          round: true,
          duration: 800,
        },
      ]}
    >
      <div className="counters">
        <div className="counter counter_1">
          <div className="icon">
            <i className="fas fa-wallet"></i>
          </div>
          <div className="counter_data">
            <span className="counter_title" id="counter1">
              1334<span>$</span>
            </span>
            <span className="counter_subtitle">Balance</span>
          </div>
        </div>
        <div className="counter counter_2">
          <div className="icon">
            <i className="fas fa-coins"></i>
          </div>
          <div className="counter_data">
            <span className="counter_title" id="counter2">
              10
            </span>
            <span className="counter_subtitle">Spents</span>
          </div>
        </div>
        <div className="counter counter_3">
          <div className="icon">
            <i className="fas fa-piggy-bank"></i>
          </div>
          <div className="counter_data">
            <span className="counter_title" id="counter3">
              10
            </span>
            <span className="counter_subtitle">Savings</span>
          </div>
        </div>
        <div className="counter counter_4">
          <div className="icon">
            <i className="fas fa-list-alt"></i>
          </div>
          <div className="counter_data">
            <span className="counter_title" id="counter4">
              5
            </span>
            <span className="counter_subtitle">Proyects</span>
          </div>
        </div>
      </div>
    </Anime>
  );
}

export default Counters;
