// AuthContext.js
import React, { createContext, useContext, useState ,useEffect} from 'react';
import { useNavigate, } from 'react-router-dom';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const  navigte=useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Add user state
const [userorder, setuseorder] =useState(null);
const[lord,setlord]=useState(null);
const[myorder, setmyorder]=useState(null);
const display =(myy) => {
  setmyorder(myy.orders);
}
// useEffect(() => {
//   // Check for the presence of authToken in localStorage when the component mounts
//   const authToken = localStorage.getItem('authToken');
//   if (authToken) {
//     setIsAuthenticated(true);
//   } else {
//     setIsAuthenticated(false);
//   }
// }, []);
// useEffect(() => {
//   // Check for the presence of authToken in localStorage when the component mounts
//   // const usern = localStorage.getItem('username');
//   const usern = JSON.parse(localStorage.getItem('user'));
//   console.log(usern);
//   if (usern) {
//     setUser(usern);
//   } else {
//     setUser(null);
//   }
// }, []);

  const login = (userData) => {

    // Implement your login logic here
   // localStorage.setItem('authToken', userData.token);
    // localStorage.setItem('username', userData.user);
    localStorage.setItem('user', JSON.stringify(userData.userlogin)); // Store the user object as a string
console.log("h1",userData.userlogin);
    setIsAuthenticated(true);
      setUser(userData.userlogin);
   //  console.log(userData.user,typeof(userData.user) );
    setlord(userData.orders);
    // localStorage.setItem('authToken', 'yourAuthToken');
    
  };
const order =(userOrder) => {
  setuseorder(userOrder);
}

  const logout = () => {
    // Implement your logout logic here
    localStorage.removeItem('authToken');
     setIsAuthenticated(false);
   localStorage.removeItem('user');
    //  setUser(null);
   
    
    navigte('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated,user,userorder,order,display,myorder,lord, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
