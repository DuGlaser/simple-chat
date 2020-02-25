import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Div = styled.div(
  {
    margin: "0 auto",
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
  marginRight: "16px"
});

export const Name = styled.p(
  {
    // TODO: ADD font size etc...
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fffffe"
  },
  props => ({
    lineHeight: props.height
  })
);

const FriendCard = props => {
  return (
    <Link
      to={`/chat/${props.roomId}/${props.name}`}
      style={{ textDecoration: "none" }}
    >
      <Div {...props}>
        <Img src={props.src} />
        <Name {...props}>{props.name}</Name>
      </Div>
    </Link>
  );
};

export default FriendCard;
