import React from "react";
import Graphics from "../components/Graphics";
import Counters from "../components/Counters";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";

function Dashboard() {
  const user = useSelector((state) => state.value);
  if (user) {
    const { username } = user;
    return (
      <>
        <div className="app_container">
          <section className="main_container">
            <header>
              <h1 className="title_user">Welcome {username}</h1>
              <span className="subtitle">These are your spends</span>
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
