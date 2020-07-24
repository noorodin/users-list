import React from 'react';

function Users() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    let apiParameters = {
      "page": 2,
      "per_page": 3,
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
          <div>Users</div>
      }
    </div>
  );
}

export default Users;
