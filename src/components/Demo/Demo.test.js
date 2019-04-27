import React from "react";
import { shallow } from "enzyme";
import Demo from "./index";

describe("Demo", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Demo />);
    expect(wrapper.length).toEqual(1);
  });
});
