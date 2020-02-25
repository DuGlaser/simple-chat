import React from "react";
import FriendCard from "../common/Card/FriendCard";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../config/firebaseConfig";

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
            <FriendCard
              width="200px"
              height="40px"
              key={friend.id}
              name={friend.name}
              src={friend.avater}
              roomId={friend.roomId}
            />
          );
        })}
      </>
    );
  } else if (error) {
    return <div>error</div>;
  } else if (loading) {
    return <div>loading...</div>;
  }
};

export default FriendsList;
