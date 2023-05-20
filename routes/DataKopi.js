const router = require('express').Router()
const controller = require('../controller/DataKopi')

router.post('/create', controller.create)

module.exports = router