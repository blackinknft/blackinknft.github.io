import React from 'react';
import './css/App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ConnectWrapper from './pages/ConnectWrapper';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/connect'>
            <ConnectWrapper></ConnectWrapper>
          </Route>

          <Route path='/'>
            <Home></Home>
          </Route>

          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
