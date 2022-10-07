const mongoose = require('mongoose');

const users = mongoose.model('users', new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    role: String,
    createdAt: Date,
    gateways: Array
}));

module.exports = users;