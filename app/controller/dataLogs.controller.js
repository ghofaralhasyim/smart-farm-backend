const db = require("../model")


exports.getAllData = async (req, res) => {
    const data = await db.dataLogs.find({})
    res.json(data)
    return
}

exports.getById = async (req, res) => {
    const data = await db.dataLogs.findOne({
        _id: req.params._id
    })
    console.log(data)
    res.json(data)
    return
}

exports.insertJSON = (req, res) => {
    db.dataLogs.insertMany(req.body.data, (err, r) => {
        !err ? res.send("200") : res.send(err)
    })
}

exports.insertSingleData = (req, res, next) => {
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
}
