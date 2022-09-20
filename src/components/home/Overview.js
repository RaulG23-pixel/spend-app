import React from "react";
import image1 from "../../assets/gallery1.png";
import image2 from "../../assets/gallery2.png";
import image3 from "../../assets/gallery3.png";
import image4 from "../../assets/gallery4.png";
import "./css/Overview.css";

function Overview() {
  //Count the pixels between each slide while it slides to an specific side
  let sliderCounter = 0;
  const positions = {
    0: 0,
    1: -900,
    2: -1800,
    3: -2700,
  };
  //Slides to the right
  const slideRight = () => {
    const sliderCont = document.querySelector("#slider_container");
    sliderCounter -= 900;
    if (sliderCounter < -2700) sliderCounter = 0;
    sliderCont.style.transform = `translateX(${sliderCounter}px)`;
    displayIndicator();
  };
  //Slides to the left
  const slideLeft = () => {
    const sliderCont = document.querySelector("#slider_container");
    sliderCounter += 900;
    if (sliderCounter > 0) sliderCounter = -2700;
    sliderCont.style.transform = `translateX(${sliderCounter}px)`;
    displayIndicator();
  };
  const closeSlider = () => {
    const slider = document.querySelector(".slider");
    slider.classList.remove("open");
    slider.classList.add("closed");
  };
  const openSlider = (e) => {
    const slider = document.querySelector(".slider");
    const sliderCont = document.querySelector("#slider_container");
    slider.classList.add("open");
    slider.classList.remove("closed");
    switch (e.target.id) {
      case "img_1":
        sliderCounter = 0;
        break;
      case "img_2":
        sliderCounter = -900;
        break;
      case "img_3":
        sliderCounter = -1800;
        break;
      case "img_4":
        sliderCounter = -2700;
        break;
    }
    sliderCont.style.transform = `translateX(${sliderCounter}px)`;
    displayIndicator();
  };
  const displayIndicator = () => {
    const indicators = document.querySelectorAll(".indicator");
    for (let pos in positions) {
      if (positions[pos] === sliderCounter) {
        for (let indicator of indicators) {
          indicator.style.background = "white";
        }
        indicators[pos].style.backgroundColor = "dodgerblue";
      }
    }
  };
  const translateTo = (target) => {
    const sliderCont = document.querySelector("#slider_container");
    sliderCounter = target;
    sliderCont.style.transform = `translateX(${sliderCounter}px)`;
    displayIndicator();
    return;
  };

  return (
    <section className="overview__section" id="overview">
      <h2>overview</h2>
      <div className="container gallery_container">
        <div className="gallery__box">
          <div
            className="gallery__img gallery_img_1"
            id="img_1"
            onClick={openSlider}
          >
            <img src={image1} alt="Dashboard" />
          </div>
          <div
            className="gallery__img gallery_img_2"
            id="img_2"
            onClick={openSlider}
          >
            <img src={image2} alt="Spents section" />
          </div>
          <div
            className="gallery__img gallery_img_3"
            id="img_3"
            onClick={openSlider}
          >
            <img src={image3} alt="Profile section" />
          </div>
          <div
            className="gallery__img gallery_img_4"
            id="img_4"
            onClick={openSlider}
          >
            <img src={image4} alt="Saves section" />
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="sl_container overflow">
          <div className="slider_container" id="slider_container">
            <div>
              <img src={image1} />
            </div>
            <div>
              <img src={image2} />
            </div>
            <div>
              <img src={image3} />
            </div>
            <div>
              <img src={image4} alt="Saves section" />
            </div>
          </div>
          <button className="btn_left btn_slider" onClick={slideLeft}>
            <i className="fas fa-arrow-circle-left"></i>
          </button>
          <button className="btn_right btn_slider" onClick={slideRight}>
            <i className="fas fa-arrow-circle-right"></i>
          </button>
          <div className="indicators">
            <button
              className="indicator"
              onClick={() => translateTo(0)}
              id="slide_0"
            ></button>
            <button
              className="indicator"
              onClick={() => translateTo(-900)}
              id="slide_1"
            ></button>
            <button
              className="indicator"
              onClick={() => translateTo(-1800)}
              id="slide_2"
            ></button>
            <button
              className="indicator"
              onClick={() => translateTo(-2700)}
              id="slide_3"
            ></button>
          </div>
        </div>
        <button className="btn_slider btn_close" onClick={closeSlider}>
          x
        </button>
      </div>
    </section>
  );
}

export default Overview;
