// routes/auth.js
const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Import the User model
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authh = require("../middleware/authh");
const Orrder = require("../models/Orrder");
router.post("/reg", async (req, res) => {
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
router.post("/orders", async (req, res) => {
  try {
    const order = new Orrder(req.body);
    await order.save();

    res.status(201).json({ message: "User order succefully successfully" });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).send("An error occurred. Please try again later.");
  }
});
module.exports = router;
