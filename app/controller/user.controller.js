const db = require("../model")
// const User = db.user
const jwt = require('jsonwebtoken')
const config = require("../config/auth.config")

exports.getAllUser = async (req, res) => {
    const data = await db.user.find({})
    res.json(data)
    return
}

async function checkIfUserExists(email) {
    email =  this.email;
    const data = await db.user.findOne({
        email: email
    })
    if (!null){
        return true
    } return false
    
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
    if (!checkIfUserExists(data.email)){
        data.save((err, doc) => {
            !err ? res.status(200).send({
                message: "New user successfully registered"
            }) : res.send(err)
        })
    } else {
        res.status(401).send({
            message: "User exists!"
        })
    }
}

exports.postNewAdmin = async (req, res) => {
    var hash = await bcrypt.hash(req.body.password, 12);
    let token = req.headers["x-access-token"];
 
    if (!token) {
        return res.status(403).send({ message: "Unauthenticated." });
    }
    var data = new db.user({
        email: req.body.email,
        password: hash,
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

    const user = await User.findOne({ _id : req.userId });
    if (user.role != "admin") {
        return res.status(401).send({message: "Unauthorized."})
    } else {
        data.save((err, doc) => {
            !err ? res.status(200).send({
                message: "New admin successfully registered"
            }) : res.send(err)
        })
    }
}