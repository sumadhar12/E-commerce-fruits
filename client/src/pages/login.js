import React, { useState } from 'react';
import './login.css';
import loginImage from '../assets/login-illustration.png';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"; // Default redirect after login

  const BASE_URL = 'https://e-commerce-fruits-backend.vercel.app';

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = isAdmin ? { email, password, otp } : { email, password };
    const endpoint = isAdmin
      ? `${BASE_URL}/api/admin/login`
      : `${BASE_URL}/api/auth/login`;

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        alert(`✅ Login successful as ${isAdmin ? 'Admin' : 'User'}`);

        // ✅ Store token or login flag
        localStorage.setItem('token', data.token || 'dummyToken');

        // ✅ Redirect back to cart or home
        navigate('/cart');
      } else {
        alert(data.message || '❌ Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('🚨 Network error: Could not reach the server');
    } finally {
      setLoading(false);
    }
  };

  const handleSendOtp = () => {
    alert('OTP sent to your registered phone number');
    setShowOtpField(true);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="form-wrapper">
          <h2 className="heading">Login</h2>
          <p className="subheading">Welcome back! Please login to your account</p>

          <form onSubmit={handleLogin} className="login-form">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="admin-toggle">
              <input
                type="checkbox"
                id="admin"
                checked={isAdmin}
                onChange={() => {
                  setIsAdmin(!isAdmin);
                  setShowOtpField(false);
                }}
              />
              <label htmlFor="admin">Login as Admin</label>
            </div>

            {isAdmin && !showOtpField && (
              <button
                type="button"
                className="otp-btn"
                onClick={handleSendOtp}
                disabled={loading}
              >
                Send OTP
              </button>
            )}

            {isAdmin && showOtpField && (
              <>
                <label>OTP</label>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="otp-input"
                  required
                />
              </>
            )}

            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="bottom-text">
            Don&apos;t have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>

      <div className="login-right">
        <img src={loginImage} alt="Login Visual" />
        <div className="promo-text">
          <h1>Fresh & Organic</h1>
          <p>Enjoy shopping for healthy, delicious dragon fruits. Join us today!</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
