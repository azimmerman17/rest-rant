const router = require('express').Router()
const Place = require('../models/places')

// show all the places
router.get('/', (req, res) => {
    res.render('./index', {
      places: Place
    })
    
})

// create new place
router.get('/new', (req,res) => {
  res.render('./new')
})

//get place by index
router.get('/:index', (req,res) => {
  const { index } = req.params
  res.render('./show', {
    place: Place[index]
  })
})

//post new place
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = '/public/images/restaurat-bar-photo.jpg'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  
  Place.push(req.body)
  res.redirect('/places')
})

module.exports = router