import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Users from './components/Users/Users';
import User from './components/User/User';

function App() {
  return (
    <Router>
      <div className="home-page">
        <Switch>
          <Redirect exact from="/" to="/users" />
          <Route path="/users" component={Users} />
          <Route path="/user/:id" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
