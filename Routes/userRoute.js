const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')
// baseURL /api/user

router.post('/', userController.createUser) 

// här ska loginUser vara


module.exports = router