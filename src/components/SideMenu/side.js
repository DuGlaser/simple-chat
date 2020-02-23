import React from "react";
import AddFriendButton from "./addFriendButton";
// import FriendsList from "./friendsList";
import SideListTitle from "./sideListTitle";
import styled from "@emotion/styled";

const Div = styled.div({
  width: "280px",
  height: "100vh",
  backgroundColor: "#E53170"
});

const Space = styled.div({
  width: "100%",
  height: "54px"
});

const Side = friends => {
  return (
    <Div>
      <Space />
      <AddFriendButton />
      <Space />
      <SideListTitle />
      {/* <FriendsList friends={friends} /> */}
    </Div>
  );
};

export default Side;
