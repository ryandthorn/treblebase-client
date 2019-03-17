import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Registration from "./Registration";
import Login from "./Login";

export default function App() {
  return (
    <Router>
      <div>
        {/* <Header loggedIn="false" /> */}
        <nav className="nav__no-auth">
          <Link to="/register">Sign Up</Link>
          <Link to="/login">Log in</Link>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/register" component={Registration} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
