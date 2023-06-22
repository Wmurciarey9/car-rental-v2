import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import "./searchBar.scss";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-bar-container">
        <form className="search-form" action="search">
          <div className="box-data">
            <span>
              <LocationOnIcon className="icon" />
              Location
              <b>*</b>
            </span>
            <input type="text" placeholder="Choose Location" name="location" />
          </div>
          <div className="box-data">
            <span>
              <CalendarMonthIcon className="icon" />
              Pick-Up Date
              <b>*</b>
            </span>
            <input type="date" id="pickDate" />
          </div>
          <div className="box-data">
            <span>
              <CalendarMonthIcon className="icon" />
              Drop-Off Date
              <b>*</b>
            </span>
            <input type="date" id="pickDate" />
          </div>
          <div className="box-data">
            <span>
              <AccessTimeIcon className="icon" />
              Pick-Up Time
              <b>*</b>
            </span>
            <input type="time" id="pickTime" />
          </div>
          <div className="box-data">
            <span>
              <AccessTimeIcon className="icon" />
              Drop-Off Time
              <b>*</b>
            </span>
            <input type="time" id="pickTime" />
          </div>
          <button className="centered-button">
            <SearchIcon />
          </button>
        </form>
      </div>
    </div>
  );
};
