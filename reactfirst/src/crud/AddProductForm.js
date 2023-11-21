// // import React, { useState } from "react";
// // import axios from "axios";

// // const AddProductForm = () => {
// //   const [formData, setFormData] = useState({
// //     id: "",
// //     stock: 0,
// //     reviews: 0,
// //     stars: 0,
// //     images: [], // Array to hold image information dynamically
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleImageChange = (e, index) => {
// //     const newImages = [...formData.images];
// //     newImages[index][e.target.name] = e.target.value;
// //     setFormData({
// //       ...formData,
// //       images: newImages,
// //     });
// //   };

// //   const handleAddImage = () => {
// //     setFormData({
// //       ...formData,
// //       images: [
// //         ...formData.images,
// //         {
// //           id: "",
// //           width: 0,
// //           height: 0,
// //           url: "",
// //           filename: "",
// //           size: 0,
// //           type: "",
// //         },
// //       ],
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       // Send the form data to your backend
// //       const response = await axios.post("/api/singleproducts", formData); // Adjust the endpoint as per your backend setup
// //       console.log("Data saved successfully:", response.data);
// //       // Reset the form after successful submission
// //       setFormData({
// //         id: "",
// //         stock: 0,
// //         reviews: 0,
// //         stars: 0,
// //         images: [],
// //       });
// //     } catch (error) {
// //       console.error("Error saving data:", error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Product Form</h2>
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           Product ID:
// //           <input
// //             type="text"
// //             name="id"
// //             value={formData.id}
// //             onChange={handleChange}
// //           />
// //         </label>
// //         <label>
// //           Stock:
// //           <input
// //             type="number"
// //             name="stock"
// //             value={formData.stock}
// //             onChange={handleChange}
// //           />
// //         </label>
// //         <label>
// //           Reviews:
// //           <input
// //             type="number"
// //             name="reviews"
// //             value={formData.reviews}
// //             onChange={handleChange}
// //           />
// //         </label>
// //         <label>
// //           Stars:
// //           <input
// //             type="number"
// //             step="0.1"
// //             name="stars"
// //             value={formData.stars}
// //             onChange={handleChange}
// //           />
// //         </label>

// //         {formData.images.map((image, index) => (
// //           <div key={index}>
// //             <label>
// //               Image ID:
// //               <input
// //                 type="text"
// //                 name="id"
// //                 value={image.id}
// //                 onChange={(e) => handleImageChange(e, index)}
// //               />
// //             </label>
// //             <label>
// //               Width:
// //               <input
// //                 type="number"
// //                 name="width"
// //                 value={image.width}
// //                 onChange={(e) => handleImageChange(e, index)}
// //               />
// //             </label>
// //             <label>
// //               Height:
// //               <input
// //                 type="number"
// //                 name="height"
// //                 value={image.height}
// //                 onChange={(e) => handleImageChange(e, index)}
// //               />
// //             </label>
// //             <label>
// //               URL:
// //               <input
// //                 type="text"
// //                 name="url"
// //                 value={image.url}
// //                 onChange={(e) => handleImageChange(e, index)}
// //               />
// //             </label>
// //             {/* Add more image fields here */}
// //           </div>
// //         ))}

// //         <button type="button" onClick={handleAddImage}>
// //           Add Image
// //         </button>
// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AddProductForm;

// import React, { useState } from "react";
// import axios from "axios";

// const AddProductForm = () => {
//   const [formData, setFormData] = useState({
//     id: "",
//     stock: 0,
//     reviews: 0,
//     stars: 0,
//     image: [], // Array to hold image information dynamically
//   });

//   const handleImageChange = (e, index) => {
//     const newImages = [...formData.image];
//     newImages[index][e.target.name] = e.target.value;
//     setFormData({
//       ...formData,
//       image: newImages,
//     });
//   };

//   const handleAddImage = () => {
//     setFormData({
//       ...formData,
//       image: [
//         ...formData.image,
//         {
//           id: "",
//           width: 0,
//           height: 0,
//           url: "",
//           filename: "",
//           size: 0,
//           type: "",
//         },
//       ],
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { id, stock, reviews, stars, image } = formData;

//       const productData = {
//         id,
//         stock,
//         reviews,
//         stars,
//         image: image.map((img) => ({ ...img })),
//       };

//       const response = await axios.post("/api/singleproducts", productData);
//       console.log("Data saved successfully:", response.data);

//       setFormData({
//         id: "",
//         stock: 0,
//         reviews: 0,
//         stars: 0,
//         image: [],
//       });
//     } catch (error) {
//       console.error("Error saving data:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Product Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Product ID:
//           <input
//             type="text"
//             name="id"

//             value={formData.id}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Stock:
//           <input
//             type="number"
//             name="stock"
//             value={formData.stock}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Reviews:
//           <input
//             type="number"
//             name="reviews"
//             value={formData.reviews}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Stars:
//           <input
//             type="number"
//             step="0.1"
//             name="stars"
//             value={formData.stars}
//             onChange={handleChange}
//           />
//         </label>

//         {/* {formData.images.map((image, index) => ( */}
//         {formData.image.map((image, index) => (
//           <div key={index}>
//             <label>
//               Image ID:
//               <input
//                 type="text"
//                 name="id"
//                 value={image.id}
//                 onChange={(e) => handleImageChange(e, index)}
//               />
//             </label>
//             <label>
//               Width:
//               <input
//                 type="number"
//                 name="width"
//                 value={image.width}
//                 onChange={(e) => handleImageChange(e, index)}
//               />
//             </label>
//             <label>
//               Height:
//               <input
//                 type="number"
//                 name="height"
//                 value={image.height}
//                 onChange={(e) => handleImageChange(e, index)}
//               />
//             </label>
//             <label>
//               URL:
//               <input
//                 type="text"
//                 name="url"
//                 value={image.url}
//                 onChange={(e) => handleImageChange(e, index)}
//               />
//             </label>
//             {/* Add more image fields here */}
//           </div>
//         ))}

//         <button type="button" onClick={handleAddImage}>
//           Add Image
//         </button>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddProductForm;

import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Button } from "../styles/Button";
const Wraperr = styled.section`
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
const AddProductForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    stock: 5,
    reviews: 25,
    stars: 3.5,
    image: [], // Array to hold image information dynamically
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e, index) => {
    const newImages = [...formData.image];
    newImages[index][e.target.name] = e.target.value;
    setFormData({
      ...formData,
      image: newImages,
    });
  };

  const handleAddImage = () => {
    setFormData({
      ...formData,
      image: [
        ...formData.image,
        {
          id: "",
          width: 1080,
          height: 650,
          url: "",
          filename: "prod-3.png",
          size: 1080,
          type: "image/png",
        },
      ],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { id, stock, reviews, stars, image } = formData;

      const productData = {
        id,
        stock,
        reviews,
        stars,
        image: image.map((img) => ({ ...img })),
      };

      const response = await axios.post("/api/singleproducts", productData);
      console.log("Data saved successfully:", response.data);

      setFormData({
        id: "",
        stock: 0,
        reviews: 0,
        stars: 0,
        image: [],
      });
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <Wraperr>
      <div className="form-container">
        <h2 className="form-heading">SingleProduct Form</h2>
        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-group">
            <input
              type="text"
              name="id"
              placeholder="Product-ID"
              className="form-input"
              value={formData.id}
              onChange={handleChange}
            />

            <input
              type="number"
              name="stock"
              placeholder="Stock"
              className="form-input"
              value={formData.stock}
              onChange={handleChange}
            />

            <input
              type="number"
              name="reviews"
              placeholder="Reviews"
              className="form-input"
              value={formData.reviews}
              onChange={handleChange}
            />

            <input
              type="number"
              step="1"
              name="stars"
              placeholder="Stars"
              className="form-input"
              value={formData.stars}
              onChange={handleChange}
            />

            {formData.image.map((image, index) => (
              <div key={index}>
                <input
                  type="text"
                  name="id"
                  placeholder="Image-ID"
                  className="form-input"
                  value={image.id}
                  onChange={(e) => handleImageChange(e, index)}
                />

                <input
                  type="number"
                  name="width"
                  className="form-input"
                  placeholder="Image-Width"
                  value={image.width}
                  onChange={(e) => handleImageChange(e, index)}
                />

                <input
                  type="number"
                  name="height"
                  placeholder="Image_Height"
                  className="form-input"
                  value={image.height}
                  onChange={(e) => handleImageChange(e, index)}
                />

                <input
                  type="text"
                  name="url"
                  placeholder="URL"
                  className="form-input"
                  value={image.url}
                  onChange={(e) => handleImageChange(e, index)}
                />

                {/* Add more image fields here */}
              </div>
            ))}

            <Button
              type="button"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
              }}
              onClick={handleAddImage}
            >
              Add Image
            </Button>
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
    </Wraperr>
  );
};

export default AddProductForm;
