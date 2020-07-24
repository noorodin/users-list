import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import User from './containers/User/User';
import Users from './containers/Users/Users';
import { UsersContext } from './context';

function App() {
  const [users, setUsers] = useState([]);
  
  const updateUsersList = (users) => {
    setUsers(users);
  }
  
  return (
    <UsersContext.Provider value={{ users: users , updateUsersList: updateUsersList }} >
      <Router>
        <div className="home-page">
          <Switch>
            <Redirect exact from="/" to="/users" />
            <Route path="/users" component={Users} />
            <Route path="/user/:id" component={User} />
          </Switch>
        </div>
      </Router>
    </UsersContext.Provider>
  );
}

export default App;
