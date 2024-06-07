require('dotenv').config()
const mongoose = require('mongoose')


const connectDB = async () => { // asynkron för att göra en uträkning utanför
    try {
        await mongoose.connect(process.env.MONGO_URI) // uniform resource identifier (URL är en locator)
        console.log(`Connected to database, ${process.env.MONGO_URI}`) //skriv om
    } catch (error) {
        console.error('Error connecting to database', error)
        process.exit(1) // stänger processen
    }
}

module.exports = connectDB