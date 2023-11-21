// Login.js
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../context/UserContext";
import React, { useState } from "react";
const Login = () => {
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
  const { dispatch } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmi = async (e) => {
    e.preventDefault();
    const res = await fetch("/log", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 400 || !data) {
      dispatch({ type: "CLEAR_USER" });
      alert("invalid cariendtiols");
    } else {
      dispatch({
        type: "SET_USER",
        payload: {
          name: data.userlogin.full_name,
          email: data.userlogin.email,
        },
      });

      navigate("/");
    }
  };
  return (
    <Wrapper>
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmi}>
            <div className="input-group">
              <label className="login_label" htmlFor="email">
                Email:
              </label>
              <input
                className="login_input"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="login_button" type="submit">
              Login
            </button>
          </form>
          <p className="signup-link">
            Don't have an account?{" "}
            <NavLink
              to="/register"
              // className="navbar-link "
            >
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
// Login.js
