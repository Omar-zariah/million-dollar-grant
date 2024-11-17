const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY'); // Add your Stripe API key here

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/million-dollar-grant', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Error connecting to MongoDB", err);
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
