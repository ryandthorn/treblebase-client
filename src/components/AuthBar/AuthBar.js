import React from 'react';
import { Link } from 'react-router-dom';
import './AuthBar.css';

export default function AuthBar() {
  return (
    <nav className="nav__no-auth">
      <Link to="/register">Sign Up</Link>
      <Link to="/login">Log in</Link>
    </nav>
  );
}