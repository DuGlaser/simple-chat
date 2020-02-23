import React from "react";
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
  return (
    <Div>
      <RoomHeader roomName="DuGlaser" />
      <ChatArea>
        {props.loading && <p>loading</p>}
        {!props.loading &&
          props.values
            .reverse()
            .map(value => <MessageTile message={value.message} />)}
      </ChatArea>
      <SendForm />
    </Div>
  );
};

export default ChatComponent;
