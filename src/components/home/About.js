import React from "react";
import ilustration2 from "../../assets/ilustration2.svg";
import { NavLink } from "react-router-dom";

function About() {
  return (
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
            nisi. Donec laoreet nisi vitae felis pulvinar, Duis fringilla
            laoreet metus eu pellentesque.
          </p>
          <NavLink to="/dashboard" className="btn_landing btn_about">
            Get started
          </NavLink>
        </div>
      </div>
      <div className="circle c_big clearBlue pos-1"></div>
      <div className="circle c_small ring_clblue pos-2"></div>
      <div className="circle c_medium mediumBlue pos-3"></div>
      <div className="circle c_small mediumBlue pos-4"></div>
    </section>
  );
}

export default About;
