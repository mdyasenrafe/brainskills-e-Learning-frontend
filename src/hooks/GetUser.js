import React, { useState, useEffect } from "react";
import { getUserApi } from "../API";

const GetUser = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getUserApi();
    if (res?.error.true === "") {
      setLoading(false);
    } else {
      setUser(res.data);
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
