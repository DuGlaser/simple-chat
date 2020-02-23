import React from "react";
import { Icon } from "@iconify/react";
import bxUserPlus from "@iconify/icons-bx/bx-user-plus";
import styled from "@emotion/styled";

export const Button = styled.button({
  width: "220px",
  height: "60px",
  borderTopRightRadius: "16px",
  backgroundColor: "#FFFFFE",
  boxShadow: "0px 4px 4px rgba(0,0,0,.25)",
  border: "none",
  display: "flex",
  color: "#e53170",
  textDecoration: "none",
  outline: "none",
  margin: "0 auto",
  "&:active": {
    transform: "translateY(4px)",
    boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.2)",
    border: "none"
  }
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
    <Button>
      <Icon icon={bxUserPlus} style={{ color: "#e53170", fontSize: "60px" }} />
      <P>ADD FRIEND!!</P>
    </Button>
  );
};

export default AddFriendButton;
