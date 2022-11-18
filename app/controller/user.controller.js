const db = require("../model")
var bcrypt = require("bcryptjs")

exports.getAllUser = async (req, res) => {
    const data = await db.user.find({})
    res.json(data)
    return
}

exports.postNewUser = async (req, res) => {
    var hash = await bcrypt.hash(req.body.password, 12);
    var data = new db.user({
        email: req.body.email,
        password: hash,
        isVerified: false,
        createdAt: new Date().toISOString(),
        role: "user",
        gateways: []
    })
    data.save((err, doc) => {
        !err ? res.status(200).send({
            message: "New user successfully registered"
        }) : res.send(err)
    })
}