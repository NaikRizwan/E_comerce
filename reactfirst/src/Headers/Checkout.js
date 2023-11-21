// Checkout.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useUser } from "../context/UserContext";
import { useCartContext } from "../context/cart_context";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.section`
  @import url("https://fonts.googleapis.com/css?family=Arimo");
  $coral: #eb9478;
  $maroon: #8e2807;
  $title: #493b76;

  body {
    display: flex;
    justify-content: center;
  }

  .wrapper {
    margin-top: 5%;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    font-family: "Arimo";
    background-color: lightcoral;
    -webkit-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    animation: slideUp 2000ms ease;
  }

  @keyframes slideUp {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      visibility: visible;
    }

    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  .container {
    width: 65%;
    padding: 5% 10%;
  }

  h1 {
    align-self: center;
  }

  form {
    width: 100%;

    > * {
      margin-top: 20px;
    }

    input {
      width: 100%;
      min-height: 25px;
      border: 0;
      font-size: 1rem;
      letter-spacing: 0.15rem;
      font-family: "Arimo";
      margin-top: 5px;
      color: $maroon;
      border-radius: 4px;
    }

    label {
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 2px;
      color: $maroon;
    }

    h1 {
      font-size: 24px;
      line-height: 10px;
      color: $title;
      letter-spacing: 1px;
    }

    h1:nth-of-type(2) {
      margin-top: 10%;
    }
  }

  .name {
    justify-content: space-between;
    display: flex;
    width: 100%;

    div {
      width: 45%;
    }
  }

  .address-info {
    display: flex;
    justify-content: space-between;

    div {
      width: 30%;
    }
  }

  .cc-info {
    display: flex;
    justify-content: space-between;

    div {
      width: 45%;
    }
  }

  .btns {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    button {
      margin: 3px 0;
      height: 30px;

      color: #cfc9e1;
      background-color: #4a3b76;
      text-transform: uppercase;
      border: 0;
      border-radius: 0.3rem;
      letter-spacing: 2px;
      margin-left: auto;
      display: block;
      margin-right: auto;

      &:hover {
        animation-name: btn-hov;
        animation-duration: 550ms;
        animation-fill-mode: forwards;
      }
    }
  }

  @keyframes btn-hov {
    100% {
      background-color: #cfc9e1;
      color: #4a3b76;
      transform: scale(1.05);
    }
  }

  input:focus,
  button:focus {
    outline: none;
  }

  @media (max-width: 736px) {
    .wrapper {
      width: 100%;
    }

    .container {
      width: 100%;
    }

    .btns {
      align-items: center;

      button {
        width: 50%;
      }
    }

    form h1 {
      text-align: center;
    }

    .name,
    .address-info,
    .cc-info {
      flex-direction: column;
      width: 100%;
      justify-content: space-between;

      div {
        align-items: center;
        flex-direction: column;
        width: 100%;
        display: flex;
      }
    }

    .street,
    .cc-num {
      text-align: center;
    }

    input {
      margin: 5px 0;
      min-height: 30px;
    }
  }
`;
const Checkout = () => {
  const [fname, setName] = useState("");
  const [lname, setLName] = useState("");
  const [street, setS] = useState("");
  const [phone, setphone] = useState("");
  const [city, setcity] = useState("");
  const [sta, setsta] = useState("");
  const [pin, setpin] = useState("");
  const [aa, setAa] = useState(0);
  const [cc, setcc] = useState(1);
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  const { state } = useUser();
  const [isPaymentCompleted, setPaymentCompleted] = useState(false);
  // const { user} = useAuth();
  useEffect(() => {
    if (isPaymentCompleted) {
      handleSubmit();
    }
  }, [isPaymentCompleted]);
  const navi = useNavigate();
  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };
  const displayRazorpay = async (amount) => {
    console.log(amount);
    return new Promise((resolve, reject) => {
      console.log(amount);
      loadScript("https://checkout.razorpay.com/v1/checkout.js")
        .then((res) => {
          if (!res) {
            alert("You are offline... Failed to load Razorpay SDK");
            reject("Payment failed");
          }

          const options = {
            key: "rzp_test_jmQRgJ3SRB8x80",
            currency: "INR",
            amount: amount * 100,
            name: "rizwan",
            description: "Thanks for purchasing",
            image:
              "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",

            handler: function (response) {
              setAa(response.razorpay_payment_id);
              setcc(response.razorpay_payment_id);
              setPaymentCompleted(true); // Set payment completion flag
              resolve(response.razorpay_payment_id);
              console.log("Payment Successfully");
              resolve(true); // Resolve the Promise to indicate successful payment
            },
            prefill: {
              name: "code with akky",
              email: state.email,
            },
          };

          const paymentObject = new window.Razorpay(options);
          paymentObject.open();
        })
        .catch((error) => {
          console.error("Error loading Razorpay SDK:", error);
          reject("Payment failed");
        });
    });
  };

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

  const formatDateToCustom = (pin) => {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "long",
    };

    const newDate = new Date();

    if (pin === "1") {
      newDate.setDate(newDate.getDate() + 1);
      newDate.setHours(newDate.getHours() + 2);
    } else if (pin === "2") {
      newDate.setHours(newDate.getHours() + 2);
    } else if (pin === "3") {
      newDate.setDate(newDate.getDate() + 2);
      newDate.setHours(newDate.getHours() + 3);
    } else if (pin === "4") {
      newDate.setDate(newDate.getDate());
    } else if (pin === "5") {
      newDate.setMinutes(newDate.getMinutes() + 10);
    } else if (pin === "6") {
      newDate.setMinutes(newDate.getMinutes() + 3);
    } else {
      newDate.setDate(newDate.getDate() + 1);
    }

    const customDate = newDate.toLocaleString("en-US", options);

    return customDate;
  };

  const handleSubmit = async () => {
    console.log("hndleSubmir is calling");

    const formatted = formatDateToCustom(pin);

    const orderData = {
      fname,
      lname,
      email: state.email,
      username: state.name,
      street,
      phone,
      city,
      sta,
      pin,
      paymentId: aa,
      createdAt: formattedDate,
      delivarDate: formatted,
      shippingDoneDate: formattedDate,
      packageArrivedDate: formattedDate,
      orderDone: true,
      shippingDone: false,
      packageArrived: false,
      delivered: false,
      cart: cart,
    };
    console.log("ejj", aa);
    console.log("ejj", cc);

    try {
      // Send a POST request to your backend to save the order data
      const response = await fetch("/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      // if (response.ok) {
      if (response.status === 201) {
        alert("Order placed successfully!");

        // console.log("orsder detaile",response.data.orders);

        // order(orderData);
        clearCart();
        navi("/myorder");
        // Redirect to a confirmation page or clear the cart, etc.
      }

      // else {
      //   alert('Order failed. Please try again.');
      // }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred. Please try again later.");
    }
    // }
  };

  const handlePaymentAndSubmit = async (e) => {
    e.preventDefault();

    try {
      // Display the Razorpay payment dialog and wait for it to complete
      const paymentId = await displayRazorpay(total_price + shipping_fee);

      if (paymentId) {
        // Payment succeeded, handle form submission
        // handleSubmit will be called once payment is completed
        // handleSubmit();
      } else {
        // Handle payment failure (e.g., show an error message)
        console.log("Payment failed");
      }
    } catch (error) {
      // Handle any errors that occurred during payment or form submission
      console.error("Payment or submission error:", error);
    }
  };
  return (
    <Wrapper>
      <div class="wrapper">
        <div class="container">
          <form onSubmit={handlePaymentAndSubmit}>
            <h1>
              <i class="fas fa-shipping-fast"></i>
              Shipping Details
            </h1>
            <div class="street">
              <label for="email">Email</label>
              <input
                type="text"
                name="email"
                readOnly={true}
                placeholder={state.email}
              />
            </div>
            <div class="name">
              <div>
                <label for="f-name">First</label>
                <input
                  type="text"
                  name="f-name"
                  value={fname}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label for="l-name">Last</label>
                <input
                  type="text"
                  name="l-name"
                  value={lname}
                  onChange={(e) => setLName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div class="street">
              <label for="number">Phone No</label>
              <input
                type="Number"
                name="phone-no"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
            </div>
            <div class="street">
              <label for="name">Street</label>
              <input
                type="text"
                name="address"
                value={street}
                onChange={(e) => setS(e.target.value)}
                required
              />
            </div>
            <div class="address-info">
              <div>
                <label for="city">City</label>
                <input
                  type="text"
                  name="city"
                  value={city}
                  onChange={(e) => setcity(e.target.value)}
                />
              </div>
              <div>
                <label for="state">State</label>
                <input
                  type="text"
                  name="state"
                  value={sta}
                  onChange={(e) => setsta(e.target.value)}
                />
              </div>
              <div>
                <label for="zip">Zip</label>
                <input
                  type="text"
                  name="zip"
                  value={pin}
                  onChange={(e) => setpin(e.target.value)}
                />
              </div>
            </div>
            {/* <h1>
              <i class="far fa-credit-card"></i> Payment Information
            </h1>
            <div class="cc-num">
              <label for="card-num">Credit Card No.</label>
              <input type="text" name="card-num" />
            </div>
            <div class="cc-info">
              <div>
                <label for="card-num">Exp</label>
                <input type="text" name="expire" />
              </div>
              <div>
                <label for="card-num">CCV</label>
                <input type="text" name="security" />
              </div>
            </div> */}
            <div class="btns">
              <button type="submit">Purchase</button>
            </div>
          </form>
          {/* <button class="btns" onClick={() => navi("/cart")}>
            Back to cart
          </button> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default Checkout;
