import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../src/context/AuthContext";

const PrivateRoute = ({ children }) => {
  const loginCheck = localStorage.getItem("isLoggedIn");
  return loginCheck ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
