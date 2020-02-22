import React from "react";
import { Icon } from "@iconify/react";
import bxUserPlus from "@iconify/icons-bx/bx-user-plus";
import styled from "@emotion/styled";

export const Div = styled.div({
  width: "220px",
  height: "60px",
  borderTopRightRadius: "16px",
  backgroundColor: "#FFFFFE",
  boxShadow: "0px 4px 4px rgba(0,0,0,.25)",
  display: "flex",
  color: "#e53170"
});

// TODO: fontsize px -> rem
export const P = styled.p({
  display: "inline-block",
  lineHeight: "60px",
  margin: "0 auto",
  fontSize: "18px",
  fontWeight: "bold"
});

const AddFriendButton = () => {
  return (
    <Div>
      <Icon icon={bxUserPlus} style={{ color: "#e53170", fontSize: "60px" }} />
      <P>ADD FRIEND!!</P>
    </Div>
  );
};

export default AddFriendButton;
