import axios from "axios";
import React, { useEffect, useState } from "react";
import Userlist from "../component/Userlist";


const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
        setUsers(response.data)
    });
  }, []);
  return (
    <div>
      <h1>users</h1>
      <Userlist users={users}></Userlist>
    
    </div>
  );
};

export default Users;
