import React from "react";
import { shallow } from "enzyme";
import NavBar from "./NavBar";

describe("NavBar", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.length).toEqual(1);
  });
});
