import React from "react";
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const adminToken = localStorage.getItem("adminToken"); // adjust for your logic
  if (!adminToken) return <Navigate to="/admin/login" />;
  return children;
}
