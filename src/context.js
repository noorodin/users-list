import React from "react";
const UsersContext = React.createContext({
    users: [],
    updateUsersList: () => { }
});

export { UsersContext };