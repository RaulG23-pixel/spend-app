import React from "react";
import "./css/Social.css";

function Social() {
  return (
    <section className="social__section" id="social">
      <h2>Follow me on social media</h2>
      <div className="social_media">
        <div className="flex_icons">
          <a href="https://twitter.com/raulzx13zero" className="media_icon">
            <i className="fab fa-twitter"></i>
            <span>twitter</span>
          </a>
          <a
            href="https://www.instagram.com/raulgabrielz96/"
            className="media_icon"
          >
            <i className="fab fa-instagram"></i>
            <span>instagram</span>
          </a>
          <a href="https://github.com/RaulG23-pixel" className="media_icon">
            <i className="fab fa-github"></i>
            <span>github</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Social;
