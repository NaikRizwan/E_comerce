// import React, { useState ,useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { FiShoppingCart,FiLogOut } from "react-icons/fi";
// import { CgMenu, CgClose,CgProfile } from "react-icons/cg";
// // import { Button } from "../styles/Button";

// //import { SubmitButton } from "../Register";
// import { IoIosArrowDropdown } from 'react-icons/io';
// import { useCartContext } from "../context/cart_context";

// import { useUser } from '../context/UserContext';

//   const Navb = styled.nav`
//     .navbar-lists {
//       display: flex;
//       gap: 4.8rem;
//       align-items: center;
//       .navbar-link {
//         &:link,
//         &:visited {
//           display: inline-block;
//           text-decoration: none;
//           font-size: 1.3rem;
//           font-weight: 500;
//           text-transform: uppercase;
//           color: ${({ theme }) => theme.colors.black};
//           transition: color 0.3s linear;
//         }
//         &:hover,
//         &:active {
//           color: ${({ theme }) => theme.colors.helper};
//         }
//       }
//     }

// .nav-item {
//   margin-right: 20px;
// }

// .dropdown {
//   position: relative;
// }

// .dropbtn {
//   background-color: inherit;
//   // color: blue;
//   // border: none;
//   cursor: pointer;
// }

// .dropdown-content {
//   display: none;
//   position: absolute;
//    background-color: whitesmoke;
//   min-width: 160px;
//   z-index: 1;
// }

// .dropdown-content a {
//   color: white;
//   padding: 12px 16px;
//   text-decoration: none;
//   display: block;
// }

// .dropdown-content a:hover {
//   background-color: #ddd;
//   color: black;
// }

// .dropdown:hover .dropdown-content {
//   display: block;
// }
//     .mobile-navbar-btn {
//       display: none;
//       background-color: transparent;
//       cursor: pointer;
//       border: none;
//     }
//     .mobile-nav-icon[name="close-outline"] {
//       display: none;
//     }
//     .close-outline {
//       display: none;
//     }
//     .cart-trolley--link {
//       position: relative;
//       .cart-trolley {
//         position: relative;
//         font-size: 3.2rem;
//       }
//       .cart-total--item {
//         width: 2.4rem;
//         height: 2.4rem;
//         position: absolute;
//         background-color: #000;
//         color: #000;
//         border-radius: 50%;
//         display: grid;
//         place-items: center;
//         top: -20%;
//         left: 70%;
//         background-color: ${({ theme }) => theme.colors.helper};
//       }
//     }
//     .user-login--name {
//       text-transform: capitalize;
//     }
//     .user-logout,
//     .user-login {
//       font-size: 1.4rem;
//       padding: 0.8rem 1.4rem;
//     }
//     @media (max-width: ${({ theme }) => theme.media.mobile}) {
//       .mobile-navbar-btn {
//         display: inline-block;
//         z-index: 9999;
//         border: ${({ theme }) => theme.colors.black};
//         .mobile-nav-icon {
//           font-size: 4.2rem;
//           color: ${({ theme }) => theme.colors.black};
//         }
//       }
//       .active .mobile-nav-icon {
//         display: none;
//         font-size: 4.2rem;
//         position: absolute;
//         top: 30%;
//         right: 10%;
//         color: ${({ theme }) => theme.colors.black};
//         z-index: 9999;
//       }
//       .active .close-outline {
//         display: inline-block;
//       }
//       .navbar-lists {
//         width: 100vw;
//         height: 100vh;
//         position: absolute;
//         top: 0;
//         left: 0;
//         background-color: #fff;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;
//         visibility: hidden;
//         opacity: 0;
//         transform: translateX(100%);
//         /* transform-origin: top; */
//         transition: all 3s linear;
//       }
//       .active .navbar-lists {
//         visibility: visible;
//         opacity: 1;
//         transform: translateX(0);
//         z-index: 999;
//         transform-origin: right;
//         transition: all 3s linear;
//         .navbar-link {
//           font-size: 4.2rem;
//         }
//       }
//       .cart-trolley--link {
//         position: relative;
//         .cart-trolley {
//           position: relative;
//           font-size: 5.2rem;
//         }
//         .cart-total--item {
//           width: 4.2rem;
//           height: 4.2rem;
//           font-size: 2rem;
//         }
//       }
//       .user-logout,
//       .user-login {
//         font-size: 2.2rem;
//         padding: 0.8rem 1.4rem;
//       }
//     }
//   `;
//   const Nav = () => {

