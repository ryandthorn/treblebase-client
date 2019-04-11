import React from "react";
import { Link } from "react-router-dom";

export default function DashNav() {
  return (
    <section className="dashboard-navigation">
      <div className="active tab">
        <Link to="/dashboard">Opportunities</Link>
      </div>
      <div className="tab">
        <Link to="/profile">Profile</Link>
      </div>
    </section>
  );
}
