// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { AppProvider } from "./context/productcontex";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <AppProvider>
//     <App />
//   </AppProvider>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontex";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
// import {AppProvider} from "./context/AuthContext";
import { AuthProvider } from "./context/AuthContext";
import {BrowserRouter as Router} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
 <Router>
  <AuthProvider>
  <AppProvider>
    <FilterContextProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </FilterContextProvider>
  </AppProvider>
  </AuthProvider>
  </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();