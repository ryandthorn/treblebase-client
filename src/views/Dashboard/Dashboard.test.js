import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router";
import { Dashboard } from "./Dashboard";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Dashboard />
    </MemoryRouter>,
    div
  );
});
