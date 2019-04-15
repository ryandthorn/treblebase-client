import React from "react";
import { connect } from "react-redux";
import AuthBar from "../AuthBar/AuthBar";
import Dropdown from "../Dropdown/Dropdown";
import "./NavBar.css";
import defaultPic from "./trebleclef.svg";

export class NavBar extends React.Component {
  render() {
    if (!this.props.user) {
      return <AuthBar />;
    }
    return (
      <div className="navbar">
        <section className="logo">
          <div className="logo-ph">Logo</div>
        </section>

        <section className="navigation">
          <div className="wrap__headshot">
            <img
              className="headshot"
              src={this.props.user.headshot || defaultPic}
              alt="Your headshot"
            />
          </div>
          <div className="wrap__menu">
            <label htmlFor="toggle-menu">
              <img
                className="menu"
                src="https://img.icons8.com/material/24/000000/menu.png"
                alt="View menu"
              />
            </label>
            <input type="checkbox" class="toggle-menu" id="toggle-menu" />
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
