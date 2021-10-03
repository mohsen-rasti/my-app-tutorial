import React from "react";
import "../../App.css";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand " href="#">
            <img src={logo} style={{ width: "35px" }}></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fas fa-bars" style={{ color: "#fff" }}></i>
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link text-white text-uppercase active"
                  aria-current="page"
                  to="/"
                >
                  خانه&nbsp;<i class="fas fa-home"></i>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link text-white text-uppercase ml-6 active"
                  aria-current="page"
                  to="/news"
                >
                  اخبار
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link text-white text-uppercase active"
                  aria-current="page"
                  to="/contacts"
                >
                  ارتباط با ما
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
              <button class="btn btn-outline-primary" type="submit">
                جستجو&nbsp;<i class="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
