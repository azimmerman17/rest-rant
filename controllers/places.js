const router = require('express').Router()
const Places = require('../models/places')
//onst index = require('../views')

// show all the places
router.get('/', (req, res) => {
    res.render('index', {
      places: Places,
    })
    
})

// create new place
router.get('/new', (req, res) => {
  res.render('new')
})

//edit data for place by index
router.get('/:index/edit', (req, res) => {
  const { index } = req.params
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
router.get('/:index', (req, res) => {
  const { index } = req.params
  if (isNaN(index)) {
    res.render('error404')
  } else if (!Places[index]) {
    res.render('error404')
  } else {
    res.render('show', {
      place: Places[index],
      index
    })
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
  
  Places.push(req.body)
  res.redirect('places')
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