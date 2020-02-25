import React from "react";
import AddFriendButton from "./addFriendButton";
import FriendsList from "./friendsList";
import FriendCard from "../common/Card/FriendCard";
import SideListTitle from "./sideListTitle";
import styled from "@emotion/styled";
import firebase from "firebase/app";
import "firebase/auth";
import { Icon } from "@iconify/react";
import bxLogOut from "@iconify/icons-bx/bx-log-out";

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
  padding: "20px 10px",
  display: "flex"
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
        <Icon
          icon={bxLogOut}
          style={{ fontSize: "40px", marginLeft: "20px", color: "#fffffe" }}
          onClick={() => {
            firebase.auth().signOut();
          }}
        />
      </LogInUser>
    </Div>
  );
};

export default SideComponent;
