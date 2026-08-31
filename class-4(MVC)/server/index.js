const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const productRoutes = require('./routes/product.route.js')

dotenv.config()

const app = express();  
app.use(express.json())

app.use('/products', productRoutes)  // intializing product routes


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