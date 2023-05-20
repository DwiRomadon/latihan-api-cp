const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.create = async (req, res) => {
    try {
        const query = await prisma.jenis_kopi.create({
            data: req.body
        })

        if (query) {
            res.json({
                status: true,
                msg: "Berhasil input data !!!"
            })
        } else {
            res.json({
                status: false,
                msg: "Gagal input data !!!"
            })
        }
    } catch (error) {
        res.json({
            status: false,
            msg: "Terjadi kesalahan pada server !!!"
        })
    }
}

exports.findAll = async (req, res) => {
    try {
        const query = await prisma.jenis_kopi.findMany()

        if (query.length > 0) {
            res.json({
                status: true,
                msg: 'Berhasil memuat',
                result: query
            })
        } else {
            res.json({
                status: false,
                msg: "Tidak ada data jenis kopi",
                result: query
            })
        }
    } catch (error) {
        res.json({
            status: false,
            msg: "Terjadi kesalahan pada server"
        })
    }
}

exports.findById = async (req, res) => {
    try {
        const query = await prisma.jenis_kopi.findUnique({
            where: {
                id: Number(req.params.id)
            }
        })

        if (query) {
            res.json({
                status: true,
                msg: "Berhasil memuat",
                result: query
            })
        } else {
            res.json({
                status: false,
                msg: `Tidak ada data untuk ID => ${req.params.id} !!!`
            })
        }
    } catch (error) {
        res.json({
            status: false,
            msg: `Terjadi kesalahan pada server !!!`
        })
    }
}

exports.updateData = async (req, res) => {
    try {
        const update = await prisma.jenis_kopi.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        })

        res.json({
            status: true,
            msg: 'Berhasil update data!!'
        })

    } catch (error) {
        res.json({
            status: false,
            msg: `Terjadi kesalahan pada server !!!`
        })
    }
}

exports.deleteData = async (req, res) => {
    try {
        const hapus = await prisma.jenis_kopi.delete({
            where: {
                id: Number(req.params.id)
            }
        })
        res.json({
            status: true,
            msg: 'Berhasil menghapus data!!'
        })
    } catch (error) {
        res.json({
            status: false,
            msg: "Terjadi kesalahan pada server!!"
        })
    }
}