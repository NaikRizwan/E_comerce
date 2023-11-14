const express = require("express");
const cors = require("cors");
const mongoose = require("./db");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
// const mongoose = require('mongoose');
const port = process.env.PORT || 3001; // You can change this port

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://zippy-kitsune-503e9c.netlify.app"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   // Additional headers as needed
//   // ...
//   next();
// });

const whitelist = ["https://zippy-kitsune-503e9c.netlify.app"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
const data = require("./ProductData/data");
dotenv.config({ path: "./config.env" });
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(require("./routes/auth"));
//const auth = require("./auth");
const productDetails = require("./ProductData/productDetails.json"); // Import the productDetails JSON file
app.get("/api/data", (req, res) => {
  // Check if an 'id' parameter is provided in the query string
  const id = req.query.id;
  if (id) {
    // Search for the product with the specified 'id' in the productDetails JSON file
    const productDetail = productDetails[id];
    if (productDetail) {
      // If a product detail with the specified 'id' is found, combine it with the basic product data
      const product = {
        ...data.find((item) => item.id === id),
        ...productDetail,
      };
      res.json(product);
    } else {
      // If the specified 'id' is not found in the productDetails JSON file, return a 404 Not Found response
      res.status(404).json({ error: "Product not found" });
    }
  } else {
    // If no 'id' parameter is provided, return the entire product list
    res.json(data);
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// mongoose.connect('mongodb://127.0.0.1:27017/rizrif', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// app.use(express.json()); // Parse JSON requests
// app.use('/regist', require('./routes/userrRoutes'));
// app.use('/log', require('./routes/loginRoutes'));
// app.use('/ord', require('./routes/orderRoutes'));
// app.use('/myord',require('./routes/myorderRoutes'));

// // free endpoint
// app.get("/free-endpoint", (request, response) => {
//   response.json({ message: "You are free to access me anytime" });
// });

// // authentication endpoint
// app.get("/auth-endpoint",auth, (request, response) => {
//   response.json({ message: "You are authorized to access me" });
// });
