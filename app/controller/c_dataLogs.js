const dataLogs = require('../model/m_dataLogs.js')
const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()


module.exports = {
    getAllData: (async (req, res) => {
        const data = await dataLogs.find({})
        res.json(data)
    }),

    insertJSON: (async (req, res, data) => {

    })
}