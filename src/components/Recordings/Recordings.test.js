import React from "react";
import { shallow } from "enzyme";
import Recordings from "./Recordings";

describe("Recordings", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Recordings />);
    expect(wrapper.length).toEqual(1);
  });
});
