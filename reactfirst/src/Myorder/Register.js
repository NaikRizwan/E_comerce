import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";

export const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

export const GridLeft = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  gap: 10px;
`;

export const GridRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RegistrationForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 600px;
  background-color: #fffafa;
`;

export const InputField = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 0.2rem;
`;
// const riz =styled.div`
// width:300px;
// height:300px
// `;
export const SubmitButton = styled.button`
  margin: 0.5rem 0;
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;
const Register = () => {
  const Wrapper = styled.section`
    .login-container {
      display: flex;
      align-items: center;
      justify-content: center;

      background: url("https://d3nn873nee648n.cloudfront.net/1200x1800-new/20476/PK1048596.jpg")
        center/cover no-repeat;
    }
    /* Apply animation to create a pulsating border effect */
    @keyframes pulse {
      0% {
        border: 2px solid transparent;
      }
      50% {
        border: 2px solid #3498db;
      }
      100% {
        border: 2px solid transparent;
      }
    }

    .login-box {
      background-color: rgba(255, 255, 255, 0.8);
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

      text-align: center;
      margin-top: 30px;
      margin-bottom: 30px;
      animation: pulse 2s infinite; /* Apply the animation */
    }

    p.error1 {
      color: red;
      font-size: 14px;
      margin-top: 0.2rem;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .input-group {
      margin-bottom: 15px;
      width: 100%;
    }

    .login_label {
      display: block;
      margin-bottom: 6px;
      margin-top: 6px;
      color: #555;
      font-size: 15px;
    }

    .login_input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .login_button {
      background-color: #3498db;
      color: #fff;
      padding: 6px 12px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .login_button:hover {
      background-color: #2980b9; /* New background color on hover */
    }
    button:hover {
      background-color: #2980b9;
    }

    .signup-link {
      margin-top: 15px;
      color: #555;
    }
  `;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear validation errors on input change
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.full_name.length < 3) {
      newErrors.full_name = "Username must be at least 3 characters long";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);

    // Return true if there are no errors, indicating the form is valid
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post("/reg", formData);
        console.log(response.data);

        if (response.status === 201) {
          alert(response.data.message);

          navigate("/login");
        } else {
          alert("Failed");
        }
      } catch (error) {
        console.error("Error:", error);

        // Handle network errors
      }
    }
  };
  return (
    <Wrapper>
      <div className="login-container">
        <div className="login-box">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="login_label" htmlFor="username">
                Username:
              </label>
              <input
                className="login_input"
                type="name"
                // id="username"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
              />
              {errors.full_name && (
                <p className="error1"> {errors.full_name}</p>
              )}
            </div>
            <div className="input-group">
              <label className="login_label" htmlFor="email">
                Email:
              </label>
              <input
                className="login_input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label className="login_label" htmlFor="password">
                Password:
              </label>
              <input
                className="login_input"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <p className="error1">{errors.password}</p>}
            </div>
            <button className="login_button" type="submit">
              Register
            </button>
          </form>
          <p className="signup-link">
            Already have an account?{" "}
            <NavLink
              to="/login"
              // className="navbar-link "
            >
              Sign In
            </NavLink>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;
