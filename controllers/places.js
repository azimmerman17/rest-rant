const router = require('express').Router()
const db = require('../models/index')
const Places = require('../models/places')
const Comments = require('../models/comment')

router.get('/', async (req, res) => {
    let places = await Places.find()
    .then((places) => {
      res.render('index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})


// create new place
router.get('/new', (req, res) => {
  res.render('new')
})

//edit data for place by id
router.get('/:id/edit', async (req, res) => {
  const { id } = req.params
  const place = await Places.findById(id)
  .then((place) => {
    res.render('edit', {
      place
    })
  })
  .catch((error)  => {
    console.log('error', error)
    res.render('error404')
  })
})

//get place by id
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const place = await Places.findById(id)
  .populate('comments')
  .then(place => {
      res.render('show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


// GET: Seed Data
router.get('/data/seed', async (req, res) => {
  await Places.insertMany(seedData)
  res.redirect('/places')
})

// DELETE: Reset to seed data
router.get('/reset/seed', async (req, res) => {
  await Places.deleteMany()
  res.redirect('/places/data/seed')
})

//post new place
router.post('/', (req, res) => {
  const { pic, city, state } = req.body
  if (!pic) req.body.pic = undefined
  if (!city) req.body.city = undefined
  if (!state) req.body.state = undefined

  Comments.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })

  
})

router.post('/:id/comment', async (req, res) => {
  console.log(req.body)
  const { id } = req.params
  const { author, stars, rant, content  } = req.body
  if (!author) req.body.author = undefined
  if (!content) req.body.content = undefined
  if (rant === 'on') {
    req.body.rant = true
  } else {
    req.body.rant = false
  }
  let place = await Places.findById(id)
  .then(place => {
      Comments.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})


router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { pic, city, state } = req.body
    if (!pic) req.body.pic = undefined
    if (!city) req.body.city = undefined
    if (!state) req.body.state = undefined

    await Places.findByIdAndUpdate(id, req.body)
    .then(() => {
      res.redirect(`/places/${id}`)
    })
  .catch((error) => {
    console.log(error)
    res.render('error404')
  })
})

// Delete place
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await Places.findByIdAndDelete(id)
  .then(() => {
    res.status(303).redirect('/places')
  })
  .catch((error) => {
    console.log(error)
    res.render('error404')
  })
})

module.exports = router