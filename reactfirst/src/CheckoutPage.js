// import React, { useState } from 'react';
// import UserInformationForm from './UserInformationForm';
// import AddressDetailsForm from './AddressDetailsForm';
// import PaymentProcessing from './PaymentProcessing';
// //import OrderSummary from './OrderSummary';

// const CheckoutPage = () => {
//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//   });

//   const [addressData, setAddressData] = useState({
//     street: '',
//     city: '',
//     state: '',
//     postalCode: '',
//     country: '',
//   });

//   const [paymentData, setPaymentData] = useState({
//     cardNumber: '',
//     expirationDate: '',
//     cvv: '',
//   });

//   const [orderSubmitted, setOrderSubmitted] = useState(false);

//   const handleUserDataChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({
//       ...userData,
//       [name]: value,
//     });
//   };

//   const handleAddressDataChange = (e) => {
//     const { name, value } = e.target;
//     setAddressData({
//       ...addressData,
//       [name]: value,
//     });
//   };

//   const handlePaymentDataChange = (e) => {
//     const { name, value } = e.target;
//     setPaymentData({
//       ...paymentData,
//       [name]: value,
//     });
//   };

//   const handleSubmitOrder = async () => {
//     // Simulate form validation (you can implement actual validation logic)
//     if (!userData.name || !userData.email || !addressData.street || !paymentData.cardNumber) {
//       alert('Please fill out all required fields.');
//       return;
//     }

//     // Create the order object
//     const order = {
//       user: userData,
//       address: addressData,
//       payment: paymentData,
//       // Add other order details as needed (e.g., products, total price)
//     };

//     try {
//       // Send a POST request to your backend to save the order data
//       const response = await fetch('http://localhost:3001/orders', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(order),
//       });

//       if (response.ok) {
//         setOrderSubmitted(true);
//         // Redirect to a confirmation page or clear the cart, etc.
//       } else {
//         alert('Order failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error placing order:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div>
//       <h1>Checkout</h1>
//       <div className="checkout-container">
//         <UserInformationForm userData={userData} onChange={handleUserDataChange} />
//         <AddressDetailsForm addressData={addressData} onChange={handleAddressDataChange} />
//         <PaymentProcessing paymentData={paymentData} onChange={handlePaymentDataChange} />
//         {/* <OrderSummary /> */}
//       </div>
//       {orderSubmitted ? (
//         <p>Order has been submitted successfully!</p>
//       ) : (
//         <button onClick={handleSubmitOrder}>Submit Order</button>
//       )}
//     </div>
//   );
// };

// export default CheckoutPage;
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function CheckoutPage() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [orderId, setOrderId] = useState('');
  const loadScript = (src, callback) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
  };
  
  loadScript('https://checkout.razorpay.com/v1/checkout.js', () => {
    // Now, it's safe to use window.Razorpay
    const options = {
      // ...
    };
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  });
  const initiatePayment = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/initiate-payment', {
        amount: productPrice,
        productName: productName,
      });

      if (response.data.id) {
        setOrderId(response.data.id);
        const options = {
          key: 'rzp_test_jmQRgJ3SRB8x80', // Replace with your Razorpay Key ID
          amount: productPrice * 100, // Amount in paisa (for INR)
          currency: 'INR',
          name: 'Your Company Name',
          description: `Payment for ${productName}`,
          // image: '/path/to/your/logo.png',
          order_id: response.data.id,
          handler: function (response) {
            // Handle the payment success and order completion here
            console.log(response);
          },
          prefill: {
            name: 'Customer Name',
            email: 'customer@example.com',
            contact: 'Customer Contact',
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } else {
        alert('Payment initiation failed');
      }
    } catch (error) {
      console.error(error);
      alert('Payment initiation failed');
    }
  };

  return (
    <div className="App">
      <h1>Razorpay Payment Demo</h1>
      <div>
        <label>
          Product Name:
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Product Price:
          <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
        </label>
      </div>
      <button onClick={initiatePayment}>Pay Now</button>
      {orderId && <p>Order ID: {orderId}</p>}
    </div>
  );
}

export default CheckoutPage;
