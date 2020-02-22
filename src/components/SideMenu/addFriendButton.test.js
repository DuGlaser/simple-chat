import React from "react";
import AddFriendButton, { Div, P } from "./addFriendButton";
import { mount } from "enzyme";

test("renders learn react link", () => {
  // shallow is not working
  // https://github.com/emotion-js/emotion/issues/1372
  const wrapper = mount(<AddFriendButton />);
  expect(wrapper.find(Div).length).toBe(1);
  expect(wrapper.find(P).text()).toBe("ADD FRIEND!!");
});
