const mongoose = require('mongoose')
// Define the User model
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatarColor: String,
    avatarTitle: String,
})
module.exports = mongoose.model('User', UserSchema)