import React from "react";
import "./Landing.css";
import { Link, Redirect } from "react-router-dom";
import Demo from "../../components/Demo";
import { connect } from "react-redux";

export class Landing extends React.Component {
  render() {
    if (this.props.users.loggedIn === true) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <section className="landing">
        <section className="hero">
          <img
            className="img__logo"
            src="https://st2.depositphotos.com/1747885/7315/v/950/depositphotos_73153169-stock-illustration-logo-treble-clef.jpg"
            alt="Logo"
          />
          <h1>TrebleBase</h1>
          <h2>Connecting classical musicians to performance opportunities</h2>
        </section>

        <section className="demo">
          <Demo />
        </section>

        <section className="register">
          <h2>Become a part of our community!</h2>
          <Link to="/register" className="Link__register">
            Get Started
          </Link>
        </section>

        <section className="login">
          <h3>Already a member?</h3>
          <Link to="/login" className="Link__login">
            Log In
          </Link>
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(Landing);
