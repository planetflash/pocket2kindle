import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import CounterList from "./";

describe("CounterList component", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<CounterList />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render two counters bt default", () => {
    const wrapper = shallow(<CounterList />);
    const counters = wrapper.find("Counter");

    expect(counters.length).toEqual(2);
  });

  it("can add more counters when we click the button", () => {
    const wrapper = shallow(<CounterList />);
    const button = wrapper.find("Button");
    button.simulate("click");
    const counters = wrapper.find("Counter");

    expect(counters.length).toEqual(3);
  });
});
