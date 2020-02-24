import React, { useState } from "react";
import RoomHeader from "./roomHeader";
import styled from "@emotion/styled";
import MessageTile from "./messageTile";
import SendForm from "./sendForm";

const Div = styled.div({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column"
});

const ChatArea = styled.div({
  width: "100%",
  flexGrow: "1"
});

const ChatComponent = props => {
  const [message, setMessage] = useState();

  const sendMessage = () => {
    if (String(message).trim()) {
      console.log(message);
    }
  };
  return (
    <Div>
      <RoomHeader roomName="DuGlaser" />
      <ChatArea>
        {props.loading && <p>loading</p>}
        {!props.loading &&
          props.values.map(value => <MessageTile message={value.message} />)}
      </ChatArea>
      <SendForm setMessage={setMessage} sendMessage={sendMessage} />
    </Div>
  );
};

export default ChatComponent;
