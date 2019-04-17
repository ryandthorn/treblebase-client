import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Dropdown.css";

export default class Dropdown extends React.Component {
  handleLogout() {
    localStorage.clear();
    return <Redirect to="/" />;
  }
  render() {
    return (
      <nav role="navigation" className="dropdown" id="dropdown">
        <Link to="/" onClick={this.handleLogout}>
          Log out
        </Link>
      </nav>
    );
  }
}
