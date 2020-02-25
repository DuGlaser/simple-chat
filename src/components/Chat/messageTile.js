import React from "react";
import styled from "@emotion/styled";

export const Div = styled.div({
  width: "100%",
  padding: "24px",
  display: "flex",
  borderBottom: "1px solid #E5E5E5"
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
  flexGrow: "1",
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
  width: "100%",
  fontSize: "18px",
  margin: "0",
  whiteSpace: "pre-wrap"
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
