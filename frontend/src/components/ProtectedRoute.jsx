import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const ProtectedRoute = ({ roles = [], children }) => {
  const { isAuthenticated, user, ready } = useAuth();

  if (!ready) return null;

  if (!isAuthenticated) return <Navigate to="/auth/login" replace />;

  if (roles.length && (!user || !roles.includes(user.role))) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;