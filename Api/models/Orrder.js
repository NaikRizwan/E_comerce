// // order.js
// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema({
//   fname: String,
//   lname: String,
//   username: String,
//   email: String,
//   street: String,
//   city: String,
//   phone: Number,
//   sta: String,
//   pin: Number,
//   createdAt: String,
//   delivarDate: String,
//   productPrice: Number,
//   cart: [
//     {
//       id: String,
//       name: String,
//       color: String,
//       amount: Number,
//       image: String,
//       price: Number,
//     },
//   ],
// });

// module.exports = mongoose.model("Order", orderSchema);

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  orders: [
    {
      fname: String,
      lname: String,
      username: String,
      street: String,
      city: String,
      phone: Number,
      sta: String,
      pin: Number,
      createdAt: String,
      delivarDate: String,
      productPrice: Number,
      shippingDoneDate: String,
      packageArrivedDate: String,
      orderDone: { type: Boolean, default: true },
      shippingDone: { type: Boolean, default: false },
      packageArrived: { type: Boolean, default: false },
      delivered: { type: Boolean, default: false },
      cart: [
        {
          id: String,
          name: String,
          color: String,
          amount: Number,
          image: String,
          price: Number,
        },
      ],
      cancel_order: [
        {
          id: String,
          name: String,
          color: String,
          amount: Number,
          image: String,
          price: Number,
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Orrder", orderSchema);
