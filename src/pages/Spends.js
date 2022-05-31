import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import Indicator from "../components/indicators/Indicator";
import ReactAnime from "react-animejs";

function CreateSpend() {
  const { Anime } = ReactAnime;
  const user = useSelector((state) => state.value);

  if (user) {
    const { username } = user;

    return (
      <>
        <div className="app_container">
          <section className="main_container">
            <header>
              <h1 className="title_user">Spends</h1>
              <span className="subtitle">
                Here you can see all your current spends
              </span>
            </header>
            <section className="spend__graphic_section">
              <h2 className="indicator_title">Spends graphic</h2>
              <section className="spend__indicators">
                <Indicator />
                <article className="percentage_displayer">
                  <h4>Data</h4>
                  <ul className="spend__dataList">
                    <Anime
                      initial={[
                        {
                          targets: "#percentage1",
                          innerText: [0, 100],
                          easing: "linear",
                          round: true,
                          duration: 600,
                        },
                        {
                          targets: "#percentage2",
                          innerText: [0, 50],
                          easing: "linear",
                          round: true,
                          duration: 600,
                        },
                        {
                          targets: "#percentage3",
                          innerText: [0, 30],
                          easing: "linear",
                          round: true,
                          duration: 600,
                        },
                      ]}
                    >
                      <li>
                        <span className="dataList_color_reference dataList_yellow"></span>{" "}
                        <div>
                          <span className="dataList_title">Total</span>
                          <span className="data_percentage" id="percentage1">
                            80%
                          </span>
                        </div>
                      </li>
                      <li>
                        <span className="dataList_color_reference dataList_pink"></span>
                        <div>
                          <span className="dataList_title">Completed</span>
                          <span className="data_percentage" id="percentage2">
                            92%
                          </span>
                        </div>
                      </li>
                      <li>
                        <span className="dataList_color_reference dataList_blue"></span>
                        <div>
                          <span className="dataList_title">Incomplete</span>
                          <span className="data_percentage" id="percentage3">
                            73%
                          </span>
                        </div>
                      </li>
                    </Anime>
                  </ul>
                </article>
              </section>
            </section>
            <section className="dataTable_section">
              <h2>Hola</h2>
            </section>
          </section>
          <Sidebar user={username} />
        </div>
      </>
    );
  }
  return (
    <div className="loaderContainer">
      <div className="loader">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default CreateSpend;
