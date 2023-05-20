const router = require('express').Router()
const controller = require('../controller/JenisKopi')

router.post('/create', controller.create)
router.get('/get-data', controller.findAll)
router.get('/get-data/:id', controller.findById)
router.put('/update/:id', controller.updateData)
router.delete('/delete/:id', controller.deleteData)

module.exports = router