const mongoose = require('mongoose');

const users = mongoose.model('users', {});

module.exports = users;