const dotenv = require("dotenv").config();
const express = require('express');
const db = require('./src/config/db');
const PORT = process.env.PORT || 3000
const cors = require('cors');
const { protect } = require('./src/middleware/auth_midleware');

// create an instance of the experss server
const app = express();

// connect to mongodb database
db();

// middleware to parse json requests
app.use(express.json());

// enable cors orgin resource sharing
app.use(cors()); 

// middleware to parse url encoded requests
app.use(express.urlencoded({ extended: false }));

// define routes
app.use('/api/user/', require('./src/routes/user_route'))

// authentication middleware
app.use(protect)

// start the experss server
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
})

