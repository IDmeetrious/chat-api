const express = require('express')
const bodyParser = require('body-parser')

// Create express app
const app = express()
// Use PORT
const port = process.env.PORT || 3005

// Parse content of "applicaton/json"
app.use(bodyParser.json())

// ---------------- Database ---------------- \\
// Init database
const dbConfig = require('./config/database.config')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

// Connect to database
mongoose.connect(dbConfig.url, { 
    useNewUrlParser : true, 
    useUnifiedTopology : true 
}).then(() => { 
    'Successfully connected to the database' 
}).catch(err => { 
    console.log('Could not connect to the db', err)
    process.exit() 
})
// ---------------- Database ---------------- \\

// Define a starting route
app.get('/', (req, res) => {
    res.status(201).json({'message':'Server is online.'})
})

// Add User routes
require('./app/routes/user.routes')(app)

// Run the server to listen for requests
app.listen(port, () => { 
    console.info(`Server is running on port: ${port}`)
})
