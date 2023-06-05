import React, { useEffect, useState } from "react";
import axios from "axios";

const DisplayUser = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  console.log("user", user);
  const getUser = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("https://randomuser.me/api/");

      setUser(data.results[0]);
    } catch (err) {
      console.log("ERROR", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <div>USER'S DETAILS</div>
      <div>
        Name: {user.name.title} {user.name.first} {user.name.last}{" "}
      </div>
      <div>Gender: {user.gender}</div>
      <div>email: {user.email}</div>
      <div>Age: {user.dob.age} yrs</div>
    </div>
  );
};
export default DisplayUser;
