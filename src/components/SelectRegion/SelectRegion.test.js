import React from "react";
import { shallow } from "enzyme";
import SelectRegion from "./SelectRegion";

describe("SelectRegion", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<SelectRegion />);
    expect(wrapper.length).toEqual(1);
  });
});
