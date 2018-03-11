import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Error from "./";

describe("Error component", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Error message={null} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("shows the message text when there is a message", () => {
    const testMessage = "test message";
    const wrapper = shallow(<Error message={testMessage} />);
    const text = wrapper.find(".message").text();

    expect(text).toBe(testMessage);
  });

  it("does not show the message text when there is a no message", () => {
    const wrapper = shallow(<Error message={null} />);
    const text = wrapper.find(".message").text();

    expect(text).toBe("");
  });
});
