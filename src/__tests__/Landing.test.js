import React from "react";
import ReactDOM from "react-dom";
import Landing from "../components/Landing";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Landing />, div);
});
