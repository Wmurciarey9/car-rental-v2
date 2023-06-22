import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import PersonIcon from "@mui/icons-material/Person";
import RepeatIcon from "@mui/icons-material/Repeat";
import React from "react";

import Audi from "../../images/siteImages/featured-audi.png";
import BMW from "../../images/siteImages/featured-bmw.png";
import MB from "../../images/siteImages/featured-mb.png";

import "./featuredCars.scss";
export const FeaturedCars = () => {
  return (
    <div className="featured-cars">
      <h1>Available Right Now</h1>
      <div className="featured-container">
        <div className="featured-cars-box">
          <h3>Mercedes Benz SL-Class</h3>
          <h5>2023</h5>
          <img src={MB} alt="" />
          <p>Phoenix, AZ</p>
          <hr />
          <div className="icons-box">
            <div className="icon-set">
              <PersonIcon className="icon" />
              <p>2</p>
            </div>
            <div className="icon-set">
              <RepeatIcon className="icon" />
              <p>Manual</p>
            </div>
            <div className="icon-set">
              <PersonIcon className="icon" />
              <p>2</p>
            </div>
            <div className="icon-set">
              <LocalGasStationIcon className="icon" />
              <p>Gas</p>
            </div>
            <div className="icon-set-price">
              <p>
                <span>$300</span>/day
              </p>
            </div>
          </div>
        </div>
        <div className="featured-cars-box">
          <h3>BMW X6</h3>
          <h5>2023</h5>
          <img src={BMW} alt="" />
          <p>Atlanta, GA</p>
          <hr />
          <div className="icons-box">
            <div className="icon-set">
              <PersonIcon className="icon" />
              <p>2</p>
            </div>
            <div className="icon-set">
              <RepeatIcon className="icon" />
              <p>Manual</p>
            </div>
            <div className="icon-set">
              <PersonIcon className="icon" />
              <p>5</p>
            </div>
            <div className="icon-set">
              <LocalGasStationIcon className="icon" />
              <p>Gas</p>
            </div>
            <div className="icon-set-price">
              <p>
                <span>$120</span>/day
              </p>
            </div>
          </div>
        </div>
        <div className="featured-cars-box">
          <h3>Audi</h3>
          <h5>2023</h5>
          <img src={Audi} alt="" />
          <p>Phoenix, AZ</p>
          <hr />
          <div className="icons-box">
            <div className="icon-set">
              <PersonIcon className="icon" />
              <p>4</p>
            </div>
            <div className="icon-set">
              <RepeatIcon className="icon" />
              <p>Manual</p>
            </div>
            <div className="icon-set">
              <PersonIcon className="icon" />
              <p>2</p>
            </div>
            <div className="icon-set">
              <ElectricCarIcon className="icon" />
              <p>Electric</p>
            </div>
            <div className="icon-set-price">
              <p>
                <span>$300</span>/day
              </p>
            </div>
          </div>
        </div>
      </div>
      <button>See All Cars</button>
    </div>
  );
};
