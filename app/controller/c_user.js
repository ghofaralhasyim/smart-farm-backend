const User = require('../model/m_users.js')

// const config = require('../config/roles');
// const bcrypt = require('bcryptjs');
// const ROLE = config.ROLE;
// const jwt = require('jsonwebtoken');

module.exports = {
    async test(req, res) {
        const data = await User.find({})
        res.json(data)
    },
    signIn(req, res) {
        const data = User.findOne({ email: req.body.email }).exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            res.status(200).send({
                id: user._id,
                name: user.name,
                email: user.email,
                roles: user.roles,
            });
        })
    }
}