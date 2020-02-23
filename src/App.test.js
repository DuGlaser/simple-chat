import React from "react";
import App from "./App";
import Side from "./components/SideMenu/side";
import { shallow } from "enzyme";

test("renders learn react link", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Side).length).toBe(1);
});
