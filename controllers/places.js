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
  Place.push(req.body)
  res.redirect('/places')
})

module.exports = router