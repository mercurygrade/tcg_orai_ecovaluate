const jwt = require('jsonwebtoken');
const aysncHandler = require('express-async-handler');
const User = require('../models/User');

// validate jwt token
const protect = aysncHandler(async (req, res, next) => {
  let token;

  // check if authoriuation header start with Bearer

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // extract te token for authorization header
      token = req.headers.authorization.split(' ')[1];

      // verify the token
      const decoded = jwt.verify(token, process.env.SECRET_JWT);
      req.user = await User.findOne(decoded.id).select('-password');
      next();

    } catch (e) {
      res.status(401).json({ message: 'User not authorized' });
    }

    // check if there is token
    if (!token) {
      res.status(401).json({ message: 'User not authorized' });
    }

  }
})

module.exports = { protect };