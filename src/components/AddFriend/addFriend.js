import React from "react";
import styled from "@emotion/styled";
import SearchForm from "./searchFrom";
import UserCard from "./userCard";

const Div = styled.div({});
const H1 = styled.h1({
  fontSize: "48px",
  fontWeight: "bold",
  textAlign: "center",
  "&:first-letter": {
    color: "#E53170"
  }
});

const Space = styled.div({
  width: "100%",
  height: "42px"
});

const UserList = styled.div({});

const AddFriendComponent = props => {
  return (
    <Div>
      <Space />
      <H1>友達を探してみよう</H1>
      <Space />
      <SearchForm setUserName={props.setUserName} />
      <UserList>
        {props.result_user !== undefined &&
          props.result_user.map((user, index) => {
            return (
              <UserCard
                width="80%"
                height="120px"
                name={user.name}
                src={user.avater}
                addFriend={props.addFriend}
                color="#000"
                key={user.id}
                id={user.id}
                index={index}
              />
            );
          })}
      </UserList>
    </Div>
  );
};

export default AddFriendComponent;
