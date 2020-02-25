import React, { useState, useContext } from "react";
import RoomHeader from "./roomHeader";
import styled from "@emotion/styled";
import MessageTile from "./messageTile";
import SendForm from "./sendForm";
import { db } from "../../config/firebaseConfig";
import { UserContext } from "../../context";
import ClipLoader from "react-spinners/ClipLoader";

const Div = styled.div({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column"
});

const ChatArea = styled.div({
  width: "100%",
  flexGrow: "1",
  overflowY: "scroll"
});

const Center = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

const ChatComponent = props => {
  const [message, setMessage] = useState();
  const user = useContext(UserContext);

  const sendMessage = () => {
    if (String(message).trim()) {
      db.collection("rooms")
        .doc(props.roomId)
        .collection("chats")
        .add({
          name: user.displayName,
          avater: user.photoURL,
          message: message,
          time: new Date()
        });
    }
  };

  return (
    <Div>
      <RoomHeader roomName={props.roomName} />
      <ChatArea>
        {props.loading && (
          <Center>
            <ClipLoader />
          </Center>
        )}
        {!props.loading &&
          props.values.map(value => (
            <MessageTile
              key={value.id}
              src={value.avater}
              name={value.name}
              message={value.message}
            />
          ))}
      </ChatArea>
      <SendForm setMessage={setMessage} sendMessage={sendMessage} />
    </Div>
  );
};

export default ChatComponent;
