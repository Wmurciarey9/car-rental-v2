import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./filterBy.scss";

import Banner from "../../images/siteImages/intro-image.jpg";

import { List } from "../../components/List/List";

export const FilterBy = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="filter-by">
      <div className="left">
        <h4>Filter Cars</h4>
        <div className="filterItem">
          <hr />
          <h2>Car Type</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Coupe</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Hatchback</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Sedan</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="4" value={4} />
            <label htmlFor="4">MPV</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="5" value={5} />
            <label htmlFor="5">SUV</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Capacity</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">2-5</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">6 or more</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="asc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="catImg" src={Banner} alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};
