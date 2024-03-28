/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import IconSearch from "./Icons/IconSearch";
import IconDots from "./Icons/IconDots";

const Messenger = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/friends`)
      .then((res) => res.json())
      .then((data) => {
        setFriends(data.data);
      })
      .catch((error) => {
        console.error("Error fetching frineds:", error);
      });
  }, []);

  return (
    <div className="mt-3">
      <div className="h6 d-flex justify-content-between align-items-center me-3 ms-2">
        Kişiler
        <div>
          <button className="btn btn-dark">
            <IconSearch />
          </button>

          <button className="btn btn-dark">
            <IconDots />
          </button>
        </div>
      </div>
      <ul className="list-group">
        {friends?.map((friend, index) => (
          <li key={index} className="list-group-item">
            <img className="rounded-pill" src={friend?.img} />
            <span className="ms-2">{friend?.fullname}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messenger;
