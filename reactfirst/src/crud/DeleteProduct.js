import React, { useState } from "react";
import axios from "axios";

import styled from "styled-components";
const Wra = styled.section`
  /* styles.css */

  /* ... (other styles) */

  /* Delete product container */
  .delete-product-container {
    width: 50%;
    margin: 20px auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
  }

  /* Delete product heading */
  .delete-product-heading {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    color: #333333;
  }

  /* Input field for product ID */
  .product-id-input {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease-in-out;
  }

  .product-id-input:focus {
    border-color: #007bff;
  }

  /* Delete button */
  .delete-button {
    padding: 12px 20px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease-in-out;
  }

  .delete-button:hover {
    background-color: #c82333;
  }
`;
const DeleteProduct = () => {
  const [productId, setProductId] = useState("");

  const handleDelete = async () => {
    try {
      if (!productId) {
        console.log("Please provide a product ID");
        return;
      }

      const response = await axios.delete(`/api/products/${productId}`);
      console.log(response.data); // Log the response after deletion

      // Clear input after successful deletion
      setProductId("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Wra>
      <div className="delete-product-container">
        <h2 className="delete-product-heading">Delete Product</h2>
        <input
          type="text"
          placeholder="Enter Product ID"
          className="product-id-input"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </Wra>
  );
};

export default DeleteProduct;
