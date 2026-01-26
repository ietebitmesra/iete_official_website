import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const ProtectedRoute = ({ roles = [], children }) => {
  const { user, loading, isAuthenticated } = useAuth();

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center py-10 text-sm text-[var(--muted)]">
        Verifying...
      </div>
    );
  }

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (roles.length && (!user || !roles.includes(user.role))) {
    return <Navigate to="/" replace />;
  }

  if (React.isValidElement(children)) {
    return React.cloneElement(children, { user });
  }

  return children;
};

export default ProtectedRoute;