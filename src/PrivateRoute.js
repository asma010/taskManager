import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const loginCheck = localStorage.getItem("isLoggedIn");

  if (!loginCheck) {
    return <Navigate to="/login" />;
  }
  return children;
}