import React from "react";
import FriendCard, { Div, Name } from "./FriendCard";
import { mount } from "enzyme";

const Card = () => {
  return <FriendCard width="100px" height="300px" name="DuGlaser" />;
};

test("renders learn react link", () => {
  // shallow is not working
  // https://github.com/emotion-js/emotion/issues/1372
  const wrapper = mount(<Card />);
  expect(wrapper.find(FriendCard).length).toBe(1);
  expect(wrapper.find(Name).length).toBe(1);
  expect(wrapper.find(Div).length).toBe(1);
});
