import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import Landing from "../../views/Landing/Landing";
import Dashboard from "../../views/Dashboard/Dashboard";
import Profile from "../../views/Profile/Profile";
import Registration from "../../views/Registration/Registration";
import Login from "../../views/Login/Login";
import AuthBar from "../AuthBar/AuthBar";
import NavBar from "../NavBar/NavBar";
import ViewPost from "../../views/ViewPost/ViewPost";
import NoMatch from "../../views/NoMatch/NoMatch";

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header>
          <Switch>
            <Route path="/dashboard" component={NavBar} />
            <Route path="/profile" component={NavBar} />
            <Route path="/post" component={NavBar} />
            <Route path="/" component={AuthBar} />
          </Switch>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/register" component={Registration} />
            <Route exact path="/login" component={Login} />
            <Route path="/post/:postID" component={ViewPost} />
            <Route component={NoMatch} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  posts: state.posts
});

export default connect(mapStateToProps)(App);
