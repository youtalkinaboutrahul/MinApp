import React, { useState } from "react";
import logo from "../assets/logo.mp4";
import "./NavBar.css";

function NavBar() {
  // NavMenu active

  const [active, setActive] = useState("nav_menu");
  const navToggle = () =>
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

  return (
    <nav className="nav">
      <video autoPlay muted className="App-logo">
        <source src={logo} type="video/mp4" />
      </video>

      <ul className={active}>
        <li className="nav_item">
          <a href="/" className="nav_link">
            Home
          </a>
        </li>
        <li className="nav_item">
          <a href="/" className="nav_link">
            Features
          </a>
        </li>
        <li className="nav_item">
          <a href="/" className="nav_link">
            FAQs
          </a>
        </li>

        <li className="nav_item">
          <a href="/">
            <button className="contactbtn" type="button">
              Contact Us
            </button>
          </a>
        </li>
      </ul>

      <div onClick={navToggle} className="nav_toggler">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default NavBar;
