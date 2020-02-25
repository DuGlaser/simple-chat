import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { UserContext } from "./context";
import Chat from "./components/Chat/index";
import styled from "@emotion/styled";
import Side from "./components/SideMenu/index";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";
import "firebase/auth";
import { db } from "./config/firebaseConfig";
import AddFriend from "./components/AddFriend/index";
import ClipLoader from "react-spinners/ClipLoader";
import { Icon } from "@iconify/react";
import bxLogIn from "@iconify/icons-bx/bx-log-in";

const Flex = styled.div({
  display: "flex",
  width: "100%"
});

const Center = styled.div({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

const Div2 = styled.div({
  width: "280px"
});

const Div8 = styled.div({
  width: "calc(100% - 280px)"
});

const Wrapper = styled.div({
  display: "flex",
  cursor: "pointer"
});

function App() {
  const [user, initialising, error] = useAuthState(firebase.auth());

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(snapshot => {
        console.log(snapshot.additionalUserInfo.isNewUser);
        if (snapshot.additionalUserInfo.isNewUser) {
          db.collection("users")
            .doc(snapshot.user.uid)
            .set({
              name: snapshot.user.displayName,
              id: snapshot.user.uid,
              avater: snapshot.user.photoURL
            });
        }
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  if (initialising) {
    return (
      <Center>
        <ClipLoader size="60px" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center>
        error
        <span role="img" aria-label="thinking">
          🤔
        </span>
      </Center>
    );
  }

  return (
    <BrowserRouter>
      {!user && (
        <Center>
          <Wrapper
            onClick={() => {
              login();
            }}
          >
            <div>Googleアカウントでログイン</div>
            <Icon icon={bxLogIn} />
          </Wrapper>
        </Center>
      )}

      {user && (
        <UserContext.Provider value={user}>
          <Flex>
            <Div2>
              <Side />
            </Div2>
            <Div8>
              {/* TODO:ADD router */}
              <Route path="/chat/:roomId/:roomName" component={Chat} />
              <Route exact path="/addfriend" component={AddFriend} />
            </Div8>
          </Flex>
        </UserContext.Provider>
      )}
    </BrowserRouter>
  );
}

export default App;
