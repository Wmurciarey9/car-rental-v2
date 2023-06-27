import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ForumIcon from "@mui/icons-material/Forum";
import HomeIcon from "@mui/icons-material/Home";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logoImages/logo2-white-transparent.png";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <Link to={`/`}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="middle">
          <a href="#">
            <HomeIcon className="icon" />
            Home
          </a>
          <a href="#">
            <DirectionsCarIcon className="icon" />
            Cars
          </a>
          <a href="#">
            <PersonSearchIcon className="icon" />
            Dealers
          </a>
          <a href="#">
            <ForumIcon className="icon" />
            Message
          </a>
          <a href="#">
            <ManageHistoryIcon className="icon" />
            History
          </a>
        </div>
        <div className="right">
          <NotificationsIcon />
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
};
