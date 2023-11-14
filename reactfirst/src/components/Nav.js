import React, { useState ,useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart,FiLogOut } from "react-icons/fi";
import { CgMenu, CgClose,CgProfile } from "react-icons/cg";
// import { Button } from "../styles/Button";

//import { SubmitButton } from "../Register";
import { IoIosArrowDropdown } from 'react-icons/io';
import { useCartContext } from "../context/cart_context";

import { useUser } from '../context/UserContext';

  const Navb = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.3rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
    
.nav-item {
  margin-right: 20px;
}

.dropdown {
  position: relative;
}

.dropbtn {
  background-color: inherit;
  // color: blue;
  // border: none;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
   background-color: whitesmoke;
  min-width: 160px;
  z-index: 1;
}

.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}

.dropdown:hover .dropdown-content {
  display: block;
}
    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }
    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }
    .close-outline {
      display: none;
    }
    .cart-trolley--link {
      position: relative;
      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }
      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }
    .user-login--name {
      text-transform: capitalize;
    }
    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};
        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }
      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }
      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;
        .navbar-link {
          font-size: 4.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;
        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }
        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }
      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;
  const Nav = () => {
    
   
  

    const { state, dispatch } = useUser();

    const callAbout = async () => {
      try {
        // ... your existing code to fetch user data
        
                  const response =await fetch ('/about',{
                  method:"GET",
                  headers: {
                      Accept : "application/json",
                      "Content-Type" : "application/json"
                  },
                  credentials :"include"
                  }
                  );
          
          const data = await response.json();
        if (response.status === 400 || !data) {
          dispatch({ type: 'CLEAR_USER' });
       

        } else {
          dispatch({ type: 'SET_USER', payload: { name: data.full_name, email: data.email } });
         
        }
      } catch (error) {
        console.log(error);
        dispatch({ type: 'CLEAR_USER' });
        // Handle errors
      }
    };
    // useEffect(() => {
    //   if (state.loggedIn) {
    //     callAbout();
    //   }
    // }, [state.loggedIn]);
    useEffect(() => {
      callAbout();
    }, [state.loggedIn]);
    // useEffect(() => {
    //   callAbout();
    // });
   
  //   const callAbout = async ()=>{
  //     try {
  //         const response =await fetch ('/about',{
  //         method:"GET",
  //         headers: {
  //             Accept : "application/json",
  //             "Content-Type" : "application/json"
  //         },
  //         credentials :"include"
  //         }
  //         );
  
  // const data = await response.json();
  // console.log("nav",data);
  
  // console.log(data.full_name);
  
  
  // // if(!response.status===200){
  // // const error= new Error(response.error);
  // // throw error;
  // // dispatch({type:"USER",payload:false});
  // // }
  // if(response.status===400 || !data){
  //   dispatch({type:"USER",payload:false})
   
  // }
  // else{
  //   dispatch({type:"USER",payload:true})
  //   setname(data.full_name);
  //   setname(user.full_name);
   
  
  // }
  
  //     } catch (error) {
  //         console.log(error);
  //         // navigate('/login');
         
         
  //     }
  // }
  
  
  // useEffect ( () => {
  // callAbout();
  // },
  // []
  // );
  //  const {state}=useContext(UserConext);location.pathname
    // Use useAuth hook to access context
   
    const [menuIcon, setMenuIcon] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const {total_item} =useCartContext();
    // const usernn = JSON.parse(localStorage.getItem('user'));
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
    // Retrieve data from local storage


  return (
    <Navb>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link "
               onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Contact
            </NavLink>
            </li>

 <li>
   {state.loggedIn  ? (
        
          <div className="nav-item dropdown">
          <button onClick={toggleDropdown} className="dropbtn ">
          <CgProfile  /> &nbsp;
          
               
         
           {/* <span style={{textTransform: "uppercase"}}>{user.username} </span> <IoIosArrowDropdown /> {user.full_name} {user1.full_name}
          */}
           <span style={{textTransform: "uppercase"}}>{ state.loggedIn ? state.name: '--' }</span> <IoIosArrowDropdown /> 
         
          </button>
          {isOpen && (
            <div className="dropdown-content">
              <NavLink
              to="/p"
              className="navbar-link ">
                <CgProfile  /> &nbsp;  
              profile
            </NavLink>
            <NavLink
              to="/myorder"
              className="navbar-link ">
                 <CgProfile  /> &nbsp; 
             My Order

            </NavLink>
            {/* <br />
            &nbsp;&nbsp;&nbsp; &nbsp;<FiLogOut style={{fontSize:"15px"}} />
           <span style={{paddingLeft:"20px"}}>
              <SubmitButton onClick={logout} >  Lagout</SubmitButton>  */}
              
          <NavLink
          to="/logout"
          className="navbar-link ">
            <FiLogOut /> &nbsp;
          Logout
        </NavLink>
              
            </div>
          )}
        </div>
       ): ( 
        <NavLink
              to="/login"
              className="navbar-link ">
                
              Login
            </NavLink>
           
       )} 

          </li>
            
           
         
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item"> {total_item} </span>
            </NavLink>
          </li>
        </ul>

        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Navb>
  );
};

 export default Nav;
 