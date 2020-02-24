import React from "react";
import App from "./App";
import { mount } from "enzyme";

test("renders learn react link", () => {
  const wrapper = mount(<App />);
  console.log(wrapper.debug());
  // [WIP]firebaseとの通信があるため
  expect(wrapper.find("div").length).toBe(1);
});
