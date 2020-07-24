import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Users from './components/Users/Users';

function App() {
  return (
    <Router>
      <div className="home-page">
        <Switch>
          <Route path="/">
            <Users />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
