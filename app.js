require("dotenv").config();
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
});

const server = app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000");
});

