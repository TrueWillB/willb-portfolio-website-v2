import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="portfolio-app">
      <header>
        <nav className="navbar navbar-expand-lg willb-navbar ">
          <div className="container-fluid willb-navbar-container">
            <Link to="/" className="navbar-brand">
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
                    to={"/about"}
                    className="nav-item nav-link active border-start border-black border-opacity-10 border-2 py-5"
                    aria-current="page"
                  >
                    About Me
                  </Link>
                </li>
                <li className="nav-item  ">
                  <Link
                    to="/portfolio"
                    className="nav-link active border-start border-2 border-black border-opacity-10 py-5 "
                    aria-current="page"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item  ">
                  <Link
                    to="/contact"
                    className="nav-link active border-start border-black border-opacity-10 border-2 py-5 "
                    aria-current="page"
                  >
                    Contact Me
                  </Link>
                </li>
                <li className="nav-item  ">
                  <Link
                    to="/resume"
                    className="nav-link active border-start border-black border-opacity-10 border-2 py-5 "
                    aria-current="page"
                  >
                    Resume
                  </Link>
                </li>

                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" >
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" >
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" >
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li> */}
              </ul>
              {/* <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
