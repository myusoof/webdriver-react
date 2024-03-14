import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRequired = () => {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default AuthRequired;
