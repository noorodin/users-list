import React from 'react';
import './UserInfo.css';

function UserInfo({ user }) {
  return (
    <article className="user">
      <img className="avatar" src={user.avatar} alt={user.first_name}></img>
      <div className="user-name">
        <span className="first-name">{user.first_name}</span>
        <span>{user.last_name}</span>
      </div>
      <span>{user.email}</span>
    </article>
  );
}

export default UserInfo;
