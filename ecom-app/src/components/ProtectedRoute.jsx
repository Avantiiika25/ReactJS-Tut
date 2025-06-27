import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  // TODO: Get authentication token from Redux store using useSelector
  const token = useSelector((state) => state.auth.token);
  
  // TODO: Check if token exists; if yes, return children; otherwise, redirect to login page
  return token ? children : <Navigate to="/login" />
};

export default ProtectedRoute;










