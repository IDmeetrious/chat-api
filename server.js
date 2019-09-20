const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./app/routers/user.router')
// Use PORT
const port = process.env.PORT

// ---------------- Database ---------------- \\
// Init database
require('./app/config/db')

// ---------------- Database ---------------- \\

// Create express app
const app = express()

// Parse content of "applicaton/json"
app.use(bodyParser.json())

// Define a starting route
app.get('/', (req, res) => {
    res.status(201).json({'message':'Server is online.'})
})

// Init User routes
app.use(userRouter)

// Run the server to listen for requests
app.listen(port, () => { 
    console.info(`Server is running on port: ${port}`)
})
