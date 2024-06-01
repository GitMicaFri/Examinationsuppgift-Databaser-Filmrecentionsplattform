require('dotenv').config()
const express = require('express')
//const ???Routes = require('./Routes/+ vilka routes från routes)
const bodyparser = require('body-parser')
const app = express()
const connectDB = require('./Database/database')

app.use (express.json())
app.use(bodyparser.json())
app.use('/api/ ') // fyll på med det som ska vara här från controller

connectDB()

const PORT = process.env.PORT || 5700
app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`)
})