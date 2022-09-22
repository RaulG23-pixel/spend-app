import React from "react";
import "./css/SideNavigation.css";
function SideNavigation() {
  return (
    <ul className="s_navigation">
      <li>
        <a href="#hero" alt="home section" className="s_link"></a>
        <span className="s_link__title">Home</span>
      </li>
      <li>
        <a href="#about" alt="about section" className="s_link"></a>
        <span className="s_link__title">About</span>
      </li>
      <li>
        <a href="#features" alt="features section" className="s_link"></a>
        <span className="s_link__title">Features</span>
      </li>
      <li>
        <a href="#overview" alt="overview section" className="s_link"></a>
        <span className="s_link__title">Overview</span>
      </li>
      <li>
        <a href="#social" alt="social media section" className="s_link"></a>
        <span className="s_link__title">Social</span>
      </li>
    </ul>
  );
}

export default SideNavigation;
