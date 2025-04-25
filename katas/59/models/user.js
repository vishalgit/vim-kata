const { Schema } = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail
        }
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = userSchema; 