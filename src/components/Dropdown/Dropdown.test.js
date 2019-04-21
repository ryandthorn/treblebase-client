import React from "react";
import { shallow } from "enzyme";
import Dropdown from "./Dropdown";

const setUp = (props = {}) => {
  const component = shallow(<Dropdown {...props} />);
  return component;
};

describe("Dropdown", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("renders without crashing", () => {
    const wrapper = component.find("nav");
    expect(wrapper.length).toBe(1);
  });
  it("should render a Link", () => {
    const wrapper = component.find("Link");
    expect(wrapper.length).toBe(1);
  });
});
