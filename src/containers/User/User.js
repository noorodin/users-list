import React from 'react';
import { Link, useParams } from "react-router-dom";
import UserInfo from '../../components/UserInfo/UserInfo';
import './User.css';

function User(props) {
  let { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    getUserList(id);
  }, []);

  const getUserList = (id) => {
    setLoading(true);

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
          <section className="content-wrapper">
            <Link to={`/users`}>Back to Users list</Link>
            <UserInfo user={user} />
          </section>
      }
    </div>
  );
}

export default User;
