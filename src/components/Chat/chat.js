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

const Chat = props => {
  return (
    <Div>
      <RoomHeader roomName="DuGlaser" />
      <ChatArea>
        {/* {props.message.map(message => ( */}
        {/*   <MessageTile message={message.body} /> */}
        {/* ))} */}
      </ChatArea>
      <SendForm />
    </Div>
  );
};

export default Chat;
