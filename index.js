require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('homepage')
})

// 404 not found
app.get('*', (req, res) => {
    res.status(404).send(
        '<h1>404 - Not Found</h1>'
    )
})

const PORT = process.env.PORT

app.listen(PORT, console.log(`listen-${PORT}`))