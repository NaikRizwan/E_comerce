// // import React from "react";
// // import FormatPrice from "../Helpers/FormatPrice";
// // import TrackOrder from "./TrackOrder";

// // const OrderHistory = ({ orderData }) => {
// //   return (
// //     <div className="order-history">
// //       <h2>Your Order History</h2>
// //       {/* Display order history details */}
// //       <div className="order-details">
// //         <p>Order ID: {orderData._id}</p>
// //         <p>Order Date: {orderData.createdAt}</p>
// //         {/* Display other relevant order history data */}
// //         {/* ... */}
// //       </div>

// //       {/* Check if orderData.orders exists before mapping */}
// //       {orderData.orders && orderData.orders.length > 0 ? (
// //         orderData.orders.map((item) => (
// //           <div key={item._id} className="order-item">
// //             <div className="order-item-details">
// //               {/* Display item details */}
// //               {/* ... */}
// //               <p>{item.name}</p>
// //               {/* Display other relevant item details */}
// //               {/* ... */}
// //             </div>
// //             <div className="order-item-status">
// //               {/* Display item status */}
// //               <p>Status: Delivered</p>
// //               {/* Display other relevant status information */}
// //               {/* ... */}
// //             </div>
// //             {/* TrackOrder component for each item */}
// //             <TrackOrder
// //               createdAt={item.createdAt}
// //               delivarDate={item.delivarDate}
// //               shippingDoneDate={item.shippingDoneDate}
// //               packageArrivedDate={item.packageArrivedDate}
// //               orderDone1={item.orderDone}
// //               shippingDone1={item.shippingDone}
// //               packageArrived1={item.packageArrived}
// //               delivered1={item.delivered}
// //             />
// //           </div>
// //         ))
// //       ) : (
// //         <p>No order items available.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default OrderHistory;
// import React from "react";
// import FormatPrice from "../Helpers/FormatPrice";
// import TrackOrder from "./TrackOrder";

// const OrderHistory = ({ item }) => {
//   const getDeliveryStatus = (delivered) => (delivered ? "Success" : "Pending");
//   console.log(item);
//   return (
//     <>
//       <div className="container">
//         <h1 style={{ textAlign: "center", fontSize: "25px" }}>
//           Your Order History
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
//         {item.cart.map((cartitem) => (
//           <span key={cartitem._id}>
//             <div className="cart-item">
//               <div className="cart_heading grid1 grid-seven-column">
//                 <div className="cart-image--name">
//                   <div>
//                     <figure>
//                       <img src={cartitem.image} alt={cartitem.name} />
//                     </figure>
//                   </div>
//                   <div>
//                     <p>{cartitem.name}</p>
//                     <div className="color-div">
//                       <p>color:</p>
//                       <div
//                         className="color-style"
//                         style={{
//                           backgroundColor: cartitem.color,
//                           color: cartitem.color,
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <p>
//                     <FormatPrice price={cartitem.price} />
//                   </p>
//                 </div>
//                 <div>
//                   <p>{cartitem.amount}</p>
//                 </div>
//                 <div>
//                   <p>
//                     {/* {cartItem.amount * CartItem.price} */}
//                     <FormatPrice price={cartitem.amount * cartitem.price} />
//                   </p>
//                 </div>
//                 <div>
//                   <p style={{ color: "green", fontSize: "15px" }}>
//                     {item.createdAt}
//                   </p>
//                 </div>
//                 <div>
//                   <p style={{ color: "green", fontSize: "15px" }}>
//                     {item.delivarDate}
//                   </p>
//                 </div>
//                 {/* <div>
//                             <p>

//                               {getDeliveryStatus(formattedDate, item.delivarDate)}
//                             </p>
//                           </div> */}
//                 <div>
//                   <p>{getDeliveryStatus(item.delivered)}</p>
//                 </div>
//               </div>
//               {/* <div style={{ maxWidth: "90%" }}>
//                           {TrackPakage(item.createdAt, item.delivarDate)}
//                         </div> */}
//               {/* <div>
//                           {TrackOrder(
//                             item.createdAt,
//                             item.delivarDate,
//                             item.shippingDoneDate,
//                             item.packageArrivedDate,
//                             item.orderDone,
//                             item.shippingDone,
//                             item.packageArrived,
//                             item.delivered
//                           )}
//                         </div> */}
//               <div>
//                 <TrackOrder
//                   createdAt={item.createdAt}
//                   delivarDate={item.delivarDate}
//                   shippingDoneDate={item.shippingDoneDate}
//                   packageArrivedDate={item.packageArrivedDate}
//                   orderDone1={item.orderDone}
//                   shippingDone1={item.shippingDone}
//                   packageArrived1={item.packageArrived}
//                   delivered1={item.delivered}
//                 />
//               </div>
//               <hr />
//             </div>
//           </span>
//         ))}
//       </div>
//     </>
//   );
// };

//

import React, { useEffect, useState } from "react";
import { Wrapper } from "../Headers/Cart";
import FormatPrice from "../Helpers/FormatPrice";
import CancelOrderButtun from "./CancelOrderButtun";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TrackOrder from "./TrackOrder";
//import OrderHistory from "./components/OrderHistory"; // Import the component for order history
import { useUser } from "../context/UserContext";
const OrderHistory = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useUser();
  const [orders, setOrders] = useState([]);

  // Function to check delivery status
  const getDeliveryStatus = (delivered) => (delivered ? "Success" : "Pending");

  useEffect(() => {
    const sendPostRequest = async () => {
      try {
        const formData = {
          email: state.email,
        };

        const response = await axios.post("/myorder", formData);
        setOrders(response.data.orders);
      } catch (error) {
        console.error(error);
      }
    };

    sendPostRequest();
  }, [state.loggedIn]);

  return (
    <Wrapper>
      <>
        <h1 style={{ textAlign: "center", fontSize: "25px" }}>
          Your Order History
        </h1>
        <br />
      </>

      {orders.map((order) => (
        <div key={order._id}>
          {order.orders.map((item) => (
            <div key={item._id}>
              {/*              
              {item.delivered ? (
                <OrderHistory item={item} /> */}

              {item.delivered && (
                <>
                  <div
                    style={{
                      marginLeft: "12%",
                      marginRight: "12%",
                      borderRadius: "40px",
                      backgroundColor: "aquamarine",
                    }}
                    className="container"
                  >
                    <div className="cart_heading grid1 grid-five-column">
                      <p style={{ marginTop: "10px" }} className="cart-hide">
                        Item
                      </p>
                      <p style={{ marginTop: "10px" }} className="cart-hide">
                        Price
                      </p>
                      <p style={{ marginTop: "10px" }} className="cart-hide">
                        Amount
                      </p>
                      <p style={{ marginTop: "10px" }} className="cart-hide">
                        Subtotal
                      </p>

                      <p style={{ marginTop: "10px" }} className="cart-hide">
                        Status
                      </p>
                    </div>
                    <hr />
                    {item.cart.map((cartitem) => (
                      <span key={cartitem._id}>
                        <div className="cart-item">
                          <div className="cart_heading grid1 grid-five-column">
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
                                {/* {cartItem.amount * CartItem.price} */}
                                <FormatPrice
                                  price={cartitem.amount * cartitem.price}
                                />
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
                      </span>
                    ))}
                  </div>
                  <br />
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </Wrapper>
  );
};

export default OrderHistory;
