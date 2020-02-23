import React from "react";
import Side from "./side";
import AddFriendButton from "./addFriendButton";
import SideListTitle from "./sideListTitle";
import { mount } from "enzyme";

test("renders learn react link", () => {
  // shallow is not working
  // https://github.com/emotion-js/emotion/issues/1372
  const wrapper = mount(<Side />);
  expect(wrapper.find(AddFriendButton).length).toBe(1);
  expect(wrapper.find(SideListTitle).length).toBe(1);
});
