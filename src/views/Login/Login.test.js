import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router";
import { Login } from "./Login";

it("should render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>,
    div
  );
});
