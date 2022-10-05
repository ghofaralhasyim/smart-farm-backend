require("dotenv").config()
require('./app/config/mongo_connect')
const bodyParser = require('body-parser')

const express = require('express')
const r_dataLogs = require('./app/routes/dataLogs')

const app = express()
const router = express.Router()
app.use(bodyParser.json());

app.use('/data_logs', r_dataLogs)

const server = app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000")
});

