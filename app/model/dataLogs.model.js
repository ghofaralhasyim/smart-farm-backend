const mongoose = require('mongoose');

const dataLogs = mongoose.model('datalogs', new mongoose.Schema({
    idNode: String,
    airTemp: Number,
    airHum: Number,
    timestamp: String,
    gps: Object
}));

module.exports = dataLogs;