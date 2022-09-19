import React from "react";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import "./css/Features.css";

function Features() {
  return (
    <section className="features__section" id="features">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="wave_top"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,160L30,165.3C60,171,120,181,180,176C240,171,300,149,360,122.7C420,96,480,64,540,64C600,64,660,96,720,112C780,128,840,128,900,112C960,96,1020,64,1080,64C1140,64,1200,96,1260,122.7C1320,149,1380,171,1410,181.3L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      <div className="container features_box">
        <h2>Features</h2>
        <div className="features__flex">
          <div className="feature">
            <img src={icon1} alt="Icon feature 1" />

            <div>
              <h4>Spend tracking</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                bibendum mollis diam, a dapibus lacus vehicula ac. Ut dolor mi,
                cursus eget tempus non.
              </p>
            </div>
          </div>
          <div className="feature">
            <img src={icon2} alt="Icon feature 2" />
            <div>
              <h4>List of pendings</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                bibendum mollis diam, a dapibus lacus vehicula ac. Ut dolor mi,
                cursus eget tempus non, pellentesque eget justo.
              </p>
            </div>
          </div>
          <div className="feature">
            <img src={icon3} alt="Icon feature 3" />
            <div>
              <h4>Savings visualization</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                bibendum mollis diam, a dapibus lacus vehicula ac. Ut dolor mi,
                cursus eget tempus non, pellentesque eget justo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="wave_bottom"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,224L30,224C60,224,120,224,180,213.3C240,203,300,181,360,192C420,203,480,245,540,266.7C600,288,660,288,720,256C780,224,840,160,900,133.3C960,107,1020,117,1080,128C1140,139,1200,149,1260,138.7C1320,128,1380,96,1410,80L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

export default Features;
