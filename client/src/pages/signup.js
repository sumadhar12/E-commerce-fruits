import React, { useState } from "react";
import axios from "axios";
import "./auth.css";
import fruitbg from "../assets/fruit-bg.png"; // Make sure this path is valid

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await axios.post("https://e-commerce-fruits-backend.vercel.app/api/auth/signup", formData);
      if (res.data.message) {
        setMessage(res.data.message);
      } else {
        setMessage("Signup successful!");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-bg">
        <img src={fruitbg} alt="Fruit Splash Background" />
      </div>

      <div className="signup-form-container">
        <div className="signup-card">
          <h2>Create Account</h2>

          {/* ✅ Message Display */}
          {message && <p className="success-msg">{message}</p>}
          {error && <p className="error-msg">{error}</p>}

          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <button type="submit">Sign Up</button>
            <p className="login-link">
              Already have an account? <a href="/login">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
