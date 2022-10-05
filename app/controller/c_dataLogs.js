const dataLogs = require('../model/m_dataLogs.js')
const express = require('express')
const router = express.Router()


module.exports = {
    getAllData: (async (req, res) => {
        const data = await dataLogs.find({})
        res.json(data)
    }),

    insertJSON: ((req, res, next) => {
        dataLogs.insertMany(req.body.data, (err, r) => {
            !err ? res.send("200") : res.send(err)
        })
    }),

    insertSingleData: ((req, res, next) => {
        var data = new dataLogs({
            timestamp: req.body.timestamp,
            node: req.body.node,
            airtemp: req.body.airtemp,
            airhum: req.body.airhum,
            soilhum: req.body.soilhum,
            gps: req.body.gps
        })
        data.save((err, doc) => {
            !err ? res.send("200") : res.send(err)
        })
    })
}