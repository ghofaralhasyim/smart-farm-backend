const mongoose = require('mongoose');

const users = mongoose.model('users', new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: String
}));

module.exports = users;