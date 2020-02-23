import React from "react";
import { mount } from "enzyme";
import Chat from "./chat";
import RoomHeader from "./roomHeader";
import SendForm from "./sendForm";

test("renders learn react link", () => {
  // shallow is not working
  // https://github.com/emotion-js/emotion/issues/1372
  const wrapper = mount(<Chat />);
  expect(wrapper.find(RoomHeader).length).toBe(1);
  expect(wrapper.find(SendForm).length).toBe(1);
});
