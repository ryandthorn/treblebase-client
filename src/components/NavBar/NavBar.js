import React from "react";
import "./NavBar.css";
import headshot from "./mock-headshot.jpg";

export default function NavBar() {
  return (
    <div className="navbar">
      <section className="logo">
        <div className="logo-ph">Logo</div>
      </section>

      <section className="navigation">
        <div className="wrap__headshot">
          <img className="headshot" src={headshot} alt="Your headshot" />
        </div>
        <div className="wrap__menu">
          <img
            className="menu"
            src="https://img.icons8.com/material/24/000000/menu.png"
            alt="View menu"
          />
        </div>
      </section>
    </div>
  );
}
