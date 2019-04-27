import React from "react";
import { shallow } from "enzyme";
import Profile from "./Profile";

describe("Profile", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.length).toEqual(1);
  });
});
