import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import User from './User';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Tinbot from './Tinbot';

function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log("USER is >>>", authUser);

      if (authUser) {
        // login
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        // logout
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
        
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/Hai">
            <Header backButton="/chat"></Header>
            <ChatScreen />
          </Route>
          <Route path="/chat/tinbot">
            <Header backButton="/chat"></Header>
            <Tinbot />
          </Route>
          <Route path='/user'>
            <Header backButton="/"></Header>
            <User></User>
          </Route>
          <Route path='/chat'>
            <Header backButton="/"></Header>
            <Chats></Chats>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/'>
            <Header></Header>
            <TinderCards></TinderCards>
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
