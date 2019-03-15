import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";
// import Dashboard from "./Dashboard";

export default function App() {
  return (
    <Router>
      <div>
        <Header loggedIn="false" />
        <Route exact path="/" component={Landing} />
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
        <Footer />
      </div>
    </Router>
  );
}
