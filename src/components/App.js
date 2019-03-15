import React from "react";

import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <Header loggedIn="false" />
      <Landing />
      <Footer />
    </div>
  );
}
