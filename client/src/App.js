// src/App.js
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import Shop from "./components/shop";
import Cart from "./components/cart";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Contact from "./components/contact";
import Checkout from "./components/checkout";
import RequireAuth from "./utils/RequireAuth";

import AdminLogin from "./pages/adminlogin"; // your existing admin login page
import adminRoutes from "./admin/adminRoutes";
import AdminRoute from "./admin/AdminRoute";
import AdminLayout from "./admin/components/AdminLayout";



import About from "./components/About"; // adjust path if needed

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        {/* 🌐 Public User Routes */}
        <Route path="/" element={<HeroSection />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        {/* ✅ New About Route */}
        <Route path="/about" element={<About />} />

        {/* 🔒 User Protected Routes */}
        <Route
          path="/cart"
          element={
            <RequireAuth isAuthenticated={isAuthenticated}>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequireAuth isAuthenticated={isAuthenticated}>
              <Checkout />
            </RequireAuth>
          }
        />

        {/* 🔐 Admin Login Route (Public) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* 🛡️ Admin Protected Routes */}
        {adminRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <AdminRoute>
                <AdminLayout>{element}</AdminLayout>
              </AdminRoute>
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
