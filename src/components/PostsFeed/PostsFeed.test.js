import React from "react";
import { shallow } from "enzyme";
import PostsFeed from "./PostsFeed";

describe("PostsFeed", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<PostsFeed />);
    expect(wrapper.length).toEqual(1);
  });
});
