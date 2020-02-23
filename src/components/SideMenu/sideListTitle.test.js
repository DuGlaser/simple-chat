import React from "react";
import SideListTitle, { P } from "./sideListTitle";
import { mount } from "enzyme";

test("renders learn react link", () => {
  // shallow is not working
  // https://github.com/emotion-js/emotion/issues/1372
  const wrapper = mount(<SideListTitle />);
  expect(wrapper.find(P).text()).toBe("Your Friends");
});
