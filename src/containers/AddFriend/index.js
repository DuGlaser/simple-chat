import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import AddFriendComponent from "../../components/AddFriend/addFriend";
import { db } from "../../config/firebaseConfig";
import { UserContext } from "../../context";
import { useCollectionData } from "react-firebase-hooks/firestore";

const AddFriendContainer = () => {
  const [userName, setUserName] = useState("");
  const myInfo = useContext(UserContext);

  const [users, loading, error] = useCollectionData(
    db.collection("users").where("name", "==", String(userName)),
    { idField: "id" }
  );

  const addFriendfunc = index => {
    const roomId = uuidv4();
    db.collection("users")
      .doc(myInfo.uid)
      .collection("friends")
      .add({
        avater: users[index].avater,
        name: users[index].name,
        id: users[index].id,
        roomId: roomId
      });
    db.collection("users")
      .doc(users[index].id)
      .collection("friends")
      .add({
        avater: myInfo.photoURL,
        name: myInfo.displayName,
        id: myInfo.uid,
        roomId: roomId
      });
    db.collection("rooms")
      .doc(roomId)
      .set({});
  };

  console.log(users);
  return (
    <>
      <AddFriendComponent
        setUserName={setUserName}
        users={users}
        loading={loading}
        error={error}
        addFriend={addFriendfunc}
      />
    </>
  );
};

export default AddFriendContainer;
