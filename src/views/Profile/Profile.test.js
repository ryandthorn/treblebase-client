import React from "react";
import { Profile } from "./Profile";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<Profile />, { disableLifecycleMethods: true });
});
