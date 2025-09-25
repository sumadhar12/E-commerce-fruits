// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Router here
import { CartProvider } from './context/CartContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* ✅ ONLY ONE Router here */}
  <CartProvider>
        <App />
      </CartProvider>
  </BrowserRouter>
);
