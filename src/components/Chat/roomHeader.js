import React from "react";
import styled from "@emotion/styled";

export const Header = styled.header({
  width: "100%",
  height: "80px",
  padding: "30px"
});

export const RoomName = styled.p({
  lineHeight: "20px",
  fontSize: "18px",
  fontWeight: "bold"
});

const RoomHeader = props => {
  return (
    <Header>
      <RoomName>{props.roomName}</RoomName>
    </Header>
  );
};

export default RoomHeader;
