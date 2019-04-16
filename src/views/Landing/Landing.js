import React from "react";
import Login from "../Login/Login";
import "./Landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section className="landing">
      <section className="hero">
        <div>
          <img
            className="img__logo"
            src="https://st2.depositphotos.com/1747885/7315/v/950/depositphotos_73153169-stock-illustration-logo-treble-clef.jpg"
            alt="Logo"
          />
          <h1>TrebleBase</h1>
        </div>
        <h2>Connecting classical musicians to performance opportunities</h2>
      </section>

      <section className="about">
        <img
          className="img__about"
          src="https://images.unsplash.com/photo-1530522070995-aa23c19e77d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="Find your musical community"
        />
        <h2>
          TrebleBase is a fast and easy way for classical musicians to connect
          with performance organizations and to find work in their city and
          across the US
        </h2>
      </section>

      <section className="register">
        <h2>Become a part of our community today!</h2>
        <Link to="/register" className="Link__register">
          Sign up for TrebleBase
        </Link>
      </section>

      <section className="login">
        <h3>Already a member?</h3>
        <Login />
      </section>
    </section>
  );
}
