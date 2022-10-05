const express = require('express');
const c_dataLogs = require('../controller/c_dataLogs');

const router = express.Router();

router.get('/', c_dataLogs.getAllData);
router.post('/', c_dataLogs.insertJSON);

module.exports = router;