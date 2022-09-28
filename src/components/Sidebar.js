import React, { useEffect } from "react";
import esqueleto from "../assets/esqueleto.jpg";
import { Link, NavLink } from "react-router-dom";
import "./css/sidebar.css";

function Sidebar(props) {
  const { user } = props;
  useEffect(() => {
    const configButton = document.querySelector(".config");
    configButton.addEventListener("click", (e) => {
      const dropdown = document.querySelector(".user_menu__dropdown");
      if (!dropdown.classList.contains("open")) {
        dropdown.classList.add("open");
        dropdown.classList.remove("closed");
      } else {
        dropdown.classList.remove("open");
        dropdown.classList.add("closed");
      }
    });
  }, []);

  return (
    <aside className="sidebar active">
      <section>
        <div className="sidebar__header">
          <h3>SpendApp</h3>
        </div>
        <ul className="sidebar_links">
          <NavLink to="/dashboard">
            <i className="fas fa-chart-pie sidebar_icon"></i>
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/profile">
            <i className="fas fa-user sidebar_icon"></i>
            <span>Profile</span>
          </NavLink>
          <NavLink to="/spends">
            <i className="fas fa-hand-holding-usd sidebar_icon"></i>
            <span>Spends</span>
          </NavLink>
          <NavLink to="/saves">
            <i className="fas fa-piggy-bank sidebar_icon"></i>
            <span>Savings</span>
          </NavLink>
        </ul>
      </section>
      <footer className="sidebar__footer">
        <div className="flex">
          <div className="user">
            <div className="img_container">
              <img src={esqueleto} alt="avatar" />
            </div>
            <span>{user}</span>
          </div>
          <div className="user_menu">
            <button className="config">
              <i className="fas fa-cog"></i>
            </button>
            <nav className="user_menu__dropdown">
              <Link to="/profile">Edit profile</Link>
              <Link to="/singout">Sign out</Link>
            </nav>
          </div>
        </div>
      </footer>
    </aside>
  );
}

export default Sidebar;
