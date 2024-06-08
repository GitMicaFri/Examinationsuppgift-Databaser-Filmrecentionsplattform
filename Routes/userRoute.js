const express = require('express')
const router = express.Router()
const authenticateToken = require('../Middleware/authenticateToken');
const userController = require('../Controllers/userController')
// baseURL /api/user

router.post('/', async (req, res) => {
    try {
        await userController.createUser(req.body)
        res.status(200).send('Successfully created new user.')

    } catch(err) {
        res.status(400).send(err)
    }
}) 

router.post('/login', async (req, res) => {
    try {
         const token = await userController.loginUser(req.body)
        res.status(200).json({ message: 'Logged in successfully', token })

    } catch (error) {
        if(error.message === 'User not found') {
            res.status(404).json({message: error.message})
        }
        if(error.message === 'Incorrect password') {
            res.status(401).json({message: error.message})
        }

        res.status(500).json({ message: 'Internal server error', error })
    }
});


module.exports = router