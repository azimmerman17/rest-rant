require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hw')
})

// 404 not found
app.get('*', (req, res) => {
    res.status(404).send(
        '<h1>404 - Not Found</h1>'
    )
})

const PORT = process.env.PORT

app.listen(PORT, console.log(`listen-${PORT}`))