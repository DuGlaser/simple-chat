import React from "react";
import RoomHeader, { RoomName } from "./roomHeader";
import { mount } from "enzyme";

test("renders learn react link", () => {
  // shallow is not working
  // https://github.com/emotion-js/emotion/issues/1372
  const wrapper = mount(<RoomHeader roomName={"DuGlaser"} />);
  expect(wrapper.find(RoomName).text()).toBe("DuGlaser");
});
