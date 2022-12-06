//  Moduels and routes
require('dotenv').config()
const express = require('express')
const router = require('./controllers/places')
const methodOveride = require('method-override')


const placeRoutes = require('./controllers/places')
const places = require('./models/places')

const app = express()

// middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOveride('_method'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// controllers and routes
app.use('/places', placeRoutes)

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