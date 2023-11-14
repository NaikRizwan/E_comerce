import Header from "./components/Header";
// import { useState } from "react";
import React from "react";
import {  Routes, Route } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
 import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
// import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

import Footer from "./components/Footer";
import Login from "./Login";
import Register from "./Register";
// import Checkout from "./Checkout";
import Payement from "./Payement";
import CheckoutPage from "./CheckoutPage"
// import RizwanForm from "./RizwanForm";
import Profile from "./Profile";
// import ProtectedRoute from "./ProtectedRoute";
//import { useAuth } from './context/AuthContext';
import MyOrder from "./MyOrder";
import TrackPakage from "./components/TrackPakage";
import Logout from "./Logout";
import { intitialstate, reducer } from './reducer/UseReduucer';
// import { useContext, useReducer } from "react";
import { createContext, useReducer } from 'react';

import { UserProvider} from './context/UserContext';
export const UserConext = createContext();

const Routing =()=>{
  return (
<>

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/payement" element= { <Payement />}/>
        <Route path="/login" element= { <Login />}/>
        <Route path="/register" element={<Register />} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        <Route path="/checkoutpage" element={<CheckoutPage />} />
        <Route path="/r" element={<TrackPakage />} />
        <Route path="/myorder" element={<MyOrder />} />
        {/* <ProtectedRoute path="/p" component={Profile} /> */}
        {/* <Route path="/p" element={<Profile />} /> */}
        {/* <Route path="/p" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} /> */}
        <Route path="/p" element={<Profile/>} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/logout" element={<Logout/>} />
       
      </Routes>
</>
  )
};
const App = () => {
  //const { isAuthenticated } = useAuth();

  const [state1,dispatch1] = useReducer(reducer, intitialstate);
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  


  return (
    <UserProvider>
    <UserConext.Provider value={{state1 , dispatch1}}>
    <ThemeProvider theme={theme}>
      {/* <Router> */}
        <GlobalStyle />
        {/* {!isLoginPage && <Header />} */}
        <Header />
       
        <Routing/>
      
        <Footer/>
        {/* {!isLoginPage && <Footer />} */}
      {/* </Router> */}
    </ThemeProvider>
    </UserConext.Provider>
    </UserProvider>
  );
};

export default App;
