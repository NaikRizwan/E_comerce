// import React from "react";
// import { Wrapper } from "./Cart";
// import FormatPrice from "./Helpers/FormatPrice";
// import { useAuth } from "./context/AuthContext";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import TrackPakage from "./components/TrackPakage";
// import { useUser } from "./context/UserContext";
// const MyOrder = () => {
//   const { user, myorder, display } = useAuth();
//   console.log("myorder", myorder);

//   console.log(user);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const { state, dispatch } = useUser();
//   const [orders, setOrders] = useState([]);
//   const callAbout = async () => {
//     try {
//       // ... your existing code to fetch user data

//       const response = await fetch("/about", {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       });

//       const data = await response.json();
//       if (response.status === 400 || !data) {
//         dispatch({ type: "CLEAR_USER" });
//         navigate("/login");
//       } else {
//         dispatch({
//           type: "SET_USER",
//           payload: { name: data.full_name, email: data.email },
//         });
//       }
//     } catch (error) {
//       console.log(error);
//       dispatch({ type: "CLEAR_USER" });
//       navigate("/login");
//     }
//   };

//   useEffect(() => {
//     callAbout();
//   }, [state.loggedIn]);
//   function formatDateToCustomString(date) {
//     const options = {
//       weekday: "short", // Abbreviated weekday name (e.g., "Mon")
//       month: "short", // Abbreviated month name (e.g., "Oct")
//       day: "numeric", // Day of the month (e.g., "16")
//       year: "numeric", // Four-digit year (e.g., "2023")
//       hour: "2-digit", // Two-digit hour (e.g., "17")
//       minute: "2-digit", // Two-digit minute (e.g., "53")
//       second: "2-digit", // Two-digit second (e.g., "40")
//       timeZoneName: "long", // Full time zone name (e.g., "India Standard Time")
//     };

//     const customDateString = date.toLocaleString("en-US", options);
//     return customDateString;
//   }

//   const now = new Date();
//   const formattedDate = formatDateToCustomString(now);

//   const getDeliveryStatus = (formattedDate, deliveryDate) => {
//     function parseDate(dateString) {
//       const [, month, day, year, time, ampm, timeZone] = dateString.match(
//         /(\w+), (\w+) (\d+), (\d+), (\d+:\d+:\d+ [APM]+) ([\w\s]+)$/
//       );
//       const date = new Date(
//         `${month} ${day}, ${year} ${time} ${ampm} UTC+05:30`
//       );
//       return date;
//     }
//     const deliveryDateTime = deliveryDate;
//     const formattedDatee = formattedDate;

//     const formattedDateObj = parseDate(formattedDatee);
//     const deliveryDateObj = parseDate(deliveryDateTime);
//     if (formattedDateObj < deliveryDateObj) {
//       return "Pending";
//     } else {
//       return "Succes";
//     }
//   };

//   useEffect(() => {
//     const sendPostRequest = async () => {
//       try {
//         const formData = {
//           email: state.email,
//         };

//         const response = await axios.post("/myorder", formData);
//         setOrders(response.data.orders);
//         display(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     };

//     sendPostRequest();
//   }, []);

//   return (
//     <Wrapper>
//       <div className="container">
//         <h1 style={{ textAlign: "center", fontSize: "25px" }}>
//           {" "}
//           Your Order Status
//         </h1>
//         <br />

//         <div className="cart_heading grid1 grid-seven-column">
//           <p className="cart-hide">Item</p>
//           <p className="cart-hide">Price</p>
//           <p className="cart-hide">Amount</p>
//           <p className="cart-hide">Subtotal</p>

//           <p className="cart-hide">Order On</p>
//           <p className="cart-hide">Delivar On</p>
//           <p className="cart-hide">Status</p>
//         </div>
//         <hr />

