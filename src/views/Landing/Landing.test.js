import React from "react";
import { shallow } from "enzyme";
import Landing from "./Landing";

const setUp = () => {
  const component = shallow(<Landing />);
  return component;
};

describe("Landing", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("renders without crashing", () => {
    const wrapper = component;
    expect(wrapper.length).toBe(1);
  });
});
