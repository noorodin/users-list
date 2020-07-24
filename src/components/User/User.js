import React from 'react';
import './User.css';
import { Link, useParams } from "react-router-dom";

function User(props) {
  let { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    getUserList(id);
  }, []);

  const getUserList = (id) => {
    setLoading({ loading: true });

    fetch(`https://reqres.in/api/users/${id}`)
      .then(res => res.json())
      .then(
        (res) => {
          console.log("response: ", res);
          setUser(res.data);
          setLoading(false);
        },
        (err) => {
          console.log("error: ", err);
          setLoading(false);
        }
      )
  }

  return (
    <div>
      {
        loading ?
          <div className="loading">Loading ...</div>
          :
          <div className="user-wrapper">
            <Link to={`/users`}>Back to Users list</Link>
            <section className="user">
              <img className="avatar" src={user.avatar} alt={user.first_name}></img>
              <div className="user-name">
                <span className="first-name">{user.first_name}</span>
                <span>{user.last_name}</span>
              </div>
              <span>{user.email}</span>
            </section>
          </div>
      }
    </div>
  );
}

export default User;
