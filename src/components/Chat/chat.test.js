import React from "react";
import { mount } from "enzyme";
import ChatComponent from "./chat";
import RoomHeader from "./roomHeader";
import SendForm from "./sendForm";
import MessageTile from "./messageTile";

test("renders learn react link", () => {
  // shallow is not working
  // https://github.com/emotion-js/emotion/issues/1372
  const wrapper = mount(
    <ChatComponent loading={false} values={[{ message: 1 }, { message: 2 }]} />
  );
  expect(wrapper.find(RoomHeader).length).toBe(1);
  expect(wrapper.find(SendForm).length).toBe(1);
  expect(wrapper.find(MessageTile).length).toBe(2);
});