//         {orders.map((order) => (
//           <div key={order._id}>
//             {order.orders.map((item) => (
//               <span key={item._id}>
//                 {item.cart.map((cartitem) => (
//                   <span key={cartitem._id}>
//                     <div className="cart-item">
//                       <div className="cart_heading grid1 grid-seven-column">
//                         <div className="cart-image--name">
//                           <div>
//                             <figure>
//                               <img src={cartitem.image} alt={cartitem.name} />
//                             </figure>
//                           </div>
//                           <div>
//                             <p>{cartitem.name}</p>
//                             <div className="color-div">
//                               <p>color:</p>
//                               <div
//                                 className="color-style"
//                                 style={{
//                                   backgroundColor: cartitem.color,
//                                   color: cartitem.color,
//                                 }}
//                               ></div>
//                             </div>
//                           </div>
//                         </div>
//                         <div>
//                           <p>
//                             <FormatPrice price={cartitem.price} />
//                           </p>
//                         </div>
//                         <div>
//                           <p>{cartitem.amount}</p>
//                         </div>
//                         <div>
//                           <p>
//                             {/* {cartItem.amount * CartItem.price} */}
//                             <FormatPrice
//                               price={cartitem.amount * cartitem.price}
//                             />
//                           </p>
//                         </div>
//                         <div>
//                           <p style={{ color: "green", fontSize: "15px" }}>
//                             {item.createdAt}
//                           </p>
//                         </div>
//                         <div>
//                           <p style={{ color: "green", fontSize: "15px" }}>
//                             {item.delivarDate}
//                           </p>
//                         </div>
//                         <div>
//                           <p>
//                             {/* {getDeliveryStatus(cartArray.delivarDate)} */}
//                             {getDeliveryStatus(formattedDate, item.delivarDate)}
//                           </p>
//                         </div>
//                       </div>
//                       <div style={{ maxWidth: "90%" }}>
//                         {TrackPakage(item.createdAt, item.delivarDate)}
//                       </div>
//                       <hr />
//                     </div>
//                   </span>
//                 ))}
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
//     </Wrapper>
//   );
// };

// export default MyOrder;

// import React from "react";
// import { Wrapper } from "./Cart";
// import FormatPrice from "./Helpers/FormatPrice";
// import { useAuth } from "./context/AuthContext";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// //import TrackPakage from "./components/TrackPakage";
// import TrackOrder from "./components/TrackOrder";
// import { useUser } from "./context/UserContext";
// const MyOrder = () => {
//   const { user, myorder, display } = useAuth();
//   console.log("myorder", myorder);

//   console.log(user);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const { state, dispatch } = useUser();
//   const [orders, setOrders] = useState([]);
//   const callAbout = async () => {
//     try {
//       // ... your existing code to fetch user data

//       const response = await fetch("/about", {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       });

//       const data = await response.json();
//       if (response.status === 400 || !data) {
//         dispatch({ type: "CLEAR_USER" });
//         navigate("/login");
//       } else {
//         dispatch({
//           type: "SET_USER",
//           payload: { name: data.full_name, email: data.email },
//         });
//       }
//     } catch (error) {
//       console.log(error);
//       dispatch({ type: "CLEAR_USER" });
//       navigate("/login");
//     }
//   };

//   useEffect(() => {
//     callAbout();
//   }, [state.loggedIn]);

//   const getDeliveryStatus = (delivered) => {
//     if (delivered) {
//       return "Sucess";
//     } else {
//       return "Pending";
//     }
//   };
//   useEffect(() => {
//     const sendPostRequest = async () => {
//       try {
//         const formData = {
//           email: state.email,
//         };

//         const response = await axios.post("/myorder", formData);
//         setOrders(response.data.orders);
//         display(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     };

//     sendPostRequest();
//   }, []);

//   return (
//     <Wrapper>
//       <div className="container">
//         <h1 style={{ textAlign: "center", fontSize: "25px" }}>
//           {" "}
//           Your Order Status
//         </h1>
//         <br />

//         <div className="cart_heading grid1 grid-seven-column">
//           <p className="cart-hide">Item</p>
//           <p className="cart-hide">Price</p>
//           <p className="cart-hide">Amount</p>
//           <p className="cart-hide">Subtotal</p>

//           <p className="cart-hide">Order On</p>
//           <p className="cart-hide">Delivar On</p>
//           <p className="cart-hide">Status</p>
//         </div>
//         <hr />

