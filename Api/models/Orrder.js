// order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  username:String,
  email: String,
  street: String,
  country:String,
  town:String,
  sta:String,
  pin:Number,
  createdAt: String,
  delivarDate:String,
  productPrice:Number,
  cart: [
    {
      id: String,
      name: String,
      color: String,
      amount: Number,
      image: String,
      price:Number,
      
    
    },
  ],

});

module.exports = mongoose.model('Order', orderSchema);
