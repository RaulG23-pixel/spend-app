import React, { useState } from "react";
import esqueleto from "../assets/esqueleto.jpg";
import { NavLink } from "react-router-dom";

function Sidebar(props) {
  const { user } = props;
  const [isLinkActive, setIsLinkActive] = useState(false);
  const dropdowns = document.querySelectorAll(".dropdown_click");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
      let dropDownContent = dropdown.nextElementSibling;
      let dropdownIcon = dropdown.children[1];
      dropdownIcon.classList.toggle("rotate");
      setIsLinkActive(!isLinkActive);
      if (isLinkActive) {
        dropDownContent.style.height = "auto";
      } else {
        dropDownContent.style.height = "0px";
      }
    });
  });

  return (
    <aside className="sidebar active">
      <section>
        <div className="sidebar__header">
          <h3>SpendApp</h3>
          <button className="hamburger">
            <i className="fas fa-bars"></i>
          </button>
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
          <li className="dropdown_click">
            <div>
              <i className="fas fa-hand-holding-usd sidebar_icon"></i>
              <span>Spends</span>
            </div>
            <i className="fas fa-chevron-down dropdown_icon"></i>
          </li>
          <ul className="dropdown">
            <NavLink to="/spends">
              <i className="fab fa-bandcamp sidebar_icon"></i>{" "}
              <span>View all</span>
            </NavLink>
            <NavLink to="/create/spend">
              <i className="fas fa-plus sidebar_icon"></i>
              <span>Create</span>
            </NavLink>
            <li className="delete">
              <i className="fas fa-minus sidebar_icon"></i> <span>Delete</span>
            </li>
          </ul>
          <li className="dropdown_click">
            <div>
              <i className="fas fa-piggy-bank sidebar_icon"></i>
              <span>Saves</span>
            </div>
            <i className="fas fa-chevron-down dropdown_icon"></i>
          </li>
          <ul className="dropdown">
            <NavLink to="/saves">
              <i className="fab fa-bandcamp sidebar_icon"></i>{" "}
              <span>View all</span>
            </NavLink>
            <NavLink to="/create/save">
              <i className="fas fa-plus sidebar_icon"></i>
              <span>Create</span>
            </NavLink>
            <li>
              <i className="fas fa-minus sidebar_icon"></i> <span>Delete</span>
            </li>
          </ul>
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
