import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
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
