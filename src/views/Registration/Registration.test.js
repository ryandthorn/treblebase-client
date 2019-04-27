import React from "react";
import { shallow } from "enzyme";
import Registration from "./Registration";

describe("Registration", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Registration />);
    expect(wrapper.length).toEqual(1);
  });
});
