import React from "react";
import { shallow } from "enzyme";
import Photos from "./Photos";

describe("Photos", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Photos />);
    expect(wrapper.length).toEqual(1);
  });
});
