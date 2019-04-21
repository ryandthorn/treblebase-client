import React from "react";
import { shallow } from "enzyme";
import AuthBar from "./AuthBar";

describe("AuthBar", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<AuthBar />);
    expect(wrapper.length).toEqual(1);
  });

  it("should render the AuthBar", () => {
    const wrapper = shallow(<AuthBar />);
    expect(wrapper.hasClass("authbar")).toEqual(true);
  });
});
