import React from "react";
import ilustration from "../assets/ilustration1.svg";
import ilustration2 from "../assets/ilustration2.svg";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="landing__page">
      <header className="landing__header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="wave"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
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
              <a className="landing__nav_link" href="#regards">
                Regards
              </a>
            </div>
          </nav>
        </div>
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
      <section className="about__section" id="about">
        <div className="about__flex container">
          <img
            src={ilustration2}
            alt="about ilustration"
            className="about__ilustration"
          />
          <div className="about__text">
            <h3 className="about__heading">
              Monitorize your spends and savings has never been so easy
            </h3>
            <p className="about__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              urna ipsum. Curabitur vestibulum malesuada gravida. Morbi non dui
              nisi. Donec laoreet nisi vitae felis pulvinar, eget interdum dolor
              placerat. Integer posuere quis nibh sit amet viverra. Duis
              fringilla laoreet metus eu pellentesque.
            </p>
            <NavLink to="/login" className="btn_landing btn_about">
              Get started
            </NavLink>
          </div>
        </div>
        <div className="circle c_big clearBlue pos-1"></div>
        <div className="circle c_small ring_clblue pos-2"></div>
        <div className="circle c_medium mediumBlue pos-3"></div>
        <div className="circle c_small mediumBlue pos-4"></div>
      </section>
      <section className="features__section" id="features">
        <h2>Some of the best features from the app</h2>
      </section>
      <section className="overview__section" id="overview">
        <h2>overview</h2>
      </section>
      <section className="regards__section" id="regards">
        <h2>regards</h2>
      </section>
      <footer className="landing__footer">
        <span>Created by Raul Gonzalez</span>
      </footer>
    </div>
  );
}

export default Home;
