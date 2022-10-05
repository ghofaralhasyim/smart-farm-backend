const express = require('express')
const c_user = require('../controller/c_user')

const router = express.Router()

router.get('/signin', c_user.test)
router.post('/signin', c_user.signIn)

module.exports = router;