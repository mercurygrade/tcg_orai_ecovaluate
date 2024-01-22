const User = require('../models/User');
const asyncHandler = require('express-async-handler')
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// register user
const register = asyncHandler(async (req, res) => {

  // distructure requrest body
  const {
    firstName,
    lastName,
    email,
    password,
  } = req.body;

  // check all fields are field
  if (!firstName || !lastName || !email || !password) {
    res.status(400).json({ message: "Please add a all fields" });
  }

  // check if the user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json({ message: "User already exists" });
  }

  // generate salt and hash the passowrd
  const salt = await bycrypt.genSalt(10);
  const hashedPassword = await bycrypt.hash(password, salt);

  // create a new user
  const user = await User.create({ firstName, lastName, email, password: hashedPassword });

  if (!user) {
    res.status(400).json({ message: 'Invalid data' });
  }

  res.status(201).json({ message: 'Success', token: generateToken(user._id) });
});



// login user
const login = asyncHandler(async (req, res) => {
  // destructure request body
  const { email, password } = req.body;

  // find a user
  const user = await User.findOne({ email });
  if (user && await bycrypt.compare(password, user.password)) {
    res.status(200).json({
      message: "Logged in successfully",
      token: generateToken(user._id)
    });
  } else {
    res.status(400).json({ message: 'Invalid username or password' });
  }
});

// generate jwt token
const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.SECRET_JWT,
    { expiresIn: "30d" }
  );
}

module.exports = { register, login };
