const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const app = express();


mongoose.connect(process.env.dbUrl).then(() => {
    console.log("DB connected successfully")
}).catch((err) => {
    console.log(err)
})

app.get('/', (req, res) => {
    res.send("Hello from the Server")
})

app.listen(2301, () => {
    console.log("Server Started")
})