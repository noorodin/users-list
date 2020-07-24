import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import UserInfo from '../../components/UserInfo/UserInfo';
import { UsersContext } from '../../context';
import './Users.css';

function Users() {
  const usersContext = useContext(UsersContext);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (usersContext.users.length === 0) {
      let apiParameters = {
        "page": 1,
        "per_page": 8,
      };
      getUsersList(apiParameters);
    }
  }, []);

  const getUsersList = ({ page, per_page }) => {
    setLoading(true);

    fetch(`https://reqres.in/api/users?page=${page}&per_page=${per_page}`)
      .then(res => res.json())
      .then(
        (res) => {
          console.log("response: ", res);
          usersContext.updateUsersList(res.data);
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
          <section className="users-list-wrapper">
            {
              usersContext.users && usersContext.users.map((user, i) => {
                return <Link to={`/user/${user.id}`} key={user.id} className="user-wrapper">
                  <UserInfo user={user} />
                </Link>
              })
            }
          </section>
      }
    </div>
  );
}

export default Users;