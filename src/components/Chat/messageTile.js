import React from "react";
import styled from "@emotion/styled";

export const Div = styled.div({
  width: "100%",
  padding: "24px",
  display: "flex",
  borderBottom: "1px solid #E5E5E5",
  boxSizing: "border-box"
});

export const Avater = styled.img({
  height: "60px",
  width: "60px",
  flexShrink: "0",
  marginRight: "12px",
  borderRadius: "16px"
});

export const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column"
});

export const UserName = styled.p({
  fontsize: "18px",
  fontWeight: "bold",
  margin: "0",
  marginBottom: "5px",
  color: "#E53170"
});

export const Message = styled.p({
  fontSize: "18px",
  margin: "0"
});

const MessageTile = props => {
  return (
    <Div>
      <Avater src={props.src}></Avater>
      <Wrapper>
        <UserName>{props.name}</UserName>
        <Message>{props.message}</Message>
      </Wrapper>
    </Div>
  );
};

export default MessageTile;
