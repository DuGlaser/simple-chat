import React from "react";
import { mount } from "enzyme";
import SendForm, { Input } from "./sendForm";

test("renders learn react link", () => {
  // shallow is not working
  // https://github.com/emotion-js/emotion/issues/1372
  const wrapper = mount(<SendForm />);
  expect(wrapper.find(Input).length).toBe(1);
});
