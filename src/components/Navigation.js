import React from "react";

export default function Navigation() {
  return (
    <div className="portfolio-app">
      <header>
        <nav class="navbar navbar-expand-lg willb-navbar ">
          <div class="container-fluid willb-navbar-container">
            <a class="navbar-brand" href="#">
              Welcome to Will
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item  ">
                  <a
                    class="nav-link active border-start border-black border-opacity-10 border-2 py-5"
                    aria-current="page"
                    href="#"
                  >
                    About Me
                  </a>
                </li>
                <li class="nav-item  ">
                  <a
                    class="nav-link active border-start border-2 border-black border-opacity-10 py-5 "
                    aria-current="page"
                    href="#"
                  >
                    Portfolio
                  </a>
                </li>
                <li class="nav-item  ">
                  <a
                    class="nav-link active border-start border-black border-opacity-10 border-2 py-5 "
                    aria-current="page"
                    href="#"
                  >
                    Contact Me
                  </a>
                </li>
                <li class="nav-item  ">
                  <a
                    class="nav-link active border-start border-black border-opacity-10 border-2 py-5 "
                    aria-current="page"
                    href="#"
                  >
                    Resume
                  </a>
                </li>

                {/* <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li> */}
              </ul>
              {/* <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
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
