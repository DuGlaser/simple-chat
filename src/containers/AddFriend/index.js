import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import AddFriendComponent from "../../components/AddFriend/addFriend";
import { db } from "../../config/firebaseConfig";
import { UserContext } from "../../context";
import { useCollectionData } from "react-firebase-hooks/firestore";

const AddFriendContainer = () => {
  const [userName, setUserName] = useState("");
  const myInfo = useContext(UserContext);

  const [result_user, loading, error] = useCollectionData(
    db.collection("users").where("name", "==", String(userName)),
    { idField: "id" }
  );
  console.log(result_user);

  const addFriendfunc = index => {
    const roomId = uuidv4();
    db.collection("users")
      .doc(myInfo.uid)
      .collection("friends")
      .add({
        avater: result_user[index].avater,
        name: result_user[index].name,
        id: result_user[index].id,
        roomId: roomId
      });
    db.collection("users")
      .doc(result_user[index].id)
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

  return (
    <>
      <AddFriendComponent
        setUserName={setUserName}
        result_user={result_user}
        loading={loading}
        error={error}
        addFriend={addFriendfunc}
      />
    </>
  );
};

export default AddFriendContainer;
