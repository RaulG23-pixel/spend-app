import React from "react";
import Sidebar from "../components/Sidebar";
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
              <h1 className="title_user">Saves</h1>
              <span className="subtitle">Here you can see all your saves</span>
            </header>
            <section></section>
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
