const router = require('express').Router()
const controller = require('../controller/DataKopi')

router.post('/create', controller.create)
router.get('/get-data', controller.findAll)
router.get('/get-data/:id', controller.findById)

module.exports = router