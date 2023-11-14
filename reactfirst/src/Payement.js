import { useState, useEffect } from "react";
import React from "react";
import { useCartContext } from "./context/cart_context";
import { Button } from "./styles/Button";
// import { useAuth } from './context/AuthContext';
import { useNavigate } from "react-router-dom";
import { RegistrationContainer } from "./Register";
import { RegistrationForm } from "./Register";
import { InputField } from "./Register";

import { GridLeft } from "./Register";
import { GridRight } from "./Register";
import { useUser } from "./context/UserContext";
const Payement = () => {
  const { state } = useUser();
  const [isPaymentCompleted, setPaymentCompleted] = useState(false);
  // const { user} = useAuth();
  useEffect(() => {
    if (isPaymentCompleted) {
      handleSubmit();
    }
  }, [isPaymentCompleted]);
  const navi = useNavigate();

  const [fname, setName] = useState("");
  const [lname, setLName] = useState("");
  const [street, setS] = useState("");
  const [country, setC] = useState("");
  const [town, setT] = useState("");
  const [sta, setsta] = useState("");
  const [pin, setpin] = useState("");
  const [aa, setAa] = useState(0);
  const [cc, setcc] = useState(1);
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  console.log("🚀 ~ file: payement.js ~ line 6 ~ Cart ~ cart", cart);
  //const { user } = useAuth();
  //const usernn = JSON.parse(localStorage.getItem('user'));
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
      country,
      town,
      sta,
      pin,
      paymentId: aa,
      createdAt: formattedDate,
      delivarDate: formatted,
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
    <RegistrationContainer>
      <RegistrationForm onSubmit={handlePaymentAndSubmit}>
        {/* <RegistrationForm> */}

        <GridLeft>
          <h2 style={{ textAlign: "center" }}>User Info</h2>
          <InputField
            readOnly={true}
            name="username"
            label="username"
            value={state.name}
            // onChange={(e) => setUsername(e.target.value)} required
          />
          <InputField
            fluid
            readOnly={true}
            name="email"
            label="Email"
            placeholder={state.email}
            type="email"

            // value={user.email}
            // onChange={(e) => setEmail(e.target.value)} required
          />
          <InputField
            fluid
            name="firstname"
            label="First Name"
            placeholder="First-Name"
            value={fname}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <InputField
            fluid
            name="lastname"
            label="Last name"
            placeholder="Last-Name"
            value={lname}
            onChange={(e) => setLName(e.target.value)}
            required
          />
          <InputField
            fluid
            name="phone-No"
            label="phone-no"
            placeholder="Phone-No"
            value={lname}
            onChange={(e) => setLName(e.target.value)}
            required
          />
        </GridLeft>
        <GridRight>
          <h2 style={{ textAlign: "center" }}>Address</h2>
          <InputField
            width={10}
            name="street"
            label="Address"
            placeholder="Street"
            value={street}
            onChange={(e) => setS(e.target.value)}
            required
          />
          <InputField
            width={6}
            name="country"
            label="Select Country"
            placeholder="Country"
            value={country}
            onChange={(e) => setC(e.target.value)}
            required
            // options={countries}
          />

          <InputField
            width={6}
            name="town_city"
            label="Town/City"
            placeholder="Town"
            value={town}
            onChange={(e) => setT(e.target.value)}
            required
          />
          <InputField
            width={6}
            label="County/State/Province/Territory"
            placeholder="State_name"
            name="county_state"
            value={sta}
            onChange={(e) => setsta(e.target.value)}
            required
          />
          <InputField
            width={4}
            type="number"
            name="postal_zip_code"
            label="Zip/Postal"
            placeholder="Pin-Code"
            value={pin}
            onChange={(e) => setpin(e.target.value)}
            required
          />

          {/* <Button  type="submit"  onClick={() => displayRazorpay(total_price + shipping_fee ) }> */}
          <Button type="submit">Pay Now </Button>
        </GridRight>
      </RegistrationForm>
    </RegistrationContainer>
  );
};

export default Payement;
