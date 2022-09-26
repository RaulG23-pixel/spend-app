import React from "react";
import "./css/SideNavigation.css";
function SideNavigation() {
  return (
    <nav className="s_navigation">
      <a href="#hero" alt="home section" className="s_link">
        <span className="s_link__title">Home</span>
      </a>

      <a href="#about" alt="about section" className="s_link">
        <span className="s_link__title">About</span>
      </a>

      <a href="#features" alt="features section" className="s_link">
        <span className="s_link__title">Features</span>
      </a>

      <a href="#overview" alt="overview section" className="s_link">
        <span className="s_link__title">Overview</span>
      </a>

      <a href="#social" alt="social media section" className="s_link">
        <span className="s_link__title">Social</span>
      </a>
    </nav>
  );
}

export default SideNavigation;
