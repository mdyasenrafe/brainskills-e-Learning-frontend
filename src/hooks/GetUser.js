import React, { useState } from "react";

const GetUser = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getInstructor();
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
