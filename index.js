require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const connectDB = require('./Database/database')

const userRoute = require('./Routes/userRoute')

app.use (express.json())
app.use(bodyparser.json())
app.use('/api/user', userRoute) 
app.use('/api/movie', movieRoute) // här är jag nu
//app.use('/api/review', reviewRoute)

connectDB()

const PORT = process.env.PORT || 5700
app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`)
})