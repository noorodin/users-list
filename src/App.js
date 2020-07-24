import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
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
