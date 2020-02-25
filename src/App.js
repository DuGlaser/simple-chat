import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { UserContext } from "./context";
import Chat from "./components/Chat/index";
import styled from "@emotion/styled";
import Side from "./components/SideMenu/index";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";
import "firebase/auth";
import { db } from "./config/firebaseConfig";

const Flex = styled.div({
  display: "flex",
  width: "100%"
});

const Div2 = styled.div({
  width: "280px"
});

const Div8 = styled.div({
  flexGrow: "1"
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
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <BrowserRouter>
      {!user && (
        <button
          onClick={() => {
            login();
          }}
        >
          Google login
        </button>
      )}

      {user && (
        <UserContext.Provider value={user}>
          <Flex>
            <Div2>
              <Side />
            </Div2>
            <Div8>
              {/* TODO:ADD router */}
              <Route exact path="/" component={Home} />
              <Route path="/chat/:roomId/:roomName" component={Chat} />
            </Div8>
          </Flex>
        </UserContext.Provider>
      )}
    </BrowserRouter>
  );
}

const Home = () => {
  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <div>
      <Link to="/chat">Chat</Link>
      <button
        onClick={() => {
          logout();
        }}
      >
        Google logout
      </button>
    </div>
  );
};

export default App;
