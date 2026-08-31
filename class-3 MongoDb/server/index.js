const express = require('express')
const mongoose = require('mongoose')

const dbUrl = 'mongodb+srv://srujanayetham_db_user:bEj7PDJeFRixFo8D@cluster0.xalhh6a.mongodb.net/LMS?appName=Cluster0'

mongoose.connect(dbUrl).then(() => {
    console.log("DB Connected Successfully")
}).catch((err) => {
    console.log("err")
})

const app = express()
app.use(express.json())

// Course Managment System

const courseSchema = new mongoose.Schema({
    course_name: {
        type: String,
        required: true,
    },

    instructor: {
        type: String,
        required: true,
    },

    ratings: {
        type: Number,
    },

    isPublished: {
        type: Boolean,
        required: true,
    },
});

let CourseModel = mongoose.model('course' , courseSchema)

app.get('/', (req, res) => {
    res.send("Hello from the server")
})

// Create a Course

app.post('/api/courses' , async (req , res)=>{
    await CourseModel.create({
        course_name : req.body.course_name,
        instructor : req.body.instructor,
        ratings : req.body.ratings,
        isPublished : req.body.isPublished
      })


      res.send('Course Created')
})

app.listen(2008, (req, res) => {
    console.log("Server started")
})