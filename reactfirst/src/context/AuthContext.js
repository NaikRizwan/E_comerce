// AuthContext.js
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigte = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Add user state
  const [userorder, setuseorder] = useState(null);
  const [lord, setlord] = useState(null);
  const [myorder, setmyorder] = useState(null);
  const display = (myy) => {
    setmyorder(myy.orders);
  };
  console.log(myorder);

  const order = (userOrder) => {
    setuseorder(userOrder);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        userorder,
        order,
        display,
        myorder,
        lord,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
