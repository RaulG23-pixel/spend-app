import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { getAccessToken } from "../utils/utils";
import { getUser } from "../services/userService";
import { useSelector } from "react-redux";

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
                <div>a</div>
                <div>b</div>
                <div>c</div>
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
