const User = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


// POST /register: Registrera en ny användare
const createUser = async (payload) => {
    const {userName, email, password, role} = payload
    const encryptedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({
        userName,
        email,
        password: encryptedPassword,
        role
    })
    await newUser.save()
}

// POST /login: Logga in en användare
const loginUser = async (payload) => {
    const { email, password } = payload
    const user = await User.findOne({ email })

    //console.log("DB hashed password:", user.password);
    //const testHash = await bcrypt.hash(password, 10);
    //console.log("Input hashed password:", testHash);

    if (!user) {
      throw new Error(`User not found`)
    }
    const correctMatch = await bcrypt.compare(password, user.password)
    if(!correctMatch) {
        throw new Error(`Incorrect password`)
    }
    const token = jwt.sign(
        { id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }
    )
    return token
}

module.exports = {
    createUser,
    loginUser
}
