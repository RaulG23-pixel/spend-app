import React from "react";
import esqueleto from "../assets/esqueleto.jpg";
import { NavLink } from "react-router-dom";

function Sidebar(props) {
  const { user } = props;

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
          <button className="config">
            <i className="fas fa-cog"></i>
          </button>
        </div>
      </footer>
    </aside>
  );
}

export default Sidebar;
