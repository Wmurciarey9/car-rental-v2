import React from "react";
import "./intro.scss";

import IntroImg from "../../images/siteImages/intro-image.jpg";
export const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-container">
        <img src={IntroImg} alt="" />
        <div className="text">
          <h1>LUXURY CAR RENTAL</h1>
          <h2>MADE AFFORDABLE</h2>
          <p>
            Rent the car of your dreams at an unimaginable price. Flexible pick
            up times and delivery options available, plus unlimited miles
          </p>
          <button>Rent Now</button>
          <div className="intro-range">
            <div className="left">
              <h1>$300</h1>
              <p>Minimum price withour offers</p>
            </div>
            <div className="right">
              <h1>24/7</h1>
              <p>Rent anytime, automated key pickup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
