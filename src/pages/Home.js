import React from "react";
import Overview from "../components/home/Overview";
import About from "../components/home/About";
import Features from "../components/home/Features";
import Social from "../components/home/Social";
import Hero from "../components/home/Hero";

function Home() {
  return (
    <div className="landing__page">
      <Hero />
      <About />
      <Features />
      <Overview />
      <Social />
      <footer className="landing__footer">
        <span>Created by Raul Gonzalez</span>
      </footer>
    </div>
  );
}

export default Home;
