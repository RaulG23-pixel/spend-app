import React from "react";
import Sidebar from "../components/Sidebar";
import LineSavings from "../components/charts/savings/LineSavings";
import { useSelector } from "react-redux";

function Saves() {
  const user = useSelector((state) => state.value);

  if (user) {
    const { username } = user;
    return (
      <>
        <div className="app_container">
          <section className="main_container">
            <header>
              <h1 className="title_user">Savings</h1>
              <span className="subtitle">Here you can see all your saves</span>
            </header>
            <section className="savings">
              <div>
                <div>
                  <h2>This week</h2>
                  <LineSavings />
                </div>
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

export default Saves;
