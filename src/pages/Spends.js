import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { getAccessToken } from "../utils/utils";
import { getUser } from "../services/userService";
import { useSelector } from "react-redux";
import Indicator from "../components/indicators/Indicator";

function CreateSpend() {
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
            <section>
              <div className="spend__indicators">
                <Indicator />
                <article className="percentage_displayer">
                  <h4>Data</h4>
                  <ul className="spend__dataList">
                    <li>
                      <span className="dataList_color_reference dataList_yellow"></span>{" "}
                      <span className="data_percentage">1%</span>
                    </li>
                    <li>
                      <span className="dataList_color_reference dataList_pink"></span>
                      <span className="data_percentage">2%</span>
                    </li>
                    <li>
                      <span className="dataList_color_reference dataList_blue"></span>
                      <span className="data_percentage">3%</span>
                    </li>
                  </ul>
                </article>
              </div>
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
