const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.create = async (req, res) => {
    try {
        req.body.id_jenis_kopi = Number(req.body.id_jenis_kopi)
        const input = await prisma.data_kopi.create({
            data: req.body
        })
        res.json({
            status: true,
            msg: "Berhasil input data kopi!!"
        })
    } catch (error) {
        res.json({
            status: false,
            msg: "Terjadi kesalahan pada server!!"
        })
    }
}

