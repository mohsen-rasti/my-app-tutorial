import React from "react";
import "../../App.css";
import logo from "../../logo.svg";


function Navbar() {
    return (
        <>
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand " href="#"><img src={logo} style={{width:'35px'}}></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link text-white text-uppercase active" aria-current="page" href="#">خانه&nbsp;<i class="fas fa-home"></i></a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-white text-uppercase ml-6 active" aria-current="page" href="#">اخبار&nbsp;<i class="fas fa-newspaper"></i></a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-white text-uppercase active" aria-current="page" href="#">ارتباط با ما&nbsp;<i class="fas fa-id-card"></i></a>
            </li>
       </ul>
      <form class="d-flex">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
        <button class="btn btn-outline-primary" type="submit">جستجو&nbsp;<i class="fas fa-search"></i></button>
      </form>
    </div>
  </div>
</nav>

        </>
    )
}

export default Navbar
