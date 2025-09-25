import React from 'react';
import './checkout.css';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  const handlePayNow = () => {
    navigate('/payment'); // Ensure that /payment route exists in your App.js
  };

  return (
    <div className="checkout-container" style={styles.container}>
      {/* Left Side - Form Details */}
      <div className="checkout-left" style={styles.left}>
        <h2 style={styles.heading}>Checkout</h2>
        <form style={styles.form}>
          <label style={styles.label}>Name:</label>
          <input type="text" placeholder="Your Name" style={styles.input} />

          <label style={styles.label}>Email:</label>
          <input type="email" placeholder="you@example.com" style={styles.input} />

          <label style={styles.label}>Address:</label>
          <textarea placeholder="Your Address" style={styles.textarea}></textarea>

          <label style={styles.label}>Payment Method:</label>
          <select style={styles.input}>
            <option>Cash on Delivery</option>
            <option>Credit/Debit Card (Demo)</option>
          </select>
        </form>
      </div>

      {/* Right Side - Order Summary */}
      <div className="checkout-right" style={styles.right}>
        <h3 style={styles.summaryTitle}>Order Summary</h3>
        <div style={styles.summaryItem}>
          <p>Organic Dragon Fruit x 2</p>
          <p>₹500</p>
        </div>
        <hr />
        <div style={styles.totalRow}>
          <strong>Total:</strong>
          <strong>₹500</strong>
        </div>
        <button style={styles.payButton} onClick={handlePayNow}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Checkout;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8fdf7',
    minHeight: '100vh',
  },
  left: {
    flex: 1,
    marginRight: '40px',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  heading: {
    marginBottom: '20px',
    color: '#2c7a4b',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    margin: '10px 0 5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    minHeight: '60px',
    resize: 'vertical',
  },
  right: {
    flex: 0.8,
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  summaryTitle: {
    marginBottom: '20px',
    color: '#333',
  },
  summaryItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '18px',
    marginTop: '10px',
  },
  payButton: {
    marginTop: '20px',
    width: '100%',
    padding: '12px',
    backgroundColor: '#34d399',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
};
