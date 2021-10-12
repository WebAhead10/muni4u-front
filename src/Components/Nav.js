import React from "react";
import "./nav.css";

function Nav() {
  return (
    <nav>
      <div id="menu-icon" className="menu-icon">
        <span className="fas fa-bars"></span>
      </div>
      <div className="logo">Muni4U</div>
      <div id="nav-items" className="nav-items">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/signIn">sign In</a>
        </li>
        <li>
          <a href="/signUp">sign Up</a>
        </li>
        <li>
          <a href="/request">request</a>
        </li>
      </div>
      {/* <div id="search-icon" className="search-icon">
        <span className="fas fa-search"></span>
      </div>
      <div id="cancel-icon" className="cancel-icon">
        <span className="fas fa-times"></span>
      </div>
      <form id="myform" action="#">
        <input
          type="search"
          className="search-data"
          placeholder="Search"
          required
        />
        <button type="submit" className="fas fa-search"></button> */}
      {/* </form> */}
    </nav>
  );

  const menuBtn = document.getElementById("menu-icon");
  const searchBtn = document.getElementById("search-icon");
  const cancelBtn = document.getElementById("cancel-icon");
  const items = document.getElementById("nav-items");
  const form = document.getElementById("myform");

  menuBtn.onclick = () => {
    items.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  };
  cancelBtn.onclick = () => {
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    cancelBtn.style.color = "#ff3d00";
  };
  searchBtn.onclick = () => {
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  };
}

export default Nav;
