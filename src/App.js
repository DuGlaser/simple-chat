import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Chat from "./components/Chat/chat";
import styled from "@emotion/styled";
import Side from "./components/SideMenu/side";

const Flex = styled.div({
  display: "flex"
});

const Div2 = styled.div({
  width: "280px"
});

const Div8 = styled.div({
  flexGrow: "1"
});

function App() {
  return (
    <BrowserRouter>
      <Flex>
        <Div2>
          <Side />
        </Div2>
        <Div8>
          {/* TODO:ADD router */}
          <Chat />
        </Div8>
      </Flex>
    </BrowserRouter>
  );
}

export default App;
