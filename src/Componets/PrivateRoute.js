import React from "react";

import { Navigate, useLocation } from "react-router-dom";
import GetUser from "../hooks/GetUser";
import LoadingSpiners from "./LoadingSpiners";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = GetUser();

  let location = useLocation();
  if (loading) {
    return <LoadingSpiners loading={loading} height={"90vh"} />;
  }
  if (!user?.userPhoneNumber) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
