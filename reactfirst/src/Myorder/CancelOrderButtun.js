import React from "react";
import axios from "axios";
import styled from "styled-components";

const Wra = styled.section`
  /* styles.css */
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

function CancelOrderButton({ orderId, cartItemId, email }) {
  const handleDeleteCart = async () => {
    try {
      // Replace 'backend_api_url' with your actual backend API URL
      await axios.put(
        `/deleteCartItemAndMoveToCancelOrder/${orderId}/${cartItemId}/${email}`
      );
      console.log(
        "Cart item deleted and data moved to cancel_order successfully"
      );
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <Wra>
      <div>
        <button className="delete-button" onClick={handleDeleteCart}>
          Cancel Order
        </button>
      </div>
    </Wra>
  );
}

export default CancelOrderButton;
