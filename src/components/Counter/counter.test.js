import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Counter from "./";

describe("Counter component", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Counter />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("starts witn a count of 0", () => {
    const wrapper = shallow(<Counter />);
    const text = wrapper.find("p").text();
    expect(text).toEqual("Current count: 0");
  });

  it("can increment the count when the button is clicked", () => {
    const wrapper = shallow(<Counter />);
    const incrementBtn = wrapper.find("Button.increment");
    incrementBtn.simulate("click");
    const text = wrapper.find("p").text();
    expect(text).toEqual("Current count: 1");
  });

  it("can decrement the count when the button is clicked", () => {
    const wrapper = shallow(<Counter />);
    const decrementBtn = wrapper.find("Button.decrement");
    decrementBtn.simulate("click");
    const text = wrapper.find("p").text();
    expect(text).toEqual("Current count: -1");
  });
});
