require("dotenv").config()
require('./app/config/mongo_connect')
const bodyParser = require('body-parser')

const express = require('express')
const r_dataLogs = require('./app/routes/dataLogs')
const r_user = require('./app/routes/user')

const app = express()
app.use(bodyParser.json());

app.use('/api/data_logs', r_dataLogs)
app.use('/api/user/', r_user)

const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
    console.log("Server is running on port 3000")
});

