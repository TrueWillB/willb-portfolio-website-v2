import React from "react";
import { Link } from "react-router-dom";
// import Granim from "react-granim";
// import croppedMenu from "./images/croppedMenu.jpg";

export default function Navigation() {
  return (
    <div className="portfolio-app">
      <header>
        <nav className="navbar navbar-expand-lg willb-navbar">
          <div className="container-fluid willb-navbar-container">
            <Link to="willb-portfolio-website-v2/" className="navbar-brand">
              Welcome to Will
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item  ">
                  <Link
                    to={"willb-portfolio-website-v2/#/about"}
                    className="nav-item nav-link active border-start border-black border-opacity-10 border-2 py-5"
                    aria-current="page"
                  >
                    About Me
                  </Link>
                </li>
                <li className="nav-item  ">
                  <Link
                    to="willb-portfolio-website-v2/#/portfolio"
                    className="nav-link active border-start border-2 border-black border-opacity-10 py-5 "
                    aria-current="page"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item  ">
                  <Link
                    to="willb-portfolio-website-v2/#/contact"
                    className="nav-link active border-start border-black border-opacity-10 border-2 py-5 "
                    aria-current="page"
                  >
                    Contact Me
                  </Link>
                </li>
                <li className="nav-item  ">
                  <Link
                    to="willb-portfolio-website-v2/#/resume"
                    className="nav-link active border-start border-black border-opacity-10 border-2 py-5 "
                    aria-current="page"
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
