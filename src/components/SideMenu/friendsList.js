import React from "react";
import FriendCard from "../common/Card/FriendCard";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../config/firebaseConfig";
import { Link } from "react-router-dom";

const Space = styled.div({
  width: "100%",
  height: "20px"
});

const Div = styled.div({
  width: "80%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: ""
});

const override = css`
  border-color: red;
`;

const FriendsList = props => {
  const [friends, loading, error] = useCollectionData(
    db
      .collection("users")
      .doc(props.user.uid)
      .collection("friends"),
    { idField: "id" }
  );

  if (friends) {
    return (
      <>
        {friends.map(friend => {
          return (
            <React.Fragment key={friend.id}>
              <Space />
              <Link
                to={`/chat/${friend.roomId}/${friend.name}`}
                style={{ textDecoration: "none" }}
              >
                <FriendCard
                  width="200px"
                  height="40px"
                  key={friend.id}
                  name={friend.name}
                  src={friend.avater}
                  roomId={friend.roomId}
                />
              </Link>
            </React.Fragment>
          );
        })}
      </>
    );
  } else if (error) {
    return <div>error</div>;
  } else if (loading) {
    return (
      <Div>
        <PulseLoader
          size={"10px"}
          css={override}
          color={"#fffffe"}
          loading={loading}
        />
      </Div>
    );
  }
};

export default FriendsList;
