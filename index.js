const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./database/db');
require('dotenv').config();


const app = express();

const port = process.env.PORT;


// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Mongo connection success log
mongoose.connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
