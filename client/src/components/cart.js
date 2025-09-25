// src/components/cart.js
import React from 'react';
import './cart.css';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems, updateQuantity } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const discount = 0.1 * subtotal;
  const total = subtotal - discount;

  return (
    <div className="cart-container">
      <div className="cart-left">
        <h2>Shopping Bag</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>₹{item.price} × {item.quantity}</p>
                <div className="qty-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
              <div className="cart-total">₹{item.price * item.quantity}</div>
            </div>
          ))
        )}
      </div>

      <div className="cart-right">
        <h3>Cart Summary</h3>
        <div className="summary-box">
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Discount:</span>
            <span>- ₹{discount.toFixed(2)}</span>
          </div>
          <hr />
          <div className="summary-row total">
            <span>Total:</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <input type="text" className="coupon-input" placeholder="Coupon Code" />
          <button className="apply-btn">Apply</button>
          <Link to="/checkout">
  <button className="checkout-btn">Checkout</button>
</Link>

        </div>
      </div>
    </div>
  );
}
