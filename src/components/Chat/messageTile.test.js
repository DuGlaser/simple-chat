import React from "react";
import { mount } from "enzyme";
import MessageTile, { Avater, UserName, Message } from "./messageTile";

test("renders learn react link", () => {
  // shallow is not working
  // https://github.com/emotion-js/emotion/issues/1372
  const wrapper = mount(
    <MessageTile src={""} message={"hoge"} name={"DuGlaser"} />
  );
  expect(wrapper.find(Avater).length).toBe(1);
  expect(wrapper.find(UserName).text()).toBe("DuGlaser");
  expect(wrapper.find(Message).text()).toBe("hoge");
});