//     const { state, dispatch } = useUser();

//     const callAbout = async () => {
//       try {
//         // ... your existing code to fetch user data

//                   const response =await fetch ('/about',{
//                   method:"GET",
//                   headers: {
//                       Accept : "application/json",
//                       "Content-Type" : "application/json"
//                   },
//                   credentials :"include"
//                   }
//                   );

//           const data = await response.json();
//         if (response.status === 400 || !data) {
//           dispatch({ type: 'CLEAR_USER' });

//         } else {
//           dispatch({ type: 'SET_USER', payload: { name: data.full_name, email: data.email } });

//         }
//       } catch (error) {
//         console.log(error);
//         dispatch({ type: 'CLEAR_USER' });
//         // Handle errors
//       }
//     };
//     // useEffect(() => {
//     //   if (state.loggedIn) {
//     //     callAbout();
//     //   }
//     // }, [state.loggedIn]);
//     useEffect(() => {
//       callAbout();
//     }, [state.loggedIn]);
//     // useEffect(() => {
//     //   callAbout();
//     // });

//   //   const callAbout = async ()=>{
//   //     try {
//   //         const response =await fetch ('/about',{
//   //         method:"GET",
//   //         headers: {
//   //             Accept : "application/json",
//   //             "Content-Type" : "application/json"
//   //         },
//   //         credentials :"include"
//   //         }
//   //         );

//   // const data = await response.json();
//   // console.log("nav",data);

//   // console.log(data.full_name);

//   // // if(!response.status===200){
//   // // const error= new Error(response.error);
//   // // throw error;
//   // // dispatch({type:"USER",payload:false});
//   // // }
//   // if(response.status===400 || !data){
//   //   dispatch({type:"USER",payload:false})

//   // }
//   // else{
//   //   dispatch({type:"USER",payload:true})
//   //   setname(data.full_name);
//   //   setname(user.full_name);

//   // }

//   //     } catch (error) {
//   //         console.log(error);
//   //         // navigate('/login');

//   //     }
//   // }

//   // useEffect ( () => {
//   // callAbout();
//   // },
//   // []
//   // );
//   //  const {state}=useContext(UserConext);location.pathname
//     // Use useAuth hook to access context

//     const [menuIcon, setMenuIcon] = useState();
//     const [isOpen, setIsOpen] = useState(false);
//     const {total_item} =useCartContext();
//     // const usernn = JSON.parse(localStorage.getItem('user'));
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };
//     // Retrieve data from local storage

//   return (
//     <Navb>
//       <div className={menuIcon ? "navbar active" : "navbar"}>
//         <ul className="navbar-lists">
//           <li>
//             <NavLink
//               to="/"
//               className="navbar-link "
//               onClick={() => setMenuIcon(false)}>
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               className="navbar-link "
//                onClick={() => setMenuIcon(false)}>
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/products"
//               className="navbar-link "
//               onClick={() => setMenuIcon(false)}>
//               Products
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               className="navbar-link "
//               onClick={() => setMenuIcon(false)}>
//               Contact
//             </NavLink>
//             </li>

//  <li>
//    {state.loggedIn  ? (

//           <div className="nav-item dropdown">
//           <button onClick={toggleDropdown} className="dropbtn ">
//           <CgProfile  /> &nbsp;

