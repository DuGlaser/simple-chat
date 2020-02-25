import React from "react";
import styled from "@emotion/styled";

export const Header = styled.header({
  width: "100%",
  padding: "30px",
  borderBottom: "1px solid #c4c4c4"
});

export const RoomName = styled.p({
  lineHeight: "20px",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0"
});

const RoomHeader = props => {
  return (
    <Header>
      <RoomName>{props.roomName}</RoomName>
    </Header>
  );
};

export default RoomHeader;
