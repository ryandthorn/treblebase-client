import React from "react";
import { shallow } from "enzyme";
import FilterPosts from "./FilterPosts";

describe("FilterPosts", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<FilterPosts />);
    expect(wrapper.length).toEqual(1);
  });
});
