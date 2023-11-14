// // src/components/Login.js
// import { useNavigate } from 'react-router-dom';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useAuth } from './context/AuthContext';
// import { RegistrationContainer } from "./Register";
// import {RegistrationForm} from "./Register";
// import {InputField} from "./Register";
// import {SubmitButton} from "./Register";
// import { GridLeft } from './Register';
// import { GridRight } from './Register';
// // import { Button } from './styles/Button';
// function Login() {
//   const { login } = useAuth();

//   const  navigate=useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

// const riz =()=> {
//   navigate('/register');
// }
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await axios.post('http://localhost:3001/log/login', formData);

//     if (response.status === 200) {
//       console.log("  login successful");

//       alert("login succefully");

//   console.log("token",response.data.token);
//   console.log("hhiii",response.data);
//   console.log("orsder detaile",response.data.orders);
//   login(response.data); // Set user data from the response
//       navigate('/');
//     } else {
//       console.log("not login");
//       alert("username mismatch or password mismatchh");
//       // Login failed, handle errors
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     // Handle network errors or invalid login
//   }
// };

// const rizw ={
//   width:"300px",
//   height:"300px",
// }
//   return (
//     <RegistrationContainer>

//       <RegistrationForm onSubmit={handleSubmit}>
//       <GridLeft>
//         <riz>
//           <img style={rizw}  src="images/hero.jpg" alt="logoo" /></riz>
//         </GridLeft>
//         <GridRight>
//         <h2 style={{textAlign:"center"}}>Login</h2>
//         <InputField
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <InputField
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         <SubmitButton type="submit" >Login</SubmitButton>
//        <button type='button'>Forget Password</button>
//        <button type='button'>Change Password</button>
//       <p style={{textAlign:"center"}}>Registarion Not Yet <button type='button' onClick={riz}>
//         Sign up</button></p>
//       {/* <SubmitButton type="submit" onClick={riz}>Sign Up</SubmitButton> */}

//     </GridRight>
//       </RegistrationForm>
//     </RegistrationContainer>
//   );
// }

// export default Login;
// src/components/Login.js

import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
//import axios from 'axios';

import { RegistrationContainer } from "./Register";
import { RegistrationForm } from "./Register";
import { InputField } from "./Register";
import { SubmitButton } from "./Register";
import { GridLeft } from "./Register";
import { GridRight } from "./Register";
// import { Button } from './styles/Button';

import { useUser } from "./context/UserContext";
function Login() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  // });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const riz = () => {
    navigate("/register");
  };
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
      //  dispatch1({type:"USER",payload:true})
      // login(data);
      // alert("login succesfully");
      // console.log("hiiii",data.userlogin);
      navigate("/");
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('/log', formData);

  //     if (response.status === 200) {
  //       console.log("  login successful");
  //       document.cookie = `jwt=${response.data.token}; path=/; max-age=2592000;`;

  //       alert("login succefully");

  //  console.log(response.data);
  //   // console.log("token",response.data.token);
  //   // console.log("hhiii",response.data);

  //   // login(response.data); // Set user data from the response
  //       navigate('/');
  //     } else {
  //       console.log("not login");
  //       alert("username mismatch or password mismatchh");
  //       // Login failed, handle errors
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     // Handle network errors or invalid login
  //   }
  // };

  const rizw = {
    width: "300px",
    height: "300px",
  };
  return (
    <RegistrationContainer>
      <RegistrationForm onSubmit={handleSubmi}>
        <GridLeft>
          <riz>
            <img style={rizw} src="images/hero.jpg" alt="logoo" />
          </riz>
        </GridLeft>
        <GridRight>
          <h2 style={{ textAlign: "center" }}>Login</h2>
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            // value={formData.email}
            // onChange={handleChange}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            // value={formData.password}
            // onChange={handleChange}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitButton type="submit">Login</SubmitButton>
          <button type="button">Forget Password</button>
          <button type="button">Change Password</button>
          <p style={{ textAlign: "center" }}>
            Registarion Not Yet{" "}
            <button type="button" onClick={riz}>
              Sign up
            </button>
          </p>
          {/* <SubmitButton type="submit" onClick={riz}>Sign Up</SubmitButton> */}
        </GridRight>
      </RegistrationForm>
    </RegistrationContainer>
  );
}

export default Login;
