import React from "react";
import FriendCard, { Div, Name } from "./FriendCard";
import { mount, shallow } from "enzyme";

test("renders learn react link", () => {
  // shallow is not working
  // https://github.com/emotion-js/emotion/issues/1372
  const wrapper = shallow(
    <FriendCard width="200px" height="40px" name="DuGlaser" />
  );
  expect(wrapper.find(Div).length).toBe(1);
  expect(wrapper.find(Name).text()).toBe("DuGlaser");
});
