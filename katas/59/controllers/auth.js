const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { hash } = require('bcrypt');

async function register(req, res) {
    const hashedPassword = await hash(req.body.password, 10);
    const user = new User({
        email: req.body.email,
        password: hashedPassword
    });
    await user.save();
    res.status(201).json({ message: 'User created' });
}

module.exports = { register }; 