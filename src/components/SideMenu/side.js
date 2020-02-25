import React from "react";
import AddFriendButton from "./addFriendButton";
import FriendsList from "./friendsList";
import FriendCard from "../common/Card/FriendCard";
import SideListTitle from "./sideListTitle";
import styled from "@emotion/styled";

const Div = styled.div({
  width: "280px",
  height: "100vh",
  backgroundColor: "#E53170",
  display: "flex",
  flexDirection: "column"
});

const Space = styled.div({
  width: "100%",
  height: "54px"
});

const FriendListArea = styled.div({
  flexGrow: 1,
  paddingBottom: "30px"
});

const LogInUser = styled.div({
  padding: "20px 0"
});

const SideComponent = props => {
  return (
    <Div>
      <Space />
      <AddFriendButton />
      <Space />
      <SideListTitle />
      <FriendListArea>
        <FriendsList user={props.user} />
      </FriendListArea>
      <LogInUser>
        <FriendCard
          width="80%"
          height="40px"
          src={props.user.photoURL}
          name={props.user.displayName}
        />
      </LogInUser>
    </Div>
  );
};

export default SideComponent;
