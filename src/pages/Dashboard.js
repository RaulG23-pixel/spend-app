import React from "react";
import Graphics from "../components/Graphics";
import Counters from "../components/Counters";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import "./css/dashboard.css";

function Dashboard() {
  const user = useSelector((state) => state.user.data);
  if (user) {
    const { username } = user;
    return (
      <>
        <div className="app_container">
          <section className="main_container">
            <header>
              <h1 className="title_user">Welcome {username}</h1>
              <span className="subtitle">This is your data</span>
            </header>
            <section>
              <Counters />
            </section>
            <section>
              <Graphics />
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

export default Dashboard;
