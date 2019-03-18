import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css';

export default function NoMatch({ match }) {
  return (
    <div className="noMatch">
      <h1>404 Not Found</h1>
      <Link to={`${match.url}`}>Home</Link>
    </div>
  )
}