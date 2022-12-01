require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

// 404 not found
app.get('*', (req, res) => {
    res.status(404).render(
        'error404'
    )
})

const PORT = process.env.PORT

app.listen(PORT, console.log(`listen-${PORT}`))