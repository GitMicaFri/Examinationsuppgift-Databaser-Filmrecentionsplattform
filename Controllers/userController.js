const User = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


// POST /register: Registrera en ny användare
exports.createUser = async (req, res) => {
    try {
        const {userName, email, password, role} = req.body
        const encryptedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            userName,
            email,
            password: encryptedPassword,
            role
        })
        await newUser.save()
        res.status(200).send('Successfully created new user.')

    } catch(err) {
        res.status(400).send(err)
    }
}


// POST /login: Logga in en användare
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ message: 'Could not find user.' })
        }
        const correctMatch = await bcrypt.compare(password, user.password)
        if(!correctMatch) {
            return res.status(401).json({ message: `Could not find password.`})
        }

        const token = jwt.sign(
            { id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.status(200).json({ message: 'Logged in successfully', token })

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error })
    }
}
