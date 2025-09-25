// src/admin/components/AdminSidebar.js
import React from "react";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside style={{ width: "200px", background: "#f1f1f1", padding: "10px" }}>
      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/products/add">Add Product</Link></li>
        <li><Link to="/admin/orders">Manage Orders</Link></li>
        <li><Link to="/admin/users">Manage Users</Link></li>
      </ul>
    </aside>
  );
}
