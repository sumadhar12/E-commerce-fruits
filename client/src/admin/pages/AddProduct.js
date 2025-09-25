// src/admin/pages/AddProduct.js
import React, { useState } from "react";
import axios from "../../api/axios";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    axios
      .post(
        "/api/admin/products",
        { name, price },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        setName("");
        setPrice("");
        alert("Product added");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
