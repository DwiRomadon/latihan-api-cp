const router = require('express').Router()
const controller = require('../controller/DataKopi')
const multer = require('multer')

const gambar = multer.diskStorage({
    filename: async function (req, file, cb) {
        let ext = file.originalname.substring(
            file.originalname.lastIndexOf("."),
            file.originalname.length
        )
        cb(null, Date.now() + ext)
    },
    destination: async function (req, file, cb) {
        cb(null, './public/img')
    }
})

const uploadImg = multer({ storage: gambar }).single("gambar")

router.post('/create', uploadImg, controller.create)
router.get('/get-data', controller.findAll)
router.get('/get-data/:id', controller.findById)
router.put('/update/:id', uploadImg, controller.updateData)

module.exports = router