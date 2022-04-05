import React, { useState, useEffect } from "react";
import { getUserApi } from "../API";

const GetUser = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getUserApi();
    if (res?.error.true === "") {
    } else {
      setUser(res.data);
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
