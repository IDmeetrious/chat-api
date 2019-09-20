module.exports = (app) => {
    const users = require('../controllers/user.controller.js')

    // Find all users
    // app.get('/v1/user', users.findAll)
    // // Create a new User
    app.post('/v1/user/add', users.create)
    // // Find User by id
    // app.get('/v1/user/:id', users.findOne)
    // // Find User by email
    // app.get('/v1/user/byEmail/:email', users.findOne)
    // // Update User with id
    // app.put('/v1/user/:id', users.update)
    // // Delete User with id
    // app.delete('/v1/user/:id', users.delete)

}