//            {/* <span style={{textTransform: "uppercase"}}>{user.username} </span> <IoIosArrowDropdown /> {user.full_name} {user1.full_name}
//           */}
//            <span style={{textTransform: "uppercase"}}>{ state.loggedIn ? state.name: '--' }</span> <IoIosArrowDropdown />

//           </button>
//           {isOpen && (
//             <div className="dropdown-content">
//               <NavLink
//               to="/p"
//               className="navbar-link ">
//                 <CgProfile  /> &nbsp;
//               profile
//             </NavLink>
//             <NavLink
//               to="/myorder"
//               className="navbar-link ">
//                  <CgProfile  /> &nbsp;
//              My Order

//             </NavLink>
//             {/* <br />
//             &nbsp;&nbsp;&nbsp; &nbsp;<FiLogOut style={{fontSize:"15px"}} />
//            <span style={{paddingLeft:"20px"}}>
//               <SubmitButton onClick={logout} >  Lagout</SubmitButton>  */}

//           <NavLink
//           to="/logout"
//           className="navbar-link ">
//             <FiLogOut /> &nbsp;
//           Logout
//         </NavLink>

//             </div>
//           )}
//         </div>
//        ): (
//         <NavLink
//               to="/login"
//               className="navbar-link ">

//               Login
//             </NavLink>

//        )}

//           </li>

//           <li>
//             <NavLink to="/cart" className="navbar-link cart-trolley--link">
//               <FiShoppingCart className="cart-trolley" />
//               <span className="cart-total--item"> {total_item} </span>
//             </NavLink>
//           </li>
//         </ul>

//         {/* two button for open and close of menu */}
//         <div className="mobile-navbar-btn">
//           <CgMenu
//             name="menu-outline"
//             className="mobile-nav-icon"
//             onClick={() => setMenuIcon(true)}
//           />
//           <CgClose
//             name="close-outline"
//             className="mobile-nav-icon close-outline"
//             onClick={() => setMenuIcon(false)}
//           />
//         </div>
//       </div>
//     </Navb>
//   );
// };

