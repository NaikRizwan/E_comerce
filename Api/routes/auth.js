// routes/auth.js
const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Import the User model
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authh = require("../middleware/authh");
const Orrder = require("../models/Orrder");
const Product = require("../models/Product");
const SingleProduct = require("../models/SingleProduct");

router.put(
  "/deleteCartItemAndMoveToCancelOrder/:orderId/:cartItemId/:email",
  async (req, res) => {
    console.log("cancel order is calling");
    try {
      const orderId = req.params.orderId;
      const cartItemId = req.params.cartItemId;
      const email = req.params.email;

      // Find the order document using orderId and cartItemId
      const order = await Orrder.findOne({
        email: email,
        "orders._id": orderId,
        "orders.cart._id": cartItemId,
      });
      console.log(order);
      if (!order) {
        return res
          .status(404)
          .json({ message: "Order or cart item not found" });
      }

      // Find the specific order item and cart item within it
      const orderItem = order.orders.find((item) =>
        item.cart.some((cartItem) => cartItem._id.toString() === cartItemId)
      );

      if (!orderItem) {
        return res.status(404).json({ message: "Cart item not found" });
      }

      // Find the index of the cart item in the cart array
      const cartItemIndex = orderItem.cart.findIndex(
        (item) => item._id.toString() === cartItemId
      );

      if (cartItemIndex === -1) {
        return res.status(404).json({ message: "Cart item not found" });
      }

      // Move cart data to cancel_order array
      if (!orderItem.cancel_order) {
        orderItem.cancel_order = [];
      }

      orderItem.cancel_order.push(orderItem.cart[cartItemIndex]); // Move cart data to cancel_order array
      orderItem.cart.splice(cartItemIndex, 1); // Remove the cart item from the cart array

      // Save the updated order document
      await order.save();

      res.status(200).json({
        message:
          "Cart item deleted and data moved to cancel_order successfully",
      });
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// router.post("/api/products", async (req, res) => {
//   try {
//     const newProduct = await Product.create(req.body);
//     res.status(201).json(newProduct);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });
router.patch("/orderrs/:email/:orderId", async (req, res) => {
  console.log("patch is calling");
  const { email, orderId } = req.params;
  const updateFields = req.body;

  try {
    const updatedOrder = await Orrder.findOneAndUpdate(
      { email, "orders._id": orderId },
      {
        $set: {
          "orders.$.delivarDate": updateFields.delivarDate || "",
          "orders.$.shippingDoneDate": updateFields.shippingDoneDate || "",
          "orders.$.packageArrivedDate": updateFields.packageArrivedDate || "",
          "orders.$.orderDone": updateFields.orderDone || false,
          "orders.$.shippingDone": updateFields.shippingDone || false,
          "orders.$.packageArrived": updateFields.packageArrived || false,
          "orders.$.delivered": updateFields.delivered || false,
        },
      },
      { new: true }
    );

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/orderrs/:email/:orderId", async (req, res) => {
  const { email, orderId } = req.params;

  try {
    const updatedOrder = await Orrder.findOneAndUpdate(
      { email },
      { $pull: { orders: { _id: orderId } } },
      { new: true }
    );

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post("/api/products", async (req, res) => {
  const {
    id,
    name,
    company,
    price,
    colors,
    image,
    description,
    category,
    shipping,
    featured,
    // Add more fields if needed
  } = req.body;

  try {
    let updatedProduct;

    // Check if ID exists
    if (id) {
      updatedProduct = await Product.findOneAndUpdate(
        { id: id }, // Search for the product by ID
        {
          $set: {
            name,
            company,
            price,
            colors,
            image,
            description,
            category,
            shipping,
            featured,
            // Update other fields as needed
          },
        },
        { new: true, upsert: true, runValidators: true }
      );
    } else {
      // If no ID provided, create a new product
      updatedProduct = await Product.create(req.body);
    }

    res.status(201).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.delete("/api/products/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await Product.findOneAndDelete({ id: productId });

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
router.delete("/api/singleproducts/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await SingleProduct.findOneAndDelete({
      id: productId,
    });

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
router.post("/api/singleproducts", async (req, res) => {
  const {
    id,
    stock,
    reviews,
    stars,
    image,
    // Add more fields if needed
  } = req.body;

  try {
    let updatedProduct;

    // Check if ID exists
    if (id) {
      updatedProduct = await SingleProduct.findOneAndUpdate(
        { id: id }, // Search for the product by ID
        {
          $set: {
            stock,
            reviews,
            stars,
            image,
            // Update other fields as needed
          },
        },
        { new: true, upsert: true, runValidators: true }
      );
    } else {
      // If no ID provided, create a new product
      updatedProduct = await SingleProduct.create(req.body);
    }

    res.status(201).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// router.post("/api/singleproducts", async (req, res) => {
//   try {
//     console.log("sinfle");
//     const newProduct = await SingleProduct.create(req.body);
//     res.status(201).json(newProduct);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });
// router.get("/api/singleproducts", async (req, res) => {
//   try {
//     const products = await SingleProduct.find();
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
// router.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

router.post("/reg", async (req, res) => {
  console.log("reg is calling");
  try {
    const { full_name, email, password } = req.body;

    if (!full_name || !email || !password) {
      return res.status(422).json({ error: "plz filled all field" });
    }
    const Userexit = await User.findOne({ email: email });
    if (Userexit) {
      return res.status(422).json({ error: "email already exist" });
    }
    // Create a new user instance and save it to the database
    const user = new User({ full_name, email, password });
    await user.save();

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Registration failed" });
  }
});

router.post("/log", async (req, res) => {
  console.log("log is calling");
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "plz filled the field" });
    }
    const userlogin = await User.findOne({ email: email });
    if (userlogin) {
      const ismatch = await bcrypt.compare(password, userlogin.password);
      token = await userlogin.generateAuthToken();

      // res.cookie("jwtoken", token, {
      //   expires: new Date(Date.now() + 25892000000),
      //   httpOnly: true,
      // });
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
        secure: true,
        sameSite: "none",
        // Ensure to set the secure flag
      });

      if (!ismatch) {
        res.status(400).json({ message: "invalid carendatinals " });
      } else {
        res.status(200).json({
          message: "user login succesfully",
          userlogin: userlogin,
        });
      }
    } else {
      res.status(400).json({ message: "invalid carendatinals " });
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: "login failed" });
  }
});
router.get("/riz", authh, (req, res) => {
  res.send(req.rootUser);
});
// router.get('/rifat',authh ,(req ,res) => {
//   console.log("nav calling");

//   })
router.get("/rifat", authh, (req, res) => {
  res.json({ userDataa: true });
});
// router.get("/about", authh, (req, res) => {
//   console.log("about");
//   res.send(req.rootUser);
// });
router.get("/about", authh, (req, res) => {
  if (req.rootUser) {
    // Assuming req.rootUser is an object
    res.json(req.rootUser);
  } else {
    res.status(401).json({ error: "Unauthorized" }); // Sending a JSON object for unauthorized cases
  }
});

router.get("/logout", authh, (req, res) => {
  res.clearCookie("jwtoken", {
    path: "/",
    secure: true,
    sameSite: "none",
  });
  res.status(200).send("user logout");
});

router.post("/myorder", async (req, res) => {
  try {
    console.log("myorser is calling");
    const { email } = req.body;
    // console.log(email, full_name);
    const usermyorder = await Orrder.find({ email });
    res.status(200).json({
      orders: usermyorder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});
// router.post("/orders", async (req, res) => {
//   try {
//     const order = new Orrder(req.body);
//     await order.save();

//     res.status(201).json({ message: "User order succefully successfully" });
//   } catch (error) {
//     console.error("Error placing order:", error);
//     res.status(500).send("An error occurred. Please try again later.");
//   }
// });

router.post("/orders", async (req, res) => {
  console.log("order is calling");
  try {
    const { email } = req.body;

    // Check if the email already exists in the database
    const existingOrder = await Orrder.findOne({ email });

    if (existingOrder) {
      // If the email exists, add a new order to the existing document
      existingOrder.orders.push(req.body);
      await existingOrder.save();
      res
        .status(201)
        .json({ message: "Order added to existing user successfully" });
    } else {
      // If the email doesn't exist, create a new document
      const newOrder = new Orrder({
        email,
        orders: [req.body],
      });
      await newOrder.save();
      res
        .status(201)
        .json({ message: "New user with order created successfully" });
    }
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).send("An error occurred. Please try again later.");
  }
});

module.exports = router;
