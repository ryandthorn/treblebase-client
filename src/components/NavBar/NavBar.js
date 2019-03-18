import React from "react";
import "./NavBar.css";

export default function NavBar(props) {
  return (
    <nav className="nav__auth">
      <input
        type="search"
        placeholder="Search TrebleBase..."
        id="js--nav-search"
      />
      <img
        src="https://img.icons8.com/material/24/000000/menu.png"
        alt="View menu"
      />
    </nav>
  );
}
