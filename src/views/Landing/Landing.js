import React from "react";
import Login from "../Login/Login";
import "./Landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section className="landing">
      <section className="hero inline-center">
        <h1>TrebleBase</h1>
        <h2>Connecting classical musicians to performance opportunities</h2>
      </section>

      <section className="about inline-center">
        <h2>Who we are</h2>
        <h3>What we do</h3>
      </section>

      <section className="register inline-center">
        <h2>Become a part of our community today!</h2>
        <Link to="/register" className="Link__register">
          Sign up for TrebleBase
        </Link>
      </section>

      <section className="login inline-center">
        <h3>Already a member?</h3>
        <Login />
      </section>
    </section>
  );
}
