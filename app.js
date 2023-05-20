const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/jenis-kopi', require('./routes/JenisKopi'))
app.use('/data-kopi', require('./routes/DataKopi'))

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/data-mahasiswa', (req, res) => {
    res.json([
        {
            nim: "13421000",
            nama: "Imam CP",
            alamat: "Kobum"
        },
        {
            nim: "13421001",
            nama: "Vika",
            alamat: "Balam"
        },
        {
            nim: "13421002",
            nama: "Nisa",
            alamat: "Balam"
        }
    ])
})

// Ini mengirim data dengan params
app.get('/data-mahasiswa/:npm/:nohp', (req, res) => {
    res.json({
        nama: req.query.nama,
        npm: req.params.npm,
        alamat: req.query.alamat,
        nohp: req.params.nohp
    })
})

app.listen(3000, () => {
    console.log('Server berjalan di port 3000')
})