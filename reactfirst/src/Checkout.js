// Checkout.js
import React, { useState } from 'react';

const Checkout = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [aa, setAa] = useState(null); 
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
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_QcI4AjGDSbAreV",
      currency: "INR",
      amount: amount ,
      name: "rizwan",
      description: "Thanks for purchasing",
      

      handler: function (response) {
        console.log(response.razorpay_payment_id);
         
        alert(response.razorpay_payment_id);
        setAa(response.razorpay_payment_id);
        alert("Payment Successfully");
        
      },
      prefill: {
        name: "code with akky",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!aa) {
      alert('Payment is not completed. Please complete the payment before submitting the order.');
      return;
    }
    const orderData = {
      name,
      address,
      email,
      paymentId: aa,
      // Add other order details as needed (e.g., products, total price)
    };
   
      
    try {
      // Send a POST request to your backend to save the order data
      const response = await fetch('http://localhost:3001/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert('Order placed successfully!');
        // Redirect to a confirmation page or clear the cart, etc.
      } else {
        alert('Order failed. Please try again.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('An error occurred. Please try again later.');
    }
 
  };


  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <h5>user information</h5>
          <label>Name:</label>
          <input type="text" 
          value={name}
           onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <lable>Eamil:</lable>
          <input type="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)} reqquired/>
        </div>
       <h5>Adrees</h5>
        <div>
          <label>Country:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button onClick={() => displayRazorpay( 1000) } type="submit">pay now</button>
        
      </form>
    </div>
  );
};

export default Checkout;
