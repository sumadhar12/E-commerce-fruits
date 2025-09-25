// src/utils/RequireAuth.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ isAuthenticated, children }) => {
  const location = useLocation();

  if (!isAuthenticated) {
    // redirect to login and preserve current path
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
