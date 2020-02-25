import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import bxUserPlus from "@iconify/icons-bx/bx-user-plus";

export const Div = styled.div(
  {
    margin: "30px auto 0",
    padding: "0",
    display: "flex"
  },
  props => ({
    width: props.width,
    height: props.height
  })
);

export const Img = styled.img({
  height: "100%",
  borderRadius: "16px",
  marginRight: "30px"
});

export const Name = styled.p(
  {
    // TODO: ADD font size etc...
    fontSize: "36px",
    fontWeight: "bold",
    color: "#fffffe",
    textAlign: "center"
  },
  props => ({
    lineHeight: props.height,
    color: props.color
  })
);

export const Space = styled.div({
  flexGrow: "1"
});

export const AddButtonArea = styled.div({
  width: "15%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

export const AddButton = styled.button({
  width: "100%",
  height: "80%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#E53170",
  borderRadius: "16px",
  outline: "none",
  boxShadow: "0px 4px 4px rgba(0,0,0,.25)",
  "&:active": {
    transform: "translateY(4px)",
    boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.2)",
    border: "none"
  }
});

const UserCard = props => {
  return (
    <Div {...props}>
      <Img src={props.src} />
      <Name {...props}>{props.name}</Name>
      <Space />
      <AddButtonArea>
        <AddButton>
          <Icon
            icon={bxUserPlus}
            style={{ color: "#fffffe", fontSize: "60px", height: "100%" }}
          />
        </AddButton>
      </AddButtonArea>
    </Div>
  );
};

export default UserCard;
