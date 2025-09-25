// src/components/shop.js

import React from 'react';
import './shop.css';
import redDragon from '../assets/red-dragon.jpg';
import whiteDragon from '../assets/white-dragon.jpg';
import yellowDragon from '../assets/yellow-dragon.png';
import specialWhiteDragon from '../assets/special white-dragon.png';
import { useCart } from '../context/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const productData = [
  {
    id: 1,
    name: 'Red Dragon Fruit',
    category: 'Fruits',
    price: 150,
    oldPrice: 180,
    image: redDragon,
    rating: 4.5,
    reviews: 50
  },
  {
    id: 2,
    name: 'White Dragon Fruit',
    category: 'Fruits',
    price: 180,
    oldPrice: 200,
    image: whiteDragon,
    rating: 4.7,
    reviews: 34
  },
  {
    id: 3,
    name: 'Yellow Dragon Fruit',
    category: 'Fruits',
    price: 170,
    oldPrice: 190,
    image: yellowDragon,
    rating: 4.6,
    reviews: 42
  },
  {
    id: 4,
    name: 'Special White Dragon Fruit',
    category: 'Fruits',
    price: 210,
    oldPrice: 250,
    image: specialWhiteDragon,
    rating: 4.9,
    reviews: 29
  }
];

export default function Shop() {
  const { addToCart } = useCart();

  const handleAddToCart = (item, quantity) => {
    addToCart(item, quantity);
    toast.success(`${item.name} added to cart!`, {
      position: 'bottom-right',
      autoClose: 2000
    });
  };

  return (
    <>
      <div className="shop-container">
        <div className="shop-banner">
          <h2 className="shop-title">Top Products</h2>
        </div>
        <div className="product-grid">
          {productData.map(item => (
            <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="category">{item.category}</div>
              <h3>{item.name}</h3>

              <div className="rating">
                ⭐ {item.rating}
                <span className="review-count">({item.reviews} reviews)</span>
              </div>

              <div className="price-info">
                <span className="price">₹{item.price}/kg</span>
                <span className="old-price">₹{item.oldPrice}/kg</span>
              </div>

              <div className="quantity-cart">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="qty-input"
                  id={`qty-${item.id}`}
                />
                <button
                  className="add-cart"
                  onClick={() => {
                    const qty = parseInt(document.getElementById(`qty-${item.id}`).value);
                    handleAddToCart(item, qty);
                  }}
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toast notification container */}
      <ToastContainer />
    </>
  );
}
