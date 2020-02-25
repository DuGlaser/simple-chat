import React from "react";
import styled from "@emotion/styled";

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
  borderRadius: "12px",
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
    <Div {...props}>
      <Img src={props.src} />
      <Name {...props}>{props.name}</Name>
    </Div>
  );
};

export default FriendCard;
