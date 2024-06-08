const express = require('express')
const router = express.Router()
const authenticateToken = require('../Middleware/authenticateToken');
const userController = require('../Controllers/userController')
// baseURL /api/user

router.post('/', userController.createUser) 
router.post('/login', userController.loginUser);
/*router.get('/protected-route', authenticateToken, (req, res) => {
    res.json({ message: 'Welcome to the protected route!', user: req.user });
});*/


module.exports = router