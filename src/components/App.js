import React, { Component } from "react";

import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header loggedIn="false" />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
