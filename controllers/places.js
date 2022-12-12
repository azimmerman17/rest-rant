const router = require('express').Router()
const Places = require('../models/places')

// show all the places
router.get('/', async (req, res) => {
  const places = await Places.find()
  try {
    res.render('index', {
      places
    })
  } catch (error) {
    console.log('error', error)
    res.render('error404')
  }
})

// create new place
router.get('/new', (req, res) => {
  res.render('new')
})

//edit data for place by index
router.get('/:id/edit', (req, res) => {
  const { id } = req.params
  const place = Places[index]
  if (isNaN(index)) {
    res.render('error404')
  } else if (!Places[index]) {
    res.render('error404')
  } else {
    res.render('edit', {
      place,
      index
    })
  }
})

//get place by index
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const place = await Places.findById(id)
  try {
    res.render('show', {
      place
    })
  } catch (error) {
    console.log('error', error)
    res.render('error404')
  }
})

//post new place
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = '/images/restaurat-bar-photo.jpg'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  Places.create(req.body)
  try {
    res.redirect('/places')
  } catch (error) {
    console.log(error)
    res.render('error404')
  }
})

router.put('/:index', (req, res) => {
  const { index } = req.params
  if (isNaN(index)) {
    res.render('error404')
  } else if (!Places[index]) {
    res.render('error404')
  } else {
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = '/images/restaurat-bar-photo.jpg'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    Places[index] = req.body
    res.redirect(`/places/${index}`)
  }
})

// Delete place
router.delete('/:index', (req, res) => {
  const { index } = req.params
  if (isNaN(index)) {
    res.render('error404')
  } else if (!Places[index]) {
    res.render('error404')
  } else {
    Places.splice(index, 1)
    res.status(303).redirect('/places')
  }
})

module.exports = router