//         {orders.map((order) => (
//           <div key={order._id}>
//             {order.orders.map((item) => (
//               <span key={item._id}>
//                 {item.cart.map((cartitem) => (
//                   <span key={cartitem._id}>
//                     <div className="cart-item">
//                       <div className="cart_heading grid1 grid-seven-column">
//                         <div className="cart-image--name">
//                           <div>
//                             <figure>
//                               <img src={cartitem.image} alt={cartitem.name} />
//                             </figure>
//                           </div>
//                           <div>
//                             <p>{cartitem.name}</p>
//                             <div className="color-div">
//                               <p>color:</p>
//                               <div
//                                 className="color-style"
//                                 style={{
//                                   backgroundColor: cartitem.color,
//                                   color: cartitem.color,
//                                 }}
//                               ></div>
//                             </div>
//                           </div>
//                         </div>
//                         <div>
//                           <p>
//                             <FormatPrice price={cartitem.price} />
//                           </p>
//                         </div>
//                         <div>
//                           <p>{cartitem.amount}</p>
//                         </div>
//                         <div>
//                           <p>
//                             {/* {cartItem.amount * CartItem.price} */}
//                             <FormatPrice
//                               price={cartitem.amount * cartitem.price}
//                             />
//                           </p>
//                         </div>
//                         <div>
//                           <p style={{ color: "green", fontSize: "15px" }}>
//                             {item.createdAt}
//                           </p>
//                         </div>
//                         <div>
//                           <p style={{ color: "green", fontSize: "15px" }}>
//                             {item.delivarDate}
//                           </p>
//                         </div>
//                         {/* <div>
//                           <p>

//                             {getDeliveryStatus(formattedDate, item.delivarDate)}
//                           </p>
//                         </div> */}
//                         <div>
//                           <p>{getDeliveryStatus(item.delivered)}</p>
//                         </div>
//                       </div>
//                       {/* <div style={{ maxWidth: "90%" }}>
//                         {TrackPakage(item.createdAt, item.delivarDate)}
//                       </div> */}
//                       {/* <div>
//                         {TrackOrder(
//                           item.createdAt,
//                           item.delivarDate,
//                           item.shippingDoneDate,
//                           item.packageArrivedDate,
//                           item.orderDone,
//                           item.shippingDone,
//                           item.packageArrived,
//                           item.delivered
//                         )}
//                       </div> */}
//                       <div>
//                         <TrackOrder
//                           createdAt={item.createdAt}
//                           delivarDate={item.delivarDate}
//                           shippingDoneDate={item.shippingDoneDate}
//                           packageArrivedDate={item.packageArrivedDate}
//                           orderDone1={item.orderDone}
//                           shippingDone1={item.shippingDone}
//                           packageArrived1={item.packageArrived}
//                           delivered1={item.delivered}
//                         />
//                       </div>
//                       <hr />
//                     </div>
//                   </span>
//                 ))}
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
//     </Wrapper>
//   );
// };

// export default MyOrder;

