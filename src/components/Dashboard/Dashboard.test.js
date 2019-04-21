import React from "react";
import { shallow } from "enzyme";
import { Dashboard } from "./Dashboard";

it("renders without crashing", () => {
  const wrapper = shallow(<Dashboard />);
  expect(wrapper.length).toEqual(1);
});
