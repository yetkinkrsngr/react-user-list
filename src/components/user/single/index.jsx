import React from "react";
import "./index.css";
const SingleUser = ({ user }) => {
  return (
    <li key={user.id.name}>
      <div className="single-user">
        <img src={user.picture.large} alt="" />
        <div className="user-info">
          <h3>
            {user.name.first} {user.name.last}
          </h3>
          <p className="user-mail">
            <span className="user-mail-bold">Email :</span> {user.email}
          </p>
          <p className="user-location">
            {user.location.country} | {user.location.city}
          </p>
        </div>
      </div>
    </li>
  );
};

export default SingleUser;
