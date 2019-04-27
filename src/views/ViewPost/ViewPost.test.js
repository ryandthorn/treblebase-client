import React from "react";
import { shallow } from "enzyme";
import ViewPost from "./ViewPost";

describe("ViewPost", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<ViewPost />);
    expect(wrapper.length).toEqual(1);
  });
});
