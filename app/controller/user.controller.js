const db = require("../model")
const bcrypt = require("bcryptjs")
const User = db.user
const jwt = require('jsonwebtoken')
const config = require("../config/auth.config")

exports.getAllUser = async (req, res) => {
    const data = await db.user.find({})
    res.json(data)
    return
}

exports.postNewUser = async (req, res) => {
    const data = new db.user({
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 12),
        isVerified: false,
        createdAt: new Date().toISOString(),
        role: "user",
        gateways: []
    })
    const checkUser = await db.user.find(
        { email: req.body.email }, { _id: 1 }
    )
    if (checkUser.length) {
        return res.status(409).send({ message: "User already exists!" })
    }
    data.save((err, doc) => {
        !err ? res.status(200).send({
            message: "New user successfully registered"
        }) : res.send(err)
    })
}

exports.postNewAdmin = async (req, res) => {
    const token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({ message: "Unauthenticated." });
    }
    const data = new db.user({
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 12),
        isVerified: true,
        createdAt: new Date().toISOString(),
        role: "admin",
        gateways: []
    })
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized." });
        }
        req.userId = decoded.id;
    });
    const checkUser = await db.user.find(
        { email: req.body.email }, { _id: 1 }
    )
    const user = await User.findOne({ _id: req.userId });
    if (user.role != "admin") {
        return res.status(401).send({ message: "Unauthorized." })
    }
    if (checkUser.length) {
        return res.status(409).send({ message: "User already exists!" })
    }
    data.save((err, doc) => {
        !err ? res.status(200).send({
            message: "New admin successfully registered"
        }) : res.send(err)
    })
    
}