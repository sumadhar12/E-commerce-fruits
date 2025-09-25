import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import ManageOrders from "./pages/ManageOrders";
import ManageUsers from "./pages/ManageUsers";

const adminRoutes = [
  { path: "/admin/dashboard", element: <Dashboard /> },
  { path: "/admin/products/add", element: <AddProduct /> },
  { path: "/admin/orders", element: <ManageOrders /> },
  { path: "/admin/users", element: <ManageUsers /> },
];

export default adminRoutes;