import React, { useEffect, useState } from "react";
import { Wrapper } from "../Headers/Cart";
import FormatPrice from "../Helpers/FormatPrice";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TrackOrder from "./TrackOrder";
import OrderHistory from "./OrderHistory"; // Import the component for order history
import { useUser } from "../context/UserContext";
import { Button } from "../styles/Button";
import CancelOrderButtun from "./CancelOrderButtun";
import OrderCanceldata from "./OrderCanceldata";
const MyOrder = () => {
  const { user, myorder, display } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useUser();
  const [orders, setOrders] = useState([]);
  const [showOrderHistory, setShowOrderHistory] = useState(false);
  const [showOrderHistory1, setShowOrderHistory1] = useState(false);
  const [showOrderHistory2, setShowOrderHistory2] = useState(false);
  const toggleOrderHistory = () => {
    setShowOrderHistory(!showOrderHistory);
  };
  const toggleOrderHistory1 = () => {
    setShowOrderHistory1(!showOrderHistory1);
  };
  const toggleOrderHistory2 = () => {
    setShowOrderHistory2(!showOrderHistory2);
  };
  // Function to check delivery status
  const getDeliveryStatus = (delivered) => (delivered ? "Success" : "Pending");
  const Order1 = () => {
    return (
      <div>
        <h1 style={{ textAlign: "center", fontSize: "25px" }}>
          Your Order Status
        </h1>
        <br />

        {orders.map((order) => (
          <div key={order._id}>
            {order.orders.map((item) => (
              <div key={item._id}>
                {item.delivered ? null : (
                  <>
                    {item.cart.map((cartitem) => (
                      <span key={cartitem._id}>
                        <div
                          style={{
                            marginLeft: "5%",
                            marginRight: "5%",
                            borderRadius: "30px",
                            backgroundColor: "lightskyblue",
                          }}
                          className="container"
                        >
                          <div className="cart_heading grid1 grid-seven-column">
                            <p
                              style={{ marginTop: "10px" }}
                              className="cart-hide"
                            >
                              Item
                            </p>
                            <p
                              style={{ marginTop: "10px" }}
                              className="cart-hide"
                            >
                              Price
                            </p>
                            <p
                              style={{ marginTop: "10px" }}
                              className="cart-hide"
                            >
                              Amount
                            </p>
                            <p className="cart-hide">Subtotal</p>

                            <p
                              style={{ marginTop: "10px" }}
                              className="cart-hide"
                            >
                              Order On
                            </p>
                            <p
                              style={{ marginTop: "10px" }}
                              className="cart-hide"
                            >
                              Delivar On
                            </p>
                            <p
                              style={{ marginTop: "10px" }}
                              className="cart-hide"
                            >
                              Status
                            </p>
                          </div>
                          <hr />

                          <div className="cart-item">
                            <div className="cart_heading grid1 grid-seven-column">
                              <div className="cart-image--name">
                                <div>
                                  <figure>
                                    <img
                                      src={cartitem.image}
                                      alt={cartitem.name}
                                    />
                                  </figure>
                                </div>
                                <div>
                                  <p>{cartitem.name}</p>
                                  <div className="color-div">
                                    <p>color:</p>
                                    <div
                                      className="color-style"
                                      style={{
                                        backgroundColor: cartitem.color,
                                        color: cartitem.color,
                                      }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <p>
                                  <FormatPrice price={cartitem.price} />
                                </p>
                              </div>
                              <div>
                                <p>{cartitem.amount}</p>
                              </div>
                              <div>
                                <p>
                                  <FormatPrice
                                    price={cartitem.amount * cartitem.price}
                                  />
                                </p>
                              </div>
                              <div>
                                <p style={{ color: "green", fontSize: "15px" }}>
                                  {item.createdAt}
                                </p>
                              </div>
                              <div>
                                <p style={{ color: "green", fontSize: "15px" }}>
                                  {item.delivarDate}
                                </p>
                              </div>

                              <div>
                                <p>{getDeliveryStatus(item.delivered)}</p>
                              </div>
                            </div>

                            <div>
                              <TrackOrder
                                createdAt={item.createdAt}
                                delivarDate={item.delivarDate}
                                shippingDoneDate={item.shippingDoneDate}
                                packageArrivedDate={item.packageArrivedDate}
                                orderDone1={item.orderDone}
                                shippingDone1={item.shippingDone}
                                packageArrived1={item.packageArrived}
                                delivered1={item.delivered}
                              />
                            </div>
                            <CancelOrderButtun
                              orderId={item._id}
                              cartItemId={cartitem._id}
                              email={state.email}
                            />
                            <hr />
                          </div>
                        </div>
                        <br />
                      </span>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  useEffect(() => {
    const callAbout = async () => {
      try {
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
          navigate("/login");
        } else {
          dispatch({
            type: "SET_USER",
            payload: { name: data.full_name, email: data.email },
          });
        }
      } catch (error) {
        console.log(error);
        dispatch({ type: "CLEAR_USER" });
        navigate("/login");
      }
    };

    const sendPostRequest = async () => {
      try {
        const formData = {
          email: state.email,
        };

        const response = await axios.post("/myorder", formData);
        setOrders(response.data.orders);
        display(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    callAbout();
    sendPostRequest();
  }, [state.loggedIn]);

  return (
    <Wrapper>
      <div>
        <Button
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
          onClick={toggleOrderHistory2}
        >
          Show Order
        </Button>
        {showOrderHistory2 && (
          <div>
            <Order1 />
          </div>
        )}
      </div>
      <br />
      <br />
      <div>
        <Button
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
          onClick={toggleOrderHistory1}
        >
          Show Order
        </Button>
        {showOrderHistory1 && (
          <div>
            <OrderCanceldata />
          </div>
        )}
      </div>
      <br />
      <br />
      <div>
        <Button
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
          onClick={toggleOrderHistory}
        >
          Show Order
        </Button>
        {showOrderHistory && (
          <div>
            <OrderHistory />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default MyOrder;
