import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import Logo from "../../images/logoImages/logo2-white-transparent.png";
import "./footer.scss";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <img src={Logo} alt="Logo" />
          <h2>Car Rental</h2>
          <p>
            Start your journey with us today and experience convenience, global
            availability, and unbeatable deals.
          </p>
        </div>
        <div className="right">
          <div className="r-left">
            <h3>COMPANY</h3>
            <a href="">Blog</a>
            <a href="">Careers</a>
            <a href="">Pricing</a>
          </div>
          <div className="r-middle">
            <h3>RESOURCES</h3>
            <a href="">Documentation</a>
            <a href="">Papers</a>
            <a href="">Requisites</a>
          </div>
          <div className="r-right">
            <h3>LEGAL</h3>
            <a href="">Terms of Service</a>
            <a href="">Privacy Policy</a>
            <a href="">Cookies Policy</a>
            <a href="">Data Processing</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="endline">
        <p> © 2023 Wilson Dev | All rights reserved</p>

        <button>
          <a href="https://wa.link/jipbe4" target="_blank" rel="noreferrer">
            LET'S TALK
          </a>
        </button>
        <div className="icons">
          <div className="iconItem">
            <a
              href="https://github.com/Wmurciarey9"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="icon" />
            </a>
          </div>
          <div className="iconItem">
            <a
              href="https://www.linkedin.com/in/wmurciarey"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
