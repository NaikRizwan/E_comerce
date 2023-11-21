import React, { useState } from "react";
import axios from "axios";
import AddProductForm from "./AddProductForm";
import DeleteProduct from "./DeleteProduct";
import DeletesProduct from "./DeletesProduct";
import styled from "styled-components";
import { Button } from "../styles/Button";
import UpdateOrderDetails from "./UpdateOrderDetails";
import DeleteOrder from "./DeleteOrder";
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
const ProductForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    company: "",
    price: 0,
    colors: [],
    image: "",
    description: "",
    category: "",
    shipping: true,
    featured: false,
    // Add more fields if needed
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/products", formData);
      console.log(response.data); // Assuming you want to log the response
      // Clear the form after successful submission
      setFormData({
        id: "",
        name: "",
        company: "",
        price: 0,
        colors: [],
        image: "",
        description: "",
        category: "",
        shipping: true,
        featured: false,
        // Reset other fields if needed
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Wraper>
        <div className="form-container">
          <h2 className="form-heading">Product Form</h2>
          <form onSubmit={handleSubmit} className="product-form">
            {/* Product ID */}
            <div className="form-group">
              <input
                type="text"
                placeholder="Product ID"
                className="form-input"
                value={formData.id}
                onChange={(e) =>
                  setFormData({ ...formData, id: e.target.value })
                }
              />

              {/* Product Name */}
              <input
                type="text"
                placeholder="Product Name"
                className="form-input"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              {/* Company */}
              <input
                type="text"
                placeholder="Company"
                className="form-input"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />

              {/* Price */}
              <input
                type="number"
                placeholder="Price"
                className="form-input"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />

              {/* Colors (as comma-separated values) */}
              <input
                type="text"
                placeholder="Colors (comma-separated)"
                className="form-input"
                value={formData.colors}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    colors: e.target.value.split(","),
                  })
                }
              />

              {/* Image URL */}
              <input
                type="text"
                placeholder="Image URL"
                className="form-input"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
              />

              {/* Description */}
              <textarea
                placeholder="Description"
                className="form-input"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              ></textarea>

              {/* Category */}
              <input
                type="text"
                placeholder="Category"
                className="form-input"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />

              {/* Shipping (checkbox) */}
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={formData.shipping}
                  onChange={(e) =>
                    setFormData({ ...formData, shipping: e.target.checked })
                  }
                />
                <span className="checkmark"></span>
                <span className="checkbox-label">Shipping</span>
              </label>

              {/* Featured (checkbox) */}
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) =>
                    setFormData({ ...formData, featured: e.target.checked })
                  }
                />
                <span className="checkmark"></span>
                <span className="checkbox-label">Featured</span>
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
      <br />
      <div>
        <DeleteProduct />
      </div>
      <br />
      <div>
        <AddProductForm />
      </div>
      <br />
      <div>
        <DeletesProduct />
      </div>
      <div>
        <UpdateOrderDetails />
      </div>
      <div>
        <DeleteOrder />
      </div>
    </>
  );
};

export default ProductForm;
