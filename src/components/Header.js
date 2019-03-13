import React from "react";

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
      <nav className="nav__no-auth">
        <p>Sign up | Log in</p>
      </nav>
    );
  }
}
