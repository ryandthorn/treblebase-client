import React from "react";
import { shallow } from "enzyme";
import Dropdown from "./Dropdown";

const setUp = () => {
  const component = shallow(<Dropdown />);
  return component;
};

describe("Dropdown", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("renders without crashing", () => {
    const wrapper = component;
    expect(wrapper.length).toBe(1);
  });
});
