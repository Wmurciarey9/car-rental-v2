import React from "react";
import CityImg from "../../images/siteImages/city-illustration.jpg";
import ElectricCar from "../../images/siteImages/electric-car-illustration.jpg";
import "./rentProcess.scss";

export const RentProcess = () => {
  return (
    <div className="rent-process">
      <div className="rp-container-top">
        <div className="left">
          <div className="rp-text">
            <h1>Available Worldwide!</h1>
            <p>
              Wherever your travels take you, we've got your transportation
              needs covered. Our car rental service is available worldwide, with
              a vast network of locations spanning across numerous countries.
              Whether you're exploring exotic destinations or navigating
              bustling city streets, we offer convenient pickup and drop-off
              points at major airports, city centers, and popular tourist hubs.
              Experience the freedom to explore your chosen destination at your
              own pace with our reliable and well-maintained vehicles.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="bg-image">
            <img src={CityImg} alt="" />
          </div>
        </div>
      </div>
      <div className="rp-container-bottom">
        <div className="left">
          <div className="bg-image">
            <img src={ElectricCar} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="rp-text">
            <h1>Easy Rental Process</h1>
            <p>
              With our easy rental process, you can now book your dream car
              hassle-free. Simply browse our user-friendly website or mobile
              app, select your desired location and dates, and choose from our
              extensive fleet of vehicles. Our streamlined booking system
              ensures a seamless experience, allowing you to confirm your
              reservation in just a few clicks. Whether you're planning a
              weekend getaway or a long-term rental, we've got you covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
