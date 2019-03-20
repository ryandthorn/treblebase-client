import React from "react";
import { Link } from "react-router-dom";
import "./AuthBar.css";

export default function AuthBar() {
  return (
    <section className="authbar">
      <section className="logo">
        <div className="logo-ph">Logo</div>
      </section>
      <nav className="register--login">
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Log in</Link>
      </nav>
    </section>
  );
}
