const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hw')
})

app.listen(8080, console.log('listen-8080'))