const express = require('express')
const router = express.Router()
const { register, login} = require('../controllers/user_controller')
const { protect } = require('../middleware/auth_midleware')

// route to handler user registration
router.post('/register', register)

// router to handle user login
router.post('/login', login)


module.exports = router;