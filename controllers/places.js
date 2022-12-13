const router = require('express').Router()
const Places = require('../models/places')
const seedData = require('../models/seedData')

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

//edit data for place by id
router.get('/:id/edit', async (req, res) => {
  const { id } = req.params
  const place = await Places.findById(id)
  try {
    res.render('edit', {
      place
    })
  } catch (error) {
    console.log('error', error)
    res.render('error404')
  }
})

//get place by id
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

// GET: Seed Data
router.get('/data/seed', async (req, res) => {
  await Places.insertMany(seedData)
  res.redirect('/places')
})

// DELETE: 
router.get('/reset/seed', async (req, res) => {
  await Places.deleteMany()
  res.redirect('/places/data/seed')
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

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { pic, city, state } = req.body
  try {
    if (!pic) {
      // Default image if one is not provided
      req.body.pic = '/images/restaurat-bar-photo.jpg'
    }
    if (!city) {
      req.body.city = 'Anytown'
    }
    if (!state) {
      req.body.state = 'USA'
    }

    await Places.findByIdAndUpdate(id, req.body)
    res.redirect(`/places/${id}`)
  } catch (error) {
    console.log(error)
    res.render('error404')
  }
})

// Delete place
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await Places.findByIdAndDelete(id)
  try {
    res.status(303).redirect('/places')
  } catch (error) {
    console.log(error)
    res.render('error404')
  }
})

module.exports = router