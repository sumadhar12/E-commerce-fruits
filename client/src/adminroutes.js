// src/admin/components/AdminLayout.js
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import "../admin.css";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-container">
      <AdminNavbar />
      <div className="admin-body">
        <AdminSidebar />
        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
}
