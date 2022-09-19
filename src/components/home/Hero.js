import React from "react";
import ilustration from "../../assets/ilustration1.svg";
import { NavLink } from "react-router-dom";
import "./css/Hero.css";

function Hero() {
  return (
    <header className="landing__header">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="wave"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,160L34.3,154.7C68.6,149,137,139,206,133.3C274.3,128,343,128,411,154.7C480,181,549,235,617,234.7C685.7,235,754,181,823,181.3C891.4,181,960,235,1029,218.7C1097.1,203,1166,117,1234,96C1302.9,75,1371,117,1406,138.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>

      <div className="container">
        <nav className="landing__nav">
          <a className="logo" href="#home">
            SpendApp
            <i className="fas fa-chart-pie logo__pie_logo"></i>
          </a>
          <div>
            <a className="landing__nav_link" href="#home">
              Home
            </a>
            <a className="landing__nav_link" href="#about">
              About
            </a>
            <a className="landing__nav_link" href="#features">
              Features
            </a>
            <a className="landing__nav_link" href="#overview">
              Overview
            </a>
            <a className="landing__nav_link" href="#social">
              Social
            </a>
          </div>
        </nav>
      </div>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="blob blob-1"
      >
        <path
          fill="#F2F4F8"
          d="M41.7,-54.3C57.2,-46.1,75.2,-38.2,80.4,-25.4C85.5,-12.6,77.8,5.1,69.4,19.9C60.9,34.7,51.7,46.6,40,55.7C28.3,64.8,14.2,71,1.2,69.4C-11.7,67.7,-23.5,58.1,-32.5,48.1C-41.4,38.2,-47.6,27.8,-56.9,14.8C-66.1,1.8,-78.4,-13.8,-75.8,-25.4C-73.1,-37,-55.5,-44.6,-40.4,-52.9C-25.2,-61.2,-12.6,-70.4,0.2,-70.7C13.1,-71,26.1,-62.5,41.7,-54.3Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="blob blob-2"
      >
        <path
          fill="#F2F4F8"
          d="M46.7,-52.8C48.8,-44.6,30.7,-22.3,26.5,-4.2C22.3,13.9,32,27.8,29.9,44.1C27.8,60.5,13.9,79.2,4.2,75C-5.4,70.7,-10.8,43.5,-18.1,27.2C-25.3,10.8,-34.3,5.4,-36.6,-2.3C-38.8,-10,-34.4,-20,-27.2,-28.1C-20,-36.3,-10,-42.6,6.2,-48.7C22.3,-54.9,44.6,-60.9,46.7,-52.8Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="blob blob-3"
      >
        <path
          fill="#F2F4F8"
          d="M46.7,-52.8C48.8,-44.6,30.7,-22.3,26.5,-4.2C22.3,13.9,32,27.8,29.9,44.1C27.8,60.5,13.9,79.2,4.2,75C-5.4,70.7,-10.8,43.5,-18.1,27.2C-25.3,10.8,-34.3,5.4,-36.6,-2.3C-38.8,-10,-34.4,-20,-27.2,-28.1C-20,-36.3,-10,-42.6,6.2,-48.7C22.3,-54.9,44.6,-60.9,46.7,-52.8Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="container hero">
        <div className="hero__text">
          <h1>Spend analytics with one click</h1>
          <p>Explore a new definition of data visualization with our tools</p>
          <NavLink className="btn_landing btn_hero" to="/login">
            Get started
          </NavLink>
        </div>
        <img
          src={ilustration}
          alt="ilustration"
          className="hero__ilustration"
        />
      </div>
    </header>
  );
}

export default Hero;
