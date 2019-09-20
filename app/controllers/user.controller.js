const User = require('../models/user.model')
// Create and save a new User
exports.create = (req, res) => {
    // Checking request
    if(!req.body.email && req.body.password){
        return res.status(400).send({
            message: "Check email & password"
        })
    }
    // Create an User
    const user = new User({
        name: req.body.name || "Unnamed User",
        email: req.body.email,
        password: req.body.password,
        avatarColor: req.body.avatarColor,
        avatarTitle: req.body.avatarTitle
    })
    // Save User into database
    user.save()
    .then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error with creating User.."
        })
    })
}
// Find all Users
// exports.findAll = (req, res) => {}
// Find User by id
// exports.findOne = (req, res) => {}
// Find User by email
// exports.findOne = (req, res) => {}
// Update User with id
// exports.put = (req, res) => {}
// Delete User with id
// exports.delete = (req, res) => {}
