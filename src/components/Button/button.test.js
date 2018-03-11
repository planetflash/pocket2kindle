import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Button from "./";

describe("Button component", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Button />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("shows the the correct text", () => {
    const testMessage = "test message";
    const wrapper = shallow(<Button text={testMessage} />);
    const text = wrapper.find(".text").text();

    expect(text).toBe(testMessage);
  });
});
