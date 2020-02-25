import React from "react";
import styled from "@emotion/styled";
import { Icon } from "@iconify/react";
import mailSend from "@iconify/icons-zmdi/mail-send";

const Div = styled.div({
  width: "100%",
  display: "flex",
  padding: "20px",
  borderTop: "1px solid #c4c4c4"
});

export const Input = styled.textarea({
  resize: "none",
  marginRight: "38px",
  whiteSpace: "normal",
  flexGrow: "1",
  borderRadius: "6px",
  border: "1px solid #d4d4d4",
  outline: "none",
  lineHeight: "1rem",
  "&:focus": {
    border: "1px solid #e53170",
    outline: "none"
  }
});

const SendForm = props => {
  return (
    <Div>
      <Input
        colos="50"
        rows="1"
        type="text"
        wrap="hard"
        placeholder="メッセージを入力してください"
        onBlur={e => {
          props.setMessage(e.target.value);
          e.target.value = "";
        }}
      />
      <Icon
        icon={mailSend}
        style={{ color: "#e53170", fontSize: "24px", cursor: "pointer" }}
        onClick={() => {
          props.sendMessage();
        }}
      />
    </Div>
  );
};

export default SendForm;
