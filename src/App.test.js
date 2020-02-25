import React from "react";
import App from "./App";
import { mount, shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.debug());
  // [WIP]firebaseとの通信があるため
});
