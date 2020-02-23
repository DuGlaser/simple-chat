import React from "react";
import styled from "@emotion/styled";

export const Div = styled.div(
  {
    margin: "0",
    padding: "0"
  },
  props => ({
    width: props.width,
    height: props.height
  })
);

export const Img = styled.img({
  height: "100%"
});

export const Name = styled.p(
  {
    // TODO: ADD font size etc...
    // fontsize: "16px"
  },
  props => ({
    lineHeight: props.height
  })
);

const FriendCard = props => {
  return (
    <Div {...props}>
      <Img src={props.src} />
      <Name>{props.name}</Name>
    </Div>
  );
};

export default FriendCard;
