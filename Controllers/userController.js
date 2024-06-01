const User = require('../Models/userModel')

// POST /register: Registrera en ny användare
exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()
        res.status(200).send('Successfully created new user.')

    } catch(err) {
        res.status(400).send(err)
    }
}


// POST /login: Logga in en användare