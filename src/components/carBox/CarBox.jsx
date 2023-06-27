import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import PersonIcon from "@mui/icons-material/Person";
import RepeatIcon from "@mui/icons-material/Repeat";
import React from "react";
import { Link } from "react-router-dom";

import "./carBox.scss";

export const CarBox = ({ car }) => {
  return (
    <Link className="link" to={`/singleCar/${car.id}`}>
      <div className="featured-cars-box">
        <h3>{car.title}</h3>
        <h5>{car.year}</h5>
        <img src={car.img} alt="" />
        <p className="location">{car.location}</p>
        <hr />
        <div className="icons-box">
          <div className="icon-set">
            <PersonIcon className="icon" />
            <p>{car.capacity}</p>
          </div>
          <div className="icon-set">
            <RepeatIcon className="icon" />
            <p>{car.transmision}</p>
          </div>

          <div className="icon-set">
            <ElectricCarIcon className="icon" />
            <p>{car.power}</p>
          </div>
          <div className="icon-set-price">
            <p>
              <span>${car.cost}</span>/day
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
