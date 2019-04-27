import React from "react";
import { shallow } from "enzyme";
import NoMatch from "./NoMatch";

describe("NoMatch", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<NoMatch match={{ url: "#" }} />);
    expect(wrapper.length).toEqual(1);
  });
});
