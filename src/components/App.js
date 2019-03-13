import React, { Component } from "react";
import Header from "./Header";
import Landing from "./Landing";

class App extends Component {
  render() {
    return (
      <div>
        <Header loggedIn="false" />
        <Landing />
      </div>
    );
  }
}

export default App;
