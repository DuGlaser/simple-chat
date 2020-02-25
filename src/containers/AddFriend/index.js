import React, { useState } from "react";
import AddFriendComponent from "../../components/AddFriend/addFriend";
import { db } from "../../config/firebaseConfig";
import { useCollectionData } from "react-firebase-hooks/firestore";

const AddFriendContainer = () => {
  const [userName, setUserName] = useState("");

  const [users, loading, error] = useCollectionData(
    db.collection("users").where("name", "==", String(userName)),
    { idField: "id" }
  );

  console.log(users);

  return (
    <>
      <AddFriendComponent
        setUserName={setUserName}
        users={users}
        loading={loading}
        error={error}
      />
    </>
  );
};

export default AddFriendContainer;
