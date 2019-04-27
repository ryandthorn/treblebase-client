import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("Login", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.length).toEqual(1);
  });
});
