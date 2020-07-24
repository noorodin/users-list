import React from 'react';
import './Users.css';

function Users() {
  const [loading, setLoading] = React.useState(false);
  const [usersList, setUsersList] = React.useState([]);

  React.useEffect(() => {
    let apiParameters = {
      "page": 1,
      "per_page": 8,
    };
    getUsersList(apiParameters);
  }, []);

  const getUsersList = ({ page, per_page }) => {
    setLoading({ loading: true });

    fetch(`https://reqres.in/api/users?page=${page}&per_page=${per_page}`)
      .then(res => res.json())
      .then(
        (res) => {
          console.log("response: ", res);
          setLoading(false);
          setUsersList(res.data);
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
              usersList && usersList.map((user, i) => {
                return <article className="user" key={user.id}>
                  <img className="avatar" src={user.avatar}></img>
                  <div className="user-name">
                    <span className="first-name">{user.first_name}</span>
                    <span>{user.last_name}</span>
                  </div>
                  <span>{user.email}</span>
                </article>
              })
            }
          </section>
      }
    </div>
  );
}

export default Users;
