import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="top-bar">
        <span>FREE Express International Delivery + EASY Returns</span>
        <span>Call Us: +123 456 7890</span>
      </div>

      <nav className="main-navbar">
        <div className="logo">Organic Fruits</div>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-icons">
          <Link to="/login" title="Login">👤</Link>
          <Link to="/wishlist" title="Wishlist">❤️</Link>
          <Link to="/cart" title="Cart">🛒</Link>
        </div>
      </nav>
    </>
  );
}
