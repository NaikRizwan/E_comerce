import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Button } from "../styles/Button";
const Wraper = styled.section`
  /* styles.css */

  /* Main form container */
  .form-container {
    width: 50%;
    margin: 0 auto;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
  }

  /* Form heading */
  .form-heading {
    text-align: center;
    font-size: 28px;
    margin-bottom: 30px;
    color: #333333;
  }

  /* Product form */
  .product-form {
    display: flex;
    flex-direction: column;
  }

  /* Form group */
  .form-group {
    margin-bottom: 20px;
  }

  /* Labels */

  /* Input fields */
  .form-input {
    width: 100%;
    padding: 12px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease-in-out;
  }

  .form-input:focus {
    border-color: #007bff;
  }

  /* styles.css */

  /* ... (other styles) */

  /* Checkbox container */
  .checkbox-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  /* Checkbox label */
  .checkbox-label {
    margin-left: 10px;
    font-size: 16px;
    color: #333333;
  }

  /* Custom checkbox */
  .custom-checkbox {
    width: 20px;
    height: 20px;
    border: 1px solid #cccccc;
    border-radius: 3px;
    cursor: pointer;
    transition: border-color 0.3s ease-in-out;
  }

  /* Checked state */
  .custom-checkbox:checked {
    background-color: #007bff;
    border-color: #007bff;
  }

  /* Hide default checkbox */
  .custom-checkbox input {
    display: none;
  }

  /* Checked style for custom checkbox */
  .custom-checkbox input:checked + .checkmark {
    display: block;
  }

  /* Checkmark icon */
  .checkmark {
    display: none;
    width: 100%;
    height: 100%;
    background-image: url("path/to/checkmark-icon.svg"); /* Replace with your checkmark icon */
    background-size: contain;
    background-repeat: no-repeat;
  }

  /* Hover style for custom checkbox */
  .custom-checkbox:hover {
    border-color: #0056b3;
  }
`;
function UpdateOrderDetails() {
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [updateData, setUpdateData] = useState({
    delivarDate: "",
    shippingDoneDate: "",
    packageArrivedDate: "",
    orderDone: false,
    shippingDone: false,
    packageArrived: false,
    delivered: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `/orderrs/${email}/${orderId}`,
        updateData
      );
      console.log("Order updated:", response.data);
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  return (
    <Wraper>
      <div className="form-container">
        <h2>Update Order Details</h2>
        <form className="product-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="OrderID"
              className="form-input"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
            />

            <input
              type="text"
              placeholder="Delivar Date"
              className="form-input"
              value={updateData.delivarDate}
              onChange={(e) =>
                setUpdateData({ ...updateData, delivarDate: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="shipping Done Date"
              className="form-input"
              value={updateData.shippingDoneDate}
              onChange={(e) =>
                setUpdateData({
                  ...updateData,
                  shippingDoneDate: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="package Arrived Date"
              className="form-input"
              value={updateData.packageArrivedDate}
              onChange={(e) =>
                setUpdateData({
                  ...updateData,
                  packageArrivedDate: e.target.value,
                })
              }
            />
            {/* Add checkboxes for boolean fields */}
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={updateData.orderDone}
                onChange={(e) =>
                  setUpdateData({ ...updateData, orderDone: e.target.checked })
                }
              />
              <span className="checkmark"></span>
              <span className="checkbox-label">Order Done</span>
            </label>
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={updateData.shippingDone}
                onChange={(e) =>
                  setUpdateData({
                    ...updateData,
                    shippingDone: e.target.checked,
                  })
                }
              />
              <span className="checkmark"></span>
              <span className="checkbox-label">shipping Done</span>
            </label>
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={updateData.packageArrived}
                onChange={(e) =>
                  setUpdateData({
                    ...updateData,
                    packageArrived: e.target.checked,
                  })
                }
              />
              <span className="checkmark"></span>
              <span className="checkbox-label">package Arrived</span>
            </label>
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={updateData.delivered}
                onChange={(e) =>
                  setUpdateData({ ...updateData, delivered: e.target.checked })
                }
              />
              <span className="checkmark"></span>
              <span className="checkbox-label">Delivar Done</span>
            </label>
            <br />

            <Button
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
              }}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Wraper>
  );
}

export default UpdateOrderDetails;
