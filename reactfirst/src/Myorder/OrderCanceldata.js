import React, { useEffect, useState } from "react";
import { Wrapper } from "../Headers/Cart";
import FormatPrice from "../Helpers/FormatPrice";
import { useUser } from "../context/UserContext";
import axios from "axios";

// Import the component for order history

const OrderCanceldata = () => {
  const [orders, setOrders] = useState([]);
  const { state, dispatch } = useUser();
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
      <h1 style={{ textAlign: "center", fontSize: "25px" }}>
        Your cancel Status
      </h1>
      <br />

      {orders.map((order) => (
        <div key={order._id}>
          {order.orders.map((item) => (
            <div key={item._id}>
              {item.delivered ? null : (
                <>
                  {item.cancel_order.map((cartitem) => (
                    <span key={cartitem._id}>
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
                          <p
                            style={{ marginTop: "10px" }}
                            className="cart-hide"
                          >
                            Subtotal
                          </p>

                          <p
                            style={{ marginTop: "10px" }}
                            className="cart-hide"
                          >
                            Payement Refund
                          </p>
                        </div>
                        <hr />

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

      <br />
      <br />
      <div></div>
    </Wrapper>
  );
};

export default OrderCanceldata;
