const db = require("../model")

exports.getAllUser = async (req, res) => {
    const data = await db.user.find({})
    res.json(data)
    return
}