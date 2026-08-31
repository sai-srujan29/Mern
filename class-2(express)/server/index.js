const express = require('express')

const app = express()
app.use(express.json())


const courses = [
    {id: 1 , courseName: 'Java', level: 'Advanced'},
    {id: 2 , courseName: 'C++', level: 'Beginner'},
    {id: 3 , courseName: 'pyhton', level: 'Intermediate'},
    {id: 4 , courseName: 'JS', level: 'Beginner'}
]

// READ -> get

app.get('/', (req, res) => {
    res.send('Welcome to Express Home page')
})

app.get('/about', (req, res) => {
    res.send('Welcome to Express About page')
})

app.get('/topics/courses', (req, res) => {
    res.send(courses)  
})

app.get('/topics/courses/:id', (req, res) => {
    let course = courses.find((course) => 
        course.id === parseInt(req.params.id)
    )
    res.send(course)
    
})

// Create - Post
 
app.post("/topics/courses", (req, res) => {
    courses.push(req.body)
    res.send("course has been created")
})

// Update - PUT

app.put('/topics/courses/:id', (req, res) => {
        let course = courses.find((course) => 
        course.id === parseInt(req.params.id)
    )   
    course.courseName = req.body.courseName
    res.send(course)
})

// Delete - delete

app.delete('/topics/courses/:id', (req, res) => {
        let course = courses.find((course) => 
        course.id === parseInt(req.params.id)
    )   
    // have to finish this
})

app.listen(8005, () => {
    console.log("Server at port 8005 started")
})