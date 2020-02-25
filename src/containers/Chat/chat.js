import React from "react";
import { useParams } from "react-router-dom";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatComponent from "../../components/Chat/chat";
import { db } from "../../config/firebaseConfig";

const ChatContainer = () => {
  const { roomId } = useParams();
  const { roomName } = useParams();
  const [values, loading, error] = useCollectionData(
    db
      .collection("rooms")
      .doc(roomId)
      .collection("chats")
      .orderBy("time", "asc"),
    { idField: "id" }
  );

  return (
    <ChatComponent
      values={values}
      loading={loading}
      roomName={roomName}
      roomId={roomId}
    />
  );
};

export default ChatContainer;