//  export default Nav;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { IoIosArrowDropdown } from "react-icons/io";
import { FiShoppingCart, FiLogOut, FiLogIn } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BsPersonWorkspace } from "react-icons/bs";
import { useCartContext } from "../context/cart_context";
import styled from "styled-components";
const Navb = styled.nav`
  .attractive-arrow {
    display: inline-block;
    animation: bounce 1s infinite;
    color: yellowgreen;
    position: relative;
    top: 3px;
    /* Apply the bounce animation */
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0); /* Bounce positions */
    }

    40% {
      transform: translateY(-20px); /* Bounce height */
    }

    60% {
      transform: translateY(-10px); /* Bounce height */
    }
  }
  .attractive-box {
    display: inline-block;
    border-radius: 8px; /* Adjust the border-radius as needed for your desired roundness */
    background-color: black; /* Change to your preferred background color */
    padding: 8px 10px; /* Add padding for spacing inside the element */
    position: relative; /* Set text color to white or a color that contrasts well with the background */
    bottom: 6px;
    font-size: 14px;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #333;
    color: white;
    padding-bottom: 4px;
    transition: 0.5s;
  }

  .logo-container {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .logo {
    font-size: 24px;
    font-weight: bold;
    animation: bounce 5s infinite;
  }

  .nav-toggle {
    cursor: pointer;
    display: none;
    flex-direction: column;
  }

  .nav-links {
    display: flex;
    gap: 30px;
  }

  .nav-links a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }

  .nav-links a:hover {
    color: #ffcc00;
  }

  .dropdown-content a {
    color: white;
    padding: 12px 16px;
    display: block;
    text-decoration: none;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #333;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    z-index: 1;
    width: 160px;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
  /* Updated .bar class */
  .bar {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0; /* Adjusted margin for better spacing */
    transition: 0.4s;
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
  /* Updated @media query for screens less than 768px */
  @media (max-width: 768px) {
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
    .navbar {
      /* flex-direction: column;
    align-items: flex-start; */
      padding: 25px;
    }
    .logo-container {
      margin-bottom: 0px;
    }
    .attractive-box1 {
      display: inline-block;
      margin-left: auto;
      margin-right: auto;
    }
    .dropdown {
      position: relative;
      display: inline-block;
      margin-left: auto;
      margin-right: auto;
    }
    .nav-toggle {
      display: flex;
      align-self: flex-end;
      margin-top: -5px;
    }

    .nav-links {
      display: none;
      flex-direction: column;

      position: absolute;
      top: 50px;
      left: 0;
      background-color: #333;
      width: 100%;
      padding: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      margin-top: 20px;
      z-index: 1;
    }
    .nav-links.show {
      display: flex;
    }

    /* .nav-links a {
    color: white;
    text-decoration: none;
    margin-bottom: 10px;
    font-size: 16px;
    text-align: center;
  } */
    .nav-links a {
      color: white;
      text-decoration: none;
      margin-bottom: 10px;
      font-size: 16px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
    .dropdown-content {
      display: block;
      padding: 10px;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    /* Adjusted styles for the bars in the nav-toggle */
    .nav-toggle .bar {
      width: 35px;
      height: 2px;
      background-color: white;
      margin: 4px 0;
      margin-bottom: 6px;
      transition: 0.4s;
    }
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const Nav = () => {
  const { total_item } = useCartContext();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCancelShown, setIsCancelShown] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsCancelShown(!isCancelShown);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleCancel = () => {
    setIsNavOpen(!isNavOpen);
    setIsCancelShown(!isCancelShown);
  };

  const { state, dispatch } = useUser();

  const callAbout = async () => {
    try {
      // ... your existing code to fetch user data

      const response = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      if (response.status === 400 || !data) {
        dispatch({ type: "CLEAR_USER" });
      } else {
        dispatch({
          type: "SET_USER",
          payload: { name: data.full_name, email: data.email },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "CLEAR_USER" });
      // Handle errors
    }
  };
  useEffect(() => {
    callAbout();
  }, [state.loggedIn]);
  return (
    <Navb>
      <div className={`navbar ${isNavOpen ? "open" : ""}`}>
        <div className="logo-container">
          <div className="logo">Creative Hub!</div>
        </div>
        <div
          className="nav-toggle"
          onClick={isCancelShown ? toggleCancel : toggleNav}
        >
          {isCancelShown ? (
            <div className="cancel-btn">Cancel</div>
          ) : (
            <>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </>
          )}
        </div>
        <div className={`nav-links ${isNavOpen ? "show" : ""}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/products">Product</NavLink>

          {state.loggedIn ? (
            <div
              className="dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}
            >
              {/* {state.loggedIn ? state.name : "--"}
            <span className="attractive-arrow">
              <IoIosArrowDropdown />
            </span> */}
              <div className="attractive-box">
                {state.loggedIn ? state.name : "--"}
                <span className="attractive-arrow">
                  <IoIosArrowDropdown />
                </span>
              </div>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <NavLink to="/p">
                    <CgProfile /> &nbsp; Profile
                  </NavLink>
                  <NavLink to="/myorder">
                    <BsPersonWorkspace /> &nbsp;My Order
                  </NavLink>
                  <NavLink to="/logout">
                    <FiLogOut /> &nbsp;Logout
                  </NavLink>
                </div>
              )}
            </div>
          ) : (
            <div className="attractive-box1">
              <NavLink to="/login">
                <span className="attractive-arrow">
                  {" "}
                  <FiLogIn />
                </span>
                &nbsp; Sign In
              </NavLink>
            </div>
          )}
          <NavLink to="/cart" className=" cart-trolley--link">
            <FiShoppingCart className="cart-trolley" />
            <span className="cart-total--item"> {total_item} </span>
          </NavLink>
        </div>
      </div>
    </Navb>
  );
};

export default Nav;
