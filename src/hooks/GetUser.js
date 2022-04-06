import React, { useState, useEffect } from "react";
import { getUserApi } from "../API";

const GetUser = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("access_token");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (token) {
      const res = await getUserApi();
      if (res?.error.true === "") {
        setLoading(false);
      } else {
        setUser(res.data);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return {
    user,
    setUser,
    loading,
    setLoading,
  };
};

export default GetUser;
