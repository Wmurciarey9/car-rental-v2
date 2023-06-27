import React from "react";

import "./List.scss";

import Audi from "../../images/siteImages/featured-audi.png";
import BMW from "../../images/siteImages/featured-bmw.png";
import MB from "../../images/siteImages/featured-mb.png";
import { CarBox } from "../carBox/CarBox";

export const List = () => {
  const data = [
    {
      id: 1,
      img: Audi,
      year: 2023,
      capacity: 4,
      title: "Audi R8",
      location: "Atlanta, GA",
      transmision: "Manual",
      power: "Electric",
      cost: "300",
    },
    {
      id: 2,
      img: BMW,
      year: 2024,
      capacity: 7,
      title: "BMW",
      location: "Chicago, CH",
      transmision: "Manual",
      power: "Gas",
      cost: 400,
    },
    {
      id: 3,
      img: MB,
      year: 2023,
      capacity: 4,
      title: "CLA 300E",
      location: "Manhattan, NY",
      transmision: "Manual",
      power: "Gas",
      cost: 300,
    },
    {
      id: 4,
      img: BMW,
      year: 2021,
      capacity: 4,
      title: "BMW X6",
      location: "Nashville, TN",
      transmision: "Manual",
      power: "Electric",
      cost: 300,
    },
    {
      id: 5,
      img: Audi,
      year: 2023,
      capacity: 4,
      title: "Audi TT",
      location: "Manhattan, NY",
      transmision: "Manual",
      power: "Electric",
      cost: 300,
    },

    {
      id: 2,
      img: BMW,
      year: 2024,
      capacity: 7,
      title: "BMW",
      location: "Chicago, CH",
      transmision: "Manual",
      power: "Gas",
      cost: 400,
    },
    {
      id: 3,
      img: MB,
      year: 2023,
      capacity: 4,
      title: "CLA 300E",
      location: "Manhattan, NY",
      transmision: "Manual",
      power: "Gas",
      cost: 300,
    },
    {
      id: 4,
      img: BMW,
      year: 2021,
      capacity: 4,
      title: "BMW X6",
      location: "Nashville, TN",
      transmision: "Manual",
      power: "Electric",
      cost: 300,
    },
    {
      id: 1,
      img: Audi,
      year: 2023,
      capacity: 4,
      title: "Audi R8",
      location: "Atlanta, GA",
      transmision: "Manual",
      power: "Electric",
      cost: "300",
    },
    {
      id: 5,
      img: Audi,
      year: 2023,
      capacity: 4,
      title: "Audi TT",
      location: "Manhattan, NY",
      transmision: "Manual",
      power: "Electric",
      cost: 300,
    },
    {
      id: 1,
      img: Audi,
      year: 2023,
      capacity: 4,
      title: "Audi R8",
      location: "Atlanta, GA",
      transmision: "Manual",
      power: "Electric",
      cost: "300",
    },
    {
      id: 2,
      img: BMW,
      year: 2024,
      capacity: 7,
      title: "BMW",
      location: "Chicago, CH",
      transmision: "Manual",
      power: "Gas",
      cost: 400,
    },
    {
      id: 3,
      img: MB,
      year: 2023,
      capacity: 4,
      title: "CLA 300E",
      location: "Manhattan, NY",
      transmision: "Manual",
      power: "Gas",
      cost: 300,
    },
    {
      id: 4,
      img: BMW,
      year: 2021,
      capacity: 4,
      title: "BMW X6",
      location: "Nashville, TN",
      transmision: "Manual",
      power: "Electric",
      cost: 300,
    },
    {
      id: 5,
      img: Audi,
      year: 2023,
      capacity: 4,
      title: "Audi TT",
      location: "Manhattan, NY",
      transmision: "Manual",
      power: "Electric",
      cost: 300,
    },
  ];

  return (
    <div className="list">
      {data.map((car) => (
        <CarBox car={car} key={car.id} />
      ))}
    </div>
  );
};
