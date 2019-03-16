import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Header(props) {
  // logged in
  if (props.loggedIn === "true") {
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
  } else {
    // not logged in
    return (
      <Router>
        <nav className="nav__no-auth">
          <Link to="/register">Sign Up</Link>
          {/* <Link to="/login">Log in</Link> */}
        </nav>
      </Router>

    );
  }
}
