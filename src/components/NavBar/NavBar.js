import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AuthBar from "../AuthBar/AuthBar";
import Dropdown from "../Dropdown/Dropdown";
import "./NavBar.css";
import defaultPic from "./trebleclef.svg";

export class NavBar extends React.Component {
  render() {
    if (!this.props.user) {
      return <AuthBar />;
    }
    const opActive =
      this.props.match.path === "/dashboard" ? "active tab" : "tab";
    const prActive =
      this.props.match.path === "/profile" ? "active tab" : "tab";
    return (
      <div className="navbar">
        <section className="page-navigation">
          <div className={opActive}>
            <Link to="/dashboard">
              <img
                className="nav-icon"
                alt="Dashboard"
                src="https://image.flaticon.com/icons/svg/1644/1644139.svg"
              />
            </Link>
          </div>
          <div className={prActive}>
            <Link to="/profile">
              <img
                className="nav-icon"
                alt="Profile"
                src="https://image.flaticon.com/icons/svg/942/942748.svg"
              />
            </Link>
          </div>
        </section>

        <section className="user-navigation">
          <div className="wrap__menu">
            <label htmlFor="toggle-menu">
              <img
                className="headshot"
                src={this.props.user.headshot || defaultPic}
                alt="Your headshot"
              />
            </label>
            <input type="checkbox" className="toggle-menu" id="toggle-menu" />
            <Dropdown />
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user
});

export default connect(mapStateToProps)(NavBar);
