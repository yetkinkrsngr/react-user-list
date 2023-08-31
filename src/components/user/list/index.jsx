import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
//components
import SingleUser from "../single";
import "./index.css";
//https://randomuser.me/api/?results=5
const UserList = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=2");
    console.log(response.data.results);
    setUsers(response.data.results);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="user-list">
      <ul>
        {users.map((user) => (
          <SingleUser user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
