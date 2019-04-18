import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router";
import Landing from "./Landing";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Landing />
    </MemoryRouter>,
    div
  );
});
