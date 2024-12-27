const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    firstname: String,
    lastname: String,
    email: { type: String, unique: true },
    password: String,
    image: {
        type: String,
        default: 'avatar.png'
    }

})

module.exports = mongoose.model('User' , userSchema );