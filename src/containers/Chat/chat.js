import React from "react";
import { useParams } from "react-router-dom";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase";
import ChatComponent from "../../components/Chat/chat";
import { db } from "../../config/firebaseConfig";

const ChatContainer = () => {
  const { roomId } = useParams();
  // const msg = useMessage("UxAPzhs1Mxz1TUnqQo1M");
  const [values, loading, error] = useCollectionData(
    db
      .collection("rooms")
      // TODO:ADD router
      .doc("UxAPzhs1Mxz1TUnqQo1M")
      .collection("chats")
      .orderBy("time", "desc"),
    { idField: "id" }
  );

  return <ChatComponent values={values} loading={loading} />;
};

export default ChatContainer;
