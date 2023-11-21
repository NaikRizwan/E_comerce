import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import TrackPakage from "../components/TrackPakage";
const CheckoutPage = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders);
  const Wrapper = styled.section`
    /* Your CSS Styles */
    .order-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
    .cart-heading {
      text-align: center;
      text-transform: uppercase;
    }
    .order-card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 20px;
      // width: 300px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .order-details {
      margin-bottom: 15px;
    }

    .cart-items {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 10px;
    }

    .cart-item {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .cart-item img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
    }

    .item-details {
      flex: 1;
    }

    .cart_heading {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 10px;
      font-weight: bold;
      padding: 10px 0;
    }

    .cart-hide {
      display: none;
    }

    hr {
      border: 0;
      border-top: 1px solid #ccc;
      margin: 20px 0;
    }
  `;
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.post("/myorder", {
          email: "r1@gmail.com",
        });
        setOrders(response.data.orders);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);
  function formatDateToCustomString(date) {
    const options = {
      weekday: "short", // Abbreviated weekday name (e.g., "Mon")
      month: "short", // Abbreviated month name (e.g., "Oct")
      day: "numeric", // Day of the month (e.g., "16")
      year: "numeric", // Four-digit year (e.g., "2023")
      hour: "2-digit", // Two-digit hour (e.g., "17")
      minute: "2-digit", // Two-digit minute (e.g., "53")
      second: "2-digit", // Two-digit second (e.g., "40")
      timeZoneName: "long", // Full time zone name (e.g., "India Standard Time")
    };

    const customDateString = date.toLocaleString("en-US", options);
    return customDateString;
  }

  const now = new Date();
  const formattedDate = formatDateToCustomString(now);

  const getDeliveryStatus = (formattedDate, deliveryDate) => {
    function parseDate(dateString) {
      const [, month, day, year, time, ampm, timeZone] = dateString.match(
        /(\w+), (\w+) (\d+), (\d+), (\d+:\d+:\d+ [APM]+) ([\w\s]+)$/
      );
      const date = new Date(
        `${month} ${day}, ${year} ${time} ${ampm} UTC+05:30`
      );
      return date;
    }
    const deliveryDateTime = deliveryDate;
    const formattedDatee = formattedDate;

    const formattedDateObj = parseDate(formattedDatee);
    const deliveryDateObj = parseDate(deliveryDateTime);
    if (formattedDateObj < deliveryDateObj) {
      return "Pending";
    } else {
      return "Succes";
    }
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="cart_heading grid1 grid-seven-column">
          <p>Item</p>
          <p>Price</p>
          <p>Amount</p>
          <p>Subtotal</p>
          <p>Order On</p>
          <p>Deliver On</p>
          <p>Status</p>
        </div>
        <hr />
        {orders.map((order) => (
          <div key={order._id} className="order-card">
            <div className="order-details">
              <h3>Order Details</h3>
              {/* <p>Created At: {order.orders[0].createdAt}</p>
              <p>Delivery Date: {order.orders[0].delivarDate}</p> */}
            </div>
            <div className="cart-items">
              {order.orders.map((item) => (
                <div key={item._id} className="cart-item">
                  <img src={item.cart[0].image} alt={item.cart[0].name} />
                  <div className="item-details">
                    <h4>{item.cart[0].name}</h4>
                    <p>Price: ${item.cart[0].price}</p>
                    <p>Amount: {item.cart[0].amount}</p>
                    <p>Color: {item.cart[0].color}</p>
                    <p>Created At: {item.createdAt}</p>
                    <p>Delivery Date: {item.delivarDate}</p>
                    <p>
                      {/* {getDeliveryStatus(cartArray.delivarDate)} */}
                      {getDeliveryStatus(formattedDate, item.delivarDate)}
                    </p>
                    <div style={{ maxWidth: "90%" }}>
                      {TrackPakage(item.createdAt, item.delivarDate)}
                    </div>
                    <hr />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default CheckoutPage